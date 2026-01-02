#! /bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Resize only staged JPEG files to a max width of 1200px.
# Usage: script/resize_images.sh [--dry-run|-n] [--help]

# Parse options
DRY_RUN=0
ADD_IMAGES=0
while [ $# -gt 0 ]; do
	case "$1" in
		-d|--dry-run)
			DRY_RUN=1
			shift
			;;
		-a|--add-images)
			ADD_IMAGES=1
			shift
			;;
		-h|--help)
			echo "Usage: $0 [--dry-run|-n]"
			exit 0
			;;
		*)
			echo "Unknown option: $1" >&2
			echo "Usage: $0 [--dry-run|-n]" >&2
			exit 1
			;;
	esac
done

# Determine repo root (script lives in `script/` under repo)
repo_root=$(cd "$parent_path/.." && pwd -P)

# Add images if requested
if [ "$ADD_IMAGES" -eq 1 ]; then
	echo "Staging images."
	git -C "$repo_root" add $repo_root/images/*
fi


# Collect staged JPEG/JPG files (added, copied, or modified)
mapfile -d '' -t staged_files < <(git -C "$repo_root" diff --name-only --cached --diff-filter=ACM -z -- '*.jpg' '*.jpeg' '*.JPG' '*.JPEG')

if [ ${#staged_files[@]} -eq 0 ]; then
	echo "No staged JPEG files to resize."
	exit 0
fi

# Helper to act or echo depending on dry-run
do_resize_and_add() {
	local util="$1" path="$2" rel="$3"
	if [ "$DRY_RUN" -eq 1 ]; then
		if [ "$util" = "sips" ]; then
			echo "Would run: sips --resampleWidth 1200 \"$path\""
		else
			echo "Would run: mogrify -resize 1200x \"$path\""
		fi
		echo "Would run: git -C \"$repo_root\" add -- \"$rel\""
	else
		if [ "$util" = "sips" ]; then
			sips --resampleWidth 1200 "$path"
		else
			mogrify -resize 1200x "$path"
		fi
		git -C "$repo_root" add -- "$rel"
	fi
}

# Prefer macOS `sips` if available; otherwise fall back to ImageMagick `mogrify`.
if command -v sips >/dev/null 2>&1; then
	echo "Using sips to resize staged images"
	tool="sips"
elif command -v mogrify >/dev/null 2>&1; then
	echo "Using mogrify (ImageMagick) to resize staged images"
	tool="mogrify"
else
	echo "Error: neither 'sips' nor 'mogrify' found. Install ImageMagick or use macOS 'sips'." >&2
	exit 1
fi

for f in "${staged_files[@]}"; do
	path="$repo_root/$f"
	if [ -f "$path" ]; then
		echo "Processing '$f'"
		do_resize_and_add "$tool" "$path" "$f"
	else
		echo "Skipping missing file '$f'"
	fi
done

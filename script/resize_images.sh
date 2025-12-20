#! /bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Resize blog images to a max width of 1200px.
# Prefer macOS `sips` if available; otherwise fall back to ImageMagick `mogrify`.
if command -v sips >/dev/null 2>&1; then
	echo "Using sips to resize images"
	find ../images/blogs -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -exec sips --resampleWidth 1200 {} \;
elif command -v mogrify >/dev/null 2>&1; then
	echo "Using mogrify (ImageMagick) to resize images"
	find ../images/blogs -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -exec mogrify -resize 1200x {} \;
else
	echo "Error: neither 'sips' nor 'mogrify' found. Install ImageMagick or use macOS 'sips'." >&2
	exit 1
fi
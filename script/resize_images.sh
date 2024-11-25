#! /bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

find ../images/blogs -iname '*.jpg' -exec sips --resampleWidth 1200 {} \;
find ../images/blogs -iname '*.jpeg' -exec sips --resampleWidth 1200 {} \;
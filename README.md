1. Add a blog folder under `blog` (eg: `YYYYdestination`)

1. Add a new collection in `_config.yml`: 

```yml
  blog-YYYY-destination:
    output: true
    permalink: /travelblog/<blog-folder>/:path/
```

1. Add a new blog landing page under `_travel_blog` (eg: Y`YYY-destination.md`)

1. Reference the new collection in the new landing page (eg: `site.blog-YYYY-destination`)
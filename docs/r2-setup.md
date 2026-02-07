# Cloudflare R2 Photo Storage

Photo albums use Cloudflare R2 for image hosting at `photos.machielreyneke.com`.

## Setup

### 1. Create R2 bucket

1. Cloudflare Dashboard → R2 → Create bucket
2. Name: `photos` (or similar)
3. Location: Auto

### 2. Enable public access via custom domain

1. Bucket → Settings → Public Access → Custom Domains
2. Add domain: `photos.machielreyneke.com`
3. Cloudflare handles SSL and caching automatically

### 3. Folder structure

Organize by album slug:

```text
photos/
├── sample-album/
│   ├── cover.webp
│   ├── photo-01.webp
│   ├── photo-02.webp
│   └── ...
├── another-album/
│   ├── cover.webp
│   └── ...
```

## Image optimization

- **Max width**: 2400px (sufficient for most screens including retina)
- **Format**: WebP (best compression-to-quality ratio)
- **Quality**: 80-85% for photos
- **Cover images**: Same max width, used at various sizes via CSS `object-fit: cover`

### Quick optimization with ImageMagick

```bash
# Convert and resize a single image
magick input.jpg -resize 2400x2400\> -quality 82 output.webp

# Batch convert a directory
for f in *.jpg; do
  magick "$f" -resize 2400x2400\> -quality 82 "${f%.jpg}.webp"
done
```

## Upload methods

### Dashboard

1. Cloudflare Dashboard → R2 → bucket → Upload
2. Drag and drop files into the appropriate folder

### Wrangler CLI

Requires one-time login: `npx wrangler login`

The object path format is `{bucket}/{key}`. Must use `--remote` flag (defaults to local otherwise).

```bash
# Upload a single file
npx wrangler r2 object put "photos/sample-album/photo-01.webp" \
  --file ./photo-01.webp --content-type image/webp --remote

# Upload an entire directory
for f in ./album-photos/*.webp; do
  npx wrangler r2 object put "photos/sample-album/$(basename $f)" \
    --file "$f" --content-type image/webp --remote
done
```

## URL pattern

Once uploaded, images are accessible at:

```text
https://photos.machielreyneke.com/{album-slug}/{filename}.webp
```

Reference these URLs in album frontmatter (`cover` and `photos[].src` fields).

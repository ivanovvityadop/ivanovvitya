# Managing still albums

This version has no monthly storage cost. The photos live in the same GitHub repository as the website, and one file controls every album:

- `albums-data.js`

## Add your photographs

1. Resize photographs for the web before uploading. A practical target is approximately 2,000–2,500 pixels on the long edge, saved as high-quality JPG or WebP.
2. Create a folder for the album, for example:

   `stills/tokyo-night/`

3. Add the photographs to that folder:

   `stills/tokyo-night/01.jpg`

   `stills/tokyo-night/02.jpg`

   `stills/tokyo-night/03.jpg`

On GitHub, open the repository and choose **Add file → Upload files**. Drag in the optimized photographs and commit the change.

## Add or rename an album

Open `albums-data.js`. Each block beginning with `{` is one album:

```js
{
  slug: "tokyo-night",
  title: "Tokyo Night",
  year: "2026",
  description: "Night photographs made around Tokyo.",
  photos: [
    { src: "stills/tokyo-night/01.jpg", alt: "Tokyo Night — frame 01" },
    { src: "stills/tokyo-night/02.jpg", alt: "Tokyo Night — frame 02" },
    { src: "stills/tokyo-night/03.jpg", alt: "Tokyo Night — frame 03" }
  ]
}
```

- `title` controls the album name visitors see.
- `slug` controls the album URL. Use lowercase letters and hyphens without spaces.
- `description` appears at the top of the open album.
- `photos` controls the images and their order.
- The first photo is the cover.
- The first three photos are used for the hover preview.

## Control the number of albums

- Add another album block to show another cover.
- Delete an entire album block to remove that album.
- Move album blocks up or down to change their order.

## Control the number of photographs

- Add another photo line inside `photos` to add an image.
- Delete a photo line to remove an image.
- Move photo lines up or down to change the image order.

Remember to place a comma between album blocks and between photo lines.

export function getImageOptions() {
  return {
    optimize: {
      breakpoints: [360, 720, 1080, 1440, 1920],
      formatOptions: {
        avif: { quality: 60 },
        webp: { quality: 78 },
      },
    },
  }
}

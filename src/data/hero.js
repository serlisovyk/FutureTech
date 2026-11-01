export const hero = {
  titleId: 'hero-title',
  eyebrow: 'Your Journey to Tomorrow Begins Here',
  title: 'Explore the Frontiers of Artificial Intelligence',
  text: 'Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.',
  decor: {
    src: '/src/assets/images/decor/hero-decor.png',
    sizes:
      '(width < 390px) 423px, (width < 1440px) calc(423px + (100vw - 390px) * 199 / 1050), (width < 1920px) calc(622px + (100vw - 1440px) * 272 / 480), 894px',
    breakpoints: [423, 622, 894, 1788],
  },
  aside: {
    title: 'Explore 150+ resources',
    text: 'Ebooks and whitepapers on emerging tech trends and breakthroughs.',
    link: { label: 'Explore Resources', href: '/resources' },
    avatars: [
      '/src/assets/images/portraits/portrait-man-denim-shirt.png',
      '/src/assets/images/portraits/portrait-man-yellow-tshirt.png',
      '/src/assets/images/portraits/portrait-woman-striped-top.png',
      '/src/assets/images/portraits/portrait-man-henley.png',
    ],
  },
}

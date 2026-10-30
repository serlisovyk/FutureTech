export const resourcesIntro = {
  titleId: 'resources-intro-title',
  titleStart: 'Unlock a World of',
  titleEnd: 'Knowledge',
  text: 'Immerse yourself in the world of future technology. Explore our comprehensive resources.',
}

export const resourceStats = {
  id: 'resource-stats',
  titleId: 'resource-stats-title',
  title: 'FutureTech Resources in numbers',
}

export const resourcesSection = {
  id: 'resources',
  titleId: 'resources-title',
  tag: 'Your Gateway to In-Depth Information',
  title: "Unlock Valuable Knowledge with FutureTech's Resources",
  link: { href: '/resources', label: 'View All Resources' },
  audienceLabel: 'Downloaded By',
  previewLabel: 'Preview',
  photoSizes:
    '(width < 1024px) calc(100vw - 32px), (width < 1920px) calc(100vw - 653px), 917px',
  photoBreakpoints: [720, 1080, 1380],
}

export const resourceShowcases = [
  {
    id: 'ebooks',
    icon: 'feature/ebooks',
    title: 'Ebooks',
    lead: 'Explore our collection of ebooks covering a wide spectrum of future technology topics.',
    cta: 'Download Ebooks Now',
    href: '/resources',
    overview: {
      title: 'Variety of Topics',
      text: 'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
      image: '/src/assets/images/photos/vr-library-students.jpg',
    },
    meta: [
      { label: 'Total Ebooks', value: 'Over 100 ebooks' },
      { label: 'Download Formats', value: 'PDF format for access.' },
    ],
    expertise: {
      label: 'Average Author Expertise',
      value:
        'Ebooks are authored by renowned experts with an average of 15 years of experience.',
    },
    users: '10k + Users',
    avatars: [
      '/src/assets/images/portraits/portrait-man-denim-shirt.png',
      '/src/assets/images/portraits/portrait-man-yellow-tshirt.png',
      '/src/assets/images/portraits/portrait-woman-striped-top.png',
      '/src/assets/images/portraits/portrait-man-henley.png',
    ],
  },
  {
    id: 'whitepapers',
    icon: 'feature/whitepapers',
    title: 'Whitepapers',
    lead: 'Dive into comprehensive reports and analyses with our collection of whitepapers.',
    cta: 'Download Whitepapers Now',
    href: '/resources',
    overview: {
      title: 'Topics Coverage',
      text: 'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).',
      image: '/src/assets/images/photos/ai-hand-circuit-board.jpg',
    },
    meta: [
      { label: 'Total Whitepapers', value: 'Over 50 whitepapers' },
      { label: 'Download Formats', value: 'PDF format for access.' },
    ],
    expertise: {
      label: 'Average Author Expertise',
      value:
        'Whitepapers are authored by subject matter experts with an average of 20 years of experience.',
    },
    users: '10k + Users',
    avatars: [
      '/src/assets/images/portraits/portrait-woman-beanie-denim.png',
      '/src/assets/images/portraits/portrait-man-black-blazer.png',
      '/src/assets/images/portraits/portrait-man-beard-green-sweater.png',
      '/src/assets/images/portraits/portrait-woman-white-tee.png',
    ],
  },
]

export const resourceLibrary = {
  id: 'resource-library',
  titleId: 'resource-library-title',
  tag: 'Dive into the Details',
  title: 'In-Depth Reports and Analysis',
  tabListLabel: 'Resource types',
  downloadLabel: 'Download PDF Now',
  downloadHref: '/contact',
}

export const resourceTabs = [
  {
    id: 'whitepapers',
    tabId: 'whitepapers-tab',
    label: 'Whitepapers',
    items: [
      {
        id: 'quantum-computing-whitepaper',
        titleId: 'quantum-computing-whitepaper-title',
        icon: 'feature/quantum-whitepaper',
        title: 'Quantum Computing Whitepaper',
        lead: 'Provides technical specifications and requirements for implementing quantum computing systems.',
        text: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
        image: '/src/assets/images/photos/purple-wave-particles.jpg',
        meta: [
          { label: 'Publication Date', value: 'July 2023' },
          { label: 'Category', value: 'Quantum Computing' },
          { label: 'Author', value: 'Dr. Quantum' },
        ],
      },
      {
        id: 'space-exploration-whitepaper',
        titleId: 'space-exploration-whitepaper-title',
        icon: 'feature/space-whitepaper',
        title: 'Space Exploration Whitepaper',
        lead: 'Explores Mars colonization, asteroid resource potential, and space tourism.',
        text: 'An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.',
        image: '/src/assets/images/photos/ai-blue-robot-hologram.jpg',
        meta: [
          { label: 'Publication Date', value: 'September 2023' },
          { label: 'Category', value: 'Space Exploration' },
          { label: 'Author', value: 'FutureTech Space Division' },
        ],
      },
    ],
  },
  {
    id: 'ebooks',
    tabId: 'ebooks-tab',
    label: 'Ebooks',
    items: [
      {
        id: 'ai-in-education-ebook',
        titleId: 'ai-in-education-ebook-title',
        icon: 'feature/ebooks',
        title: 'AI in Education Ebook',
        lead: 'Covers adaptive tutoring, automated grading, and learning analytics in the classroom.',
        text: 'An ebook that shows how artificial intelligence is reshaping teaching and learning, with case studies from schools and universities.',
        image: '/src/assets/images/photos/vr-library-students.jpg',
        meta: [
          { label: 'Publication Date', value: 'May 2023' },
          { label: 'Category', value: 'Artificial Intelligence' },
          { label: 'Author', value: 'Prof. Laura Bennett' },
        ],
      },
      {
        id: 'biotechnology-breakthroughs-ebook',
        titleId: 'biotechnology-breakthroughs-ebook-title',
        icon: 'feature/ebooks',
        title: 'Biotechnology Breakthroughs Ebook',
        lead: 'Follows gene editing, lab-grown tissue, and personalized medicine from the lab to the clinic.',
        text: 'An ebook that explains the biotechnology advances most likely to reach patients in the next decade, written for curious non-specialists.',
        image: '/src/assets/images/photos/puzzle-head-brain.jpg',
        meta: [
          { label: 'Publication Date', value: 'June 2023' },
          { label: 'Category', value: 'Biotechnology' },
          { label: 'Author', value: 'Dr. Amara Okafor' },
        ],
      },
    ],
  },
  {
    id: 'reports',
    tabId: 'reports-tab',
    label: 'Reports',
    items: [
      {
        id: 'ai-in-healthcare-report',
        titleId: 'ai-in-healthcare-report-title',
        icon: 'feature/whitepapers',
        title: 'AI in Healthcare Report',
        lead: 'Summarizes where hospitals use AI today and which results have been proven in practice.',
        text: 'A report on the adoption of artificial intelligence in hospitals and clinics, with benchmarks, case studies, and lessons learned.',
        image: '/src/assets/images/photos/vr-doctors-hologram.jpg',
        meta: [
          { label: 'Publication Date', value: 'October 2023' },
          { label: 'Category', value: 'Healthcare' },
          { label: 'Author', value: 'FutureTech Research Team' },
        ],
      },
      {
        id: 'renewable-energy-outlook-report',
        titleId: 'renewable-energy-outlook-report-title',
        icon: 'feature/whitepapers',
        title: 'Renewable Energy Outlook Report',
        lead: 'Compares solar, wind, and storage costs and the policies that shape their growth.',
        text: 'A report on the state of renewable energy: how costs have fallen, where capacity is growing fastest, and what stands in the way.',
        image: '/src/assets/images/photos/wind-turbines-sunset.jpg',
        meta: [
          { label: 'Publication Date', value: 'August 2023' },
          { label: 'Category', value: 'Renewable Energy' },
          { label: 'Author', value: 'FutureTech Energy Desk' },
        ],
      },
    ],
  },
]

export const resourceCards = [
  {
    id: 'futuretech-trends-2024',
    title: 'FutureTech Trends 2024',
    text: 'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
    image: '/src/assets/images/photos/vr-business-interface.jpg',
  },
  {
    id: 'space-exploration-ebook',
    title: 'Space Exploration Ebook',
    text: 'An ebook that follows the next decade of space exploration, from lunar bases to crewed missions to Mars.',
    image: '/src/assets/images/photos/astronaut-planet-vinyl.jpg',
  },
  {
    id: 'quantum-computing-whitepaper',
    title: 'Quantum Computing Whitepaper',
    text: 'An in-depth whitepaper exploring the principles and applications of quantum computing.',
    image: '/src/assets/images/photos/light-waves-abstract.jpg',
  },
]

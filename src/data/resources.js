export const resourceShowcases = [
  {
    id: 'ebooks',
    icon: 'feature-ebooks',
    title: 'Ebooks',
    lead: 'Explore our collection of ebooks covering a wide spectrum of future technology topics.',
    cta: 'Download Ebooks Now',
    overview: {
      title: 'Variety of Topics',
      text: 'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
      image: '/src/assets/images/vr-library-students.jpg',
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
      '/src/assets/images/portrait-man-denim-shirt.png',
      '/src/assets/images/portrait-man-yellow-tshirt.png',
      '/src/assets/images/portrait-woman-striped-top.png',
      '/src/assets/images/portrait-man-henley.png',
    ],
  },
  {
    id: 'whitepapers',
    icon: 'feature-whitepapers',
    title: 'Whitepapers',
    lead: 'Dive into comprehensive reports and analyses with our collection of whitepapers.',
    cta: 'Download Whitepapers Now',
    overview: {
      title: 'Topics Coverage',
      text: 'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).',
      image: '/src/assets/images/ai-hand-circuit-board.jpg',
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
      '/src/assets/images/portrait-woman-beanie-denim.png',
      '/src/assets/images/portrait-man-black-blazer.png',
      '/src/assets/images/portrait-man-beard-green-sweater.png',
      '/src/assets/images/portrait-woman-white-tee.png',
    ],
  },
]

export const resourceTabs = [
  {
    id: 'whitepapers',
    label: 'Whitepapers',
    items: [
      {
        id: 'quantum-computing-whitepaper',
        icon: 'feature-quantum-whitepaper',
        title: 'Quantum Computing Whitepaper',
        lead: 'Provides technical specifications and requirements for implementing quantum computing systems.',
        text: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
        image: '/src/assets/images/purple-wave-particles.jpg',
        meta: [
          { label: 'Publication Date', value: 'July 2023' },
          { label: 'Category', value: 'Quantum Computing' },
          { label: 'Author', value: 'Dr. Quantum' },
        ],
      },
      {
        id: 'space-exploration-whitepaper',
        icon: 'feature-space-whitepaper',
        title: 'Space Exploration Whitepaper',
        lead: 'Explores Mars colonization, asteroid resource potential, and space tourism.',
        text: 'An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.',
        image: '/src/assets/images/ai-blue-robot-hologram.jpg',
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
    label: 'Ebooks',
    items: [
      {
        id: 'ai-in-education-ebook',
        icon: 'feature-ebooks',
        title: 'AI in Education Ebook',
        lead: 'Covers adaptive tutoring, automated grading, and learning analytics in the classroom.',
        text: 'An ebook that shows how artificial intelligence is reshaping teaching and learning, with case studies from schools and universities.',
        image: '/src/assets/images/vr-library-students.jpg',
        meta: [
          { label: 'Publication Date', value: 'May 2023' },
          { label: 'Category', value: 'Artificial Intelligence' },
          { label: 'Author', value: 'Prof. Laura Bennett' },
        ],
      },
      {
        id: 'biotechnology-breakthroughs-ebook',
        icon: 'feature-ebooks',
        title: 'Biotechnology Breakthroughs Ebook',
        lead: 'Follows gene editing, lab-grown tissue, and personalized medicine from the lab to the clinic.',
        text: 'An ebook that explains the biotechnology advances most likely to reach patients in the next decade, written for curious non-specialists.',
        image: '/src/assets/images/puzzle-head-brain.jpg',
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
    label: 'Reports',
    items: [
      {
        id: 'ai-in-healthcare-report',
        icon: 'feature-whitepapers',
        title: 'AI in Healthcare Report',
        lead: 'Summarizes where hospitals use AI today and which results have been proven in practice.',
        text: 'A report on the adoption of artificial intelligence in hospitals and clinics, with benchmarks, case studies, and lessons learned.',
        image: '/src/assets/images/vr-doctors-hologram.jpg',
        meta: [
          { label: 'Publication Date', value: 'October 2023' },
          { label: 'Category', value: 'Healthcare' },
          { label: 'Author', value: 'FutureTech Research Team' },
        ],
      },
      {
        id: 'renewable-energy-outlook-report',
        icon: 'feature-whitepapers',
        title: 'Renewable Energy Outlook Report',
        lead: 'Compares solar, wind, and storage costs and the policies that shape their growth.',
        text: 'A report on the state of renewable energy: how costs have fallen, where capacity is growing fastest, and what stands in the way.',
        image: '/src/assets/images/wind-turbines-sunset.jpg',
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
    image: '/src/assets/images/vr-business-interface.jpg',
  },
  {
    id: 'space-exploration-ebook',
    title: 'Space Exploration Ebook',
    text: 'An ebook that follows the next decade of space exploration, from lunar bases to crewed missions to Mars.',
    image: '/src/assets/images/astronaut-planet-vinyl.jpg',
  },
  {
    id: 'quantum-computing-whitepaper',
    title: 'Quantum Computing Whitepaper',
    text: 'An in-depth whitepaper exploring the principles and applications of quantum computing.',
    image: '/src/assets/images/light-waves-abstract.jpg',
  },
]

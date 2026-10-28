export const posts = [
  {
    slug: 'the-quantum-leap-in-computing',
    title: 'The Quantum Leap in Computing',
    excerpt:
      'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
    category: 'quantum-computing',
    date: '2023-10-15',
    author: {
      name: 'John Techson',
      avatar: '/src/assets/images/portraits/portrait-man-denim-shirt.png',
    },
    image: '/src/assets/images/photos/light-waves-abstract.jpg',
    imageAlt: 'Streams of light bending through an abstract quantum landscape',
    counters: { likes: 24500, comments: 50, shares: 20, views: 61000 },
    readingTime: 6,
    placement: 'blogs',
    body: [
      {
        id: 'how-qubits-work',
        title: 'How Qubits Work',
        paragraphs: [
          'A classical bit is either 0 or 1. A qubit can hold a blend of both until it is measured, and qubits can be entangled so that the state of one is tied to the state of another. Together these two properties let a quantum computer weigh many possibilities within a single computation.',
          'The gain does not come from raw speed. Certain problems have a structure that quantum algorithms can exploit, while most everyday software gains nothing from the technology at all.',
        ],
      },
      {
        id: 'where-it-matters-first',
        title: 'Where It Matters First',
        paragraphs: [
          'Chemistry and materials science are the first fields to benefit. Molecules are quantum systems, and simulating them on a quantum machine is far more natural than approximating them on a classical one. Better batteries, catalysts and drugs all start there.',
          'Logistics and finance follow, where a small improvement in an optimization problem repeats across millions of decisions. Cryptography sits on the other side of the same coin: the schemes that protect data today will need to be replaced before large quantum machines arrive.',
        ],
      },
      {
        id: 'what-is-still-hard',
        title: 'What Is Still Hard',
        paragraphs: [
          'Qubits are fragile. Heat, vibration and stray radiation corrupt their state, so today machines run near absolute zero and spend most of their effort on error correction. Scaling from hundreds of noisy qubits to the millions a useful machine needs is the central engineering challenge of the decade.',
        ],
      },
    ],
  },
  {
    slug: 'the-ethical-dilemmas-of-ai',
    title: 'The Ethical Dilemmas of AI',
    excerpt:
      'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
    category: 'ai-ethics',
    date: '2023-11-05',
    author: {
      name: 'Sarah Ethicist',
      avatar: '/src/assets/images/portraits/portrait-woman-striped-top.png',
    },
    image: '/src/assets/images/photos/ai-brain-robot-hands.jpg',
    imageAlt:
      'A robotic hand and a human hand reaching toward a glowing digital brain',
    counters: { likes: 32000, comments: 72, shares: 18, views: 74000 },
    readingTime: 7,
    placement: 'blogs',
    body: [
      {
        id: 'bias-in-the-data',
        title: 'Bias in the Data',
        paragraphs: [
          'An AI system learns from examples, and examples carry the habits of the people who produced them. A hiring model trained on past decisions will repeat the preferences hidden in those decisions, and it will do so at a scale and speed no single recruiter could match.',
          'The fix is not a single filter. It starts with knowing who is missing from the data, testing results across groups before launch, and measuring them again once the system is in use.',
        ],
      },
      {
        id: 'privacy-and-consent',
        title: 'Privacy and Consent',
        paragraphs: [
          'Modern models are hungry for data, and much of it was collected for a different purpose than the one it now serves. People rarely know that their photos, messages or health records may be training something they never agreed to.',
          'Clear consent, data minimization and the right to have personal data removed are the baseline. Without them, trust in the technology erodes faster than the technology improves.',
        ],
      },
      {
        id: 'transparency-and-accountability',
        title: 'Transparency and Accountability',
        paragraphs: [
          'When an algorithm denies a loan or flags a scan, the person affected deserves an explanation and someone to appeal to. Black-box answers are not enough where the stakes are high, and responsibility must rest with people, not with the model.',
        ],
      },
    ],
  },
  {
    slug: 'the-mars-colonization-challenge',
    title: 'The Mars Colonization Challenge',
    excerpt:
      'Exploring the technical and logistical challenges of human colonization on Mars.',
    category: 'space-exploration',
    date: '2023-12-10',
    author: {
      name: 'Astronomer X',
      avatar: '/src/assets/images/portraits/portrait-man-henley.png',
    },
    image: '/src/assets/images/photos/mars-landscape.jpg',
    imageAlt: 'A rust-red Martian landscape under a pale sky',
    counters: { likes: 20000, comments: 31, shares: 12, views: 48000 },
    readingTime: 6,
    placement: 'blogs',
    body: [
      {
        id: 'the-journey',
        title: 'The Journey',
        paragraphs: [
          'A crewed flight to Mars takes about seven months each way, and the launch window opens only once every two years. Radiation, microgravity and isolation wear on a crew for the whole trip, long before the first boot touches the dust.',
          'Landing is harder still. The atmosphere is too thin for parachutes alone and too thick to ignore, so heavy cargo needs a mix of heat shields, parachutes and rockets that has never been tested at human scale.',
        ],
      },
      {
        id: 'life-support-and-habitats',
        title: 'Life Support and Habitats',
        paragraphs: [
          'Everything a colony needs has to be recycled or made on site. Air and water systems must run for years without resupply, habitats must hold pressure and shield their crews from radiation, and food has to be grown in a place where the soil is toxic.',
        ],
      },
      {
        id: 'the-road-ahead',
        title: 'The Road Ahead',
        paragraphs: [
          'The most realistic path is gradual: robotic missions to prove landing and resource extraction, then short crewed visits, then a small permanent base. Each step lowers the risk of the next, and each answers a question the plans on paper cannot.',
        ],
      },
    ],
  },
  {
    slug: 'global-climate-summit-addresses-urgent-climate-action',
    title: 'Global Climate Summit Addresses Urgent Climate Action',
    excerpt:
      'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
    category: 'environment',
    date: '2023-10-10',
    author: {
      name: 'Jane Smith',
      avatar: '/src/assets/images/portraits/portrait-woman-long-hair.jpg',
    },
    image: '/src/assets/images/photos/wind-turbines-sunset.jpg',
    imageAlt: 'A row of wind turbines against a sunset sky',
    counters: { likes: 14000, comments: 204, shares: 380, views: 52000 },
    readingTime: 5,
    placement: 'featured',
    body: [
      {
        id: 'what-leaders-agreed',
        title: 'What Leaders Agreed',
        paragraphs: [
          'Delegates from more than a hundred countries closed the summit with a shared call to cut emissions faster this decade. The final statement sets higher targets for renewable power and asks wealthier nations to speed up their funding for climate adaptation.',
          'Several countries also announced plans to phase out unabated coal power, and a group of cities committed to cleaner public transport by the end of the decade.',
        ],
      },
      {
        id: 'the-sticking-points',
        title: 'The Sticking Points',
        paragraphs: [
          'Negotiators disagreed most over who pays. Developing nations argued that the countries that emitted the most in the past should carry more of the cost, while donors pointed to budgets already under pressure.',
        ],
      },
      {
        id: 'what-happens-next',
        title: 'What Happens Next',
        paragraphs: [
          'The statement is not binding. Its test will come in the national plans due next year, when each government has to show how its promises turn into policy, and when observers will compare them with the numbers.',
        ],
      },
    ],
  },
  {
    slug: 'a-decisive-victory-for-progressive-policies',
    title: 'A Decisive Victory for Progressive Policies',
    excerpt:
      'A landslide result gives the reform coalition a clear mandate on climate, education and digital rights.',
    category: 'politics',
    date: '2023-11-02',
    author: {
      name: 'Daniel Brooks',
      avatar: '/src/assets/images/portraits/portrait-man-grey-blazer.jpg',
    },
    image: '/src/assets/images/photos/handshake-mountain-sunset.jpg',
    imageAlt: 'Two people shaking hands in front of a mountain at sunset',
    counters: { likes: 2200, comments: 60, shares: 45, views: 18000 },
    readingTime: 4,
    placement: 'trending',
    body: [
      {
        id: 'the-result',
        title: 'The Result',
        paragraphs: [
          'The reform coalition won a clear majority in the national vote, ending a long period of shifting alliances. Turnout rose in cities and among first-time voters, who named climate and digital rights as their top concerns.',
        ],
      },
      {
        id: 'what-the-coalition-promises',
        title: 'What the Coalition Promises',
        paragraphs: [
          'The agreement the partners signed puts renewable energy, school funding and stricter rules for data collection at the front of the first hundred days. Its leaders say the plan will be debated in public before it reaches parliament.',
          'Opponents warn that the program is expensive and that delivery will depend on how quickly the new government can build a working majority in the upper chamber.',
        ],
      },
    ],
  },
  {
    slug: 'tech-giants-unveil-cutting-edge-ai-innovations',
    title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
    excerpt:
      'The biggest names in tech showed new AI assistants, chips and tools built to run models on everyday devices.',
    category: 'technology',
    date: '2023-10-18',
    author: {
      name: 'Marcus Chen',
      avatar: '/src/assets/images/portraits/portrait-man-grey-tshirt.jpg',
    },
    image: '/src/assets/images/photos/ai-woman-code-reflection.jpg',
    imageAlt: 'A woman looking at lines of code reflected in her glasses',
    counters: { likes: 6000, comments: 92, shares: 130, views: 41000 },
    readingTime: 4,
    placement: 'trending',
    body: [
      {
        id: 'new-assistants',
        title: 'New Assistants',
        paragraphs: [
          'The latest assistants answer in conversation, work across text, images and voice, and can act inside the apps people already use. Demonstrations focused on everyday tasks: planning a trip, summarizing a long thread, or fixing a spreadsheet.',
        ],
      },
      {
        id: 'chips-for-the-edge',
        title: 'Chips for the Edge',
        paragraphs: [
          'New processors are built to run models on the device itself instead of in a distant data center. That means faster replies, less data leaving the phone, and features that keep working without a connection.',
        ],
      },
      {
        id: 'what-it-means-for-users',
        title: 'What It Means for Users',
        paragraphs: [
          'More capable tools also bring more questions about privacy, battery life and how clearly an assistant says what it cannot do. Reviewers will test those claims over the coming weeks.',
        ],
      },
    ],
  },
  {
    slug: 'covid-19-variants',
    title: 'COVID-19 Variants',
    excerpt:
      'Researchers track how new COVID-19 variants spread and what updated vaccines and tests mean for public health.',
    category: 'health',
    date: '2023-11-20',
    author: {
      name: 'Dr. Priya Nair',
      avatar: '/src/assets/images/portraits/portrait-woman-striped-glasses.jpg',
    },
    image: '/src/assets/images/photos/covid-test-tube-gloves.jpg',
    imageAlt: 'A gloved hand holding a test tube for a COVID-19 sample',
    counters: { likes: 10000, comments: 124, shares: 210, views: 57000 },
    readingTime: 5,
    placement: 'trending',
    body: [
      {
        id: 'how-variants-emerge',
        title: 'How Variants Emerge',
        paragraphs: [
          'Every time a virus copies itself, small errors creep in. Most are harmless, but a few help the virus spread more easily or slip past existing immunity, and those versions grow until they become the dominant variant.',
        ],
      },
      {
        id: 'vaccines-and-tests',
        title: 'Vaccines and Tests',
        paragraphs: [
          'Laboratories sequence samples from around the world to spot changes early. Vaccine makers use that data to update their formulas, and test makers check that their products still recognize new variants.',
        ],
      },
      {
        id: 'staying-protected',
        title: 'Staying Protected',
        paragraphs: [
          'Health agencies advise keeping vaccinations up to date, staying home when sick and choosing ventilated spaces. These steps remain the most reliable ways to reduce spread, whichever variant is circulating.',
        ],
      },
    ],
  },
  {
    slug: 'tech-giants-announce-new-product-line',
    title: 'Tech Giants Announce New Product Line',
    excerpt:
      'Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape.',
    category: 'technology',
    date: '2023-10-15',
    author: {
      name: 'John Techson',
      avatar: '/src/assets/images/portraits/portrait-man-denim-shirt.png',
    },
    image: '/src/assets/images/photos/vr-robot-arm-workshop.jpg',
    imageAlt:
      'A robotic arm assembling a device in a workshop seen through a headset',
    counters: { likes: 24500, comments: 50, shares: 20, views: 63000 },
    readingTime: 4,
    placement: 'headlines',
    body: [
      {
        id: 'the-lineup',
        title: 'The Lineup',
        paragraphs: [
          'The new range covers wearables, home devices and a laptop family built around on-device AI. Each product shares one software layer, so settings, files and assistants follow the user from one device to the next.',
        ],
      },
      {
        id: 'release-windows',
        title: 'Release Windows',
        paragraphs: [
          'The first products reach stores before the end of the year, with the rest following in the spring. Pricing will be confirmed closer to launch, and pre-orders open in the coming weeks.',
        ],
      },
      {
        id: 'analysts-react',
        title: 'Analysts React',
        paragraphs: [
          'Industry watchers praise the focus on a single ecosystem but note that the real test is battery life and how well the AI features work without an internet connection.',
        ],
      },
    ],
  },
  {
    slug: 'the-future-of-autonomous-vehicles',
    title: 'The Future of Autonomous Vehicles',
    excerpt:
      'An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.',
    category: 'technology',
    date: '2023-10-11',
    author: {
      name: 'Sarah Ethicist',
      avatar: '/src/assets/images/portraits/portrait-woman-striped-top.png',
    },
    image: '/src/assets/images/photos/ai-hand-circuit-board.jpg',
    imageAlt: 'A robotic hand touching a glowing circuit board',
    counters: { likes: 32000, comments: 72, shares: 18, views: 70000 },
    readingTime: 5,
    placement: 'headlines',
    body: [
      {
        id: 'where-the-technology-stands',
        title: 'Where the Technology Stands',
        paragraphs: [
          'Self-driving cars already carry passengers in a few mapped city districts, and driver-assist systems on highways are common. Fully driverless travel in any weather and on any road remains out of reach for now.',
          'Progress comes from better sensors, larger training sets and simulation that lets engineers test millions of rare situations without leaving the lab.',
        ],
      },
      {
        id: 'safety-and-regulation',
        title: 'Safety and Regulation',
        paragraphs: [
          'Regulators want proof that a driverless system is at least as safe as a careful human driver, and a clear answer to who is responsible when something goes wrong. Rules are being written city by city, which slows broad rollouts.',
        ],
      },
      {
        id: 'cities-and-commuting',
        title: 'Cities and Commuting',
        paragraphs: [
          'If shared autonomous fleets replace private cars, parking space could become parks and housing. The same technology could also add traffic if empty cars keep circling, so planners are watching the early pilots closely.',
        ],
      },
    ],
  },
  {
    slug: 'tech-startups-secure-record-funding',
    title: 'Tech Startups Secure Record Funding',
    excerpt:
      'An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.',
    category: 'technology',
    date: '2023-12-10',
    author: {
      name: 'Astronomer X',
      avatar: '/src/assets/images/portraits/portrait-man-yellow-tshirt.png',
    },
    image: '/src/assets/images/photos/vr-business-interface.jpg',
    imageAlt: 'A futuristic business dashboard floating in front of a user',
    counters: { likes: 20000, comments: 31, shares: 12, views: 45000 },
    readingTime: 4,
    placement: 'headlines',
    body: [
      {
        id: 'where-the-money-went',
        title: 'Where the Money Went',
        paragraphs: [
          'Most of the new capital went to companies building AI tools, clean energy and health technology. Investors favored teams with working products and paying customers over those with only an idea.',
        ],
      },
      {
        id: 'why-investors-are-back',
        title: 'Why Investors Are Back',
        paragraphs: [
          'Lower costs for cloud computing and a wave of capable open models mean a small team can now build what once needed a large company. Funds see more chances to back founders at an early, cheaper stage.',
        ],
      },
      {
        id: 'risks-ahead',
        title: 'Risks Ahead',
        paragraphs: [
          'Analysts warn that high valuations can end quickly if growth slows. Startups that spend carefully and reach profit sooner will be better prepared for a colder market.',
        ],
      },
    ],
  },
  {
    slug: 'the-rise-of-artificial-intelligence-in-healthcare',
    title: 'The Rise of Artificial Intelligence in Healthcare',
    excerpt:
      'Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research.',
    category: 'health',
    date: '2023-10-15',
    author: {
      name: 'Dr. Emily Walker',
      avatar: '/src/assets/images/portraits/portrait-woman-glasses-beige.jpg',
    },
    image: '/src/assets/images/photos/healthcare-lab-hero.jpg',
    imageAlt:
      'A laboratory with medical equipment and a doctor working with AI software',
    counters: { likes: 24500, comments: 87, shares: 206, views: 50000 },
    readingTime: 10,
    placement: 'article',
    body: [
      {
        id: 'introduction',
        title: 'Introduction',
        paragraphs: [
          'Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.',
          'Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.',
        ],
      },
      {
        id: 'ai-in-diagnostic-imaging',
        title: 'AI in Diagnostic Imaging',
        paragraphs: [
          'One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.',
          'These tools do not replace the radiologist. They work as a second reader that never tires, flags the scans that need attention first, and gives clinicians more time for the cases that need judgment, conversation and care.',
        ],
      },
      {
        id: 'predictive-analytics-and-disease-prevention',
        title: 'Predictive Analytics and Disease Prevention',
        paragraphs: [
          'Healthcare produces a vast amount of data: lab results, vital signs, prescriptions, wearable readings and medical histories. Predictive models learn from these records to estimate which patients are most likely to develop a condition, be readmitted to hospital, or react badly to a treatment.',
          'With that knowledge, care teams can act earlier. A patient at risk of diabetes can be offered lifestyle support years before symptoms appear, and a ward can be warned hours before a patient begins to deteriorate. Prevention becomes a routine part of care instead of an exception.',
        ],
      },
      {
        id: 'personalized-treatment-plans',
        title: 'Personalized Treatment Plans',
        paragraphs: [
          'No two patients respond to a treatment in exactly the same way. AI systems can combine genetic information, medical history, lifestyle and the results of similar cases to suggest the therapy most likely to work for one particular person.',
          'In cancer care, for example, models help match tumors with targeted therapies, while in chronic disease they adjust medication doses as new measurements arrive. The clinician remains the decision maker, with a richer picture to base the decision on.',
        ],
      },
      {
        id: 'drug-discovery-and-research',
        title: 'Drug Discovery and Research',
        paragraphs: [
          'Bringing a new drug to market has traditionally taken more than a decade and billions of dollars. AI shortens the earliest stages by predicting how molecules will behave, screening millions of candidates in a matter of days and proposing new structures that chemists would not have tried.',
          'The same methods speed up research on existing treatments: finding new uses for approved drugs, spotting patterns in clinical trial data and helping choose which participants will benefit most from a study. The laboratory work still has to be done, but fewer dead ends reach it.',
        ],
      },
      {
        id: 'ai-in-telemedicine',
        title: 'AI in Telemedicine',
        paragraphs: [
          'Telemedicine brought the clinic into the living room, and AI makes the visit more useful. Symptom checkers guide patients to the right level of care, virtual assistants collect a history before the call, and software can transcribe the conversation so the doctor can look at the patient instead of the keyboard.',
          'Remote monitoring adds another layer. Wearable devices send heart rate, oxygen levels and glucose readings, and AI flags the changes that matter, so people with long-term conditions can stay at home with the confidence that someone will notice when something is wrong.',
        ],
      },
      {
        id: 'ethical-considerations',
        title: 'Ethical Considerations',
        paragraphs: [
          'The power of AI in medicine comes with serious responsibilities. A model trained on data from one population may perform worse for another, and an unnoticed bias can turn into unequal care. Patient records are among the most sensitive data there is, so privacy and consent have to be built in from the start.',
          'Transparency matters as much. Clinicians need to understand why a system made a recommendation, patients need to know when AI was involved in their care, and it must always be clear who is accountable for the final decision.',
        ],
      },
      {
        id: 'the-future-of-ai-in-healthcare',
        title: 'The Future of AI in Healthcare',
        paragraphs: [
          'The next years will bring AI that reads several kinds of information at once, combining images, notes, genetics and sensor data into a single view of the patient. Hospitals are already testing assistants that draft reports, schedule resources and warn of shortages before they happen.',
          'The most important change may be cultural. As clinicians learn to work with these tools, and as the tools earn trust through careful testing, AI will become a quiet part of everyday practice, much like the stethoscope or the X-ray before it.',
        ],
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        paragraphs: [
          'AI in healthcare is not a distant promise: it is already helping to detect disease earlier, tailor treatment and speed up the search for new medicines. Its value, however, depends on how carefully it is built, tested and governed.',
          'When technology and human expertise work together, with patients at the center, the result is care that is faster, more precise and more humane. That is the future worth building.',
        ],
      },
    ],
  },
]

export const site = {
  name: "RKP BLACK GOLD GYM",
  tagline: "The Old Skool Arena",
  philosophy: "Clean Body. Clean Mind. Ultimate Strength.",
  phone: "+91 94250 03533",
  phoneRaw: "919425003533",
  address: "GUD MANDI, Near Nagar Palika, Betul Bazar, Madhya Pradesh - 460004",
  mapQuery: "GUD MANDI, Near Nagar Palika, Betul Bazar, Madhya Pradesh 460004",
  instagram: "https://www.instagram.com/rkp_blackgold_/",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://rkpblackgoldgym.example.com",
  hours: [
    { label: "Morning", opens: "05:00", closes: "11:00" },
    { label: "Evening", opens: "16:00", closes: "22:00" }
  ],
  values: ["Power", "Discipline", "Brotherhood", "Legacy", "Courage", "Devotion", "Transformation"],
  images: {
    logo: "/images/rkp-blackgold-logo.jpg",
    hero: "/images/hero-arena.webp",
    mural: "/images/bajrangbali-mural.webp",
    floor: "/images/training-floor.webp"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
  { label: "Trainers", href: "/trainers" },
  { label: "Transformations", href: "/transformations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Fitness Tools", href: "/fitness-tools" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { label: "Active Members", value: "300+", note: "Editable placeholder" },
  { label: "Professional Trainers", value: "05+", note: "Editable placeholder" },
  { label: "Training Zones", value: "05", note: "Strength, cardio, functional, HIIT, PT" },
  { label: "Years of Strength", value: "10+", note: "Editable placeholder" },
  { label: "Transformations", value: "100+", note: "Use verified count only" }
];

export const megaMenu = [
  {
    title: "Train",
    links: [
      { label: "Strength Zone", href: "/facilities#strength-zone" },
      { label: "Cardio Zone", href: "/facilities#cardio-zone" },
      { label: "Functional Training", href: "/facilities#functional-training" },
      { label: "CrossFit and HIIT", href: "/programs#hiit" }
    ]
  },
  {
    title: "Commit",
    links: [
      { label: "Membership Plans", href: "/membership" },
      { label: "Personal Training", href: "/personal-training" },
      { label: "Membership Inquiry", href: "/inquiry" },
      { label: "Fitness Calculators", href: "/fitness-tools" }
    ]
  },
  {
    title: "Proof",
    links: [
      { label: "Transformations", href: "/transformations" },
      { label: "Gallery", href: "/gallery" },
      { label: "Trainers", href: "/trainers" },
      { label: "Fitness Tips", href: "/blog" }
    ]
  }
];

export const trainingZones = [
  {
    id: "strength-zone",
    title: "Strength Zone",
    eyebrow: "Raw iron, precise form",
    summary: "Free weights, racks, benches and plate-loaded machines for compound strength and progressive overload.",
    bullets: ["Free weights", "Power racks", "Benches", "Plate-loaded machines", "Compound training", "Muscle-building guidance"],
    layout: "split"
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    eyebrow: "Endurance with intent",
    summary: "Treadmills, cycles and cross trainers for fat-loss, endurance and heart-rate-based conditioning.",
    bullets: ["Treadmills", "Cycles", "Cross trainers", "Endurance workouts", "Fat-loss programs", "Heart-rate pacing"],
    layout: "wide"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    eyebrow: "Move better, perform harder",
    summary: "Mobility, agility, core training, ropes, kettlebells and bodyweight movement for athletic conditioning.",
    bullets: ["Mobility", "Agility", "Core training", "Battle ropes", "Kettlebells", "Bodyweight movement"],
    layout: "stacked"
  },
  {
    id: "crossfit-hiit",
    title: "CrossFit and High-Intensity Training",
    eyebrow: "Pressure tested sessions",
    summary: "Scalable circuits that combine strength, endurance, timed challenges and group energy.",
    bullets: ["High-intensity circuits", "Strength-endurance combos", "Group challenges", "Timed workouts", "Scalable sessions"],
    layout: "diagonal"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    eyebrow: "Accountability, form, progress",
    summary: "One-to-one coaching with goal-based plans, form correction, assessment and progress tracking.",
    bullets: ["One-to-one coaching", "Personalized workout plans", "Form correction", "Progress tracking", "Goal-based programs"],
    layout: "panel"
  }
];

export const programs = [
  { slug: "strength-foundation", title: "Strength Foundation", goal: "Beginner to intermediate lifting", days: "3-4 days/week" },
  { slug: "muscle-building", title: "Muscle Building", goal: "Hypertrophy and progressive overload", days: "4-6 days/week" },
  { slug: "fat-loss-conditioning", title: "Fat Loss Conditioning", goal: "Cardio, resistance training and habits", days: "4-5 days/week" },
  { slug: "functional-athlete", title: "Functional Athlete", goal: "Mobility, core and athletic performance", days: "3-5 days/week" },
  { slug: "personal-training", title: "Personal Training", goal: "One-to-one coaching and accountability", days: "By appointment" }
];

export const membershipPlans = [
  {
    slug: "monthly",
    title: "Monthly Membership",
    duration: "1 month",
    price: "Contact for Pricing",
    featured: false,
    includes: ["Gym floor access", "Basic trainer support", "General workout guidance", "Business-hours access"]
  },
  {
    slug: "quarterly",
    title: "Quarterly Membership",
    duration: "3 months",
    price: "Contact for Pricing",
    featured: true,
    badge: "Recommended",
    includes: ["Gym floor access", "Trainer check-ins", "Assessment access", "Progress guidance", "Nutrition guidance available"]
  },
  {
    slug: "half-yearly",
    title: "Half-Yearly Membership",
    duration: "6 months",
    price: "Contact for Pricing",
    featured: false,
    includes: ["Gym floor access", "Trainer support", "Assessment access", "Transformation tracking", "Flexible training windows"]
  },
  {
    slug: "annual",
    title: "Annual Membership",
    duration: "12 months",
    price: "Contact for Pricing",
    featured: false,
    includes: ["Long-term training access", "Progress reviews", "Trainer support", "Nutrition guidance available", "Community events"]
  },
  {
    slug: "personal-training",
    title: "Personal Training Package",
    duration: "Goal-based",
    price: "Contact for Pricing",
    featured: false,
    includes: ["One-to-one coaching", "Custom workout plan", "Form correction", "Accountability support", "Progress tracking"]
  }
];

export const offer = {
  enabled: false,
  title: "Configured Offer",
  endsAt: "",
  description: "Enable this only when an approved, current offer exists."
};

export const trainers = [
  {
    slug: "rkp-strength-coach",
    name: "RKP Strength Coach",
    role: "Strength and Conditioning",
    experience: "Editable experience",
    image: "/images/training-floor.webp",
    specializations: ["Strength training", "Form correction", "Progressive overload"],
    certifications: ["Add verified certifications"],
    philosophy: "Train clean, lift with control, and build strength that lasts."
  },
  {
    slug: "rkp-transformation-coach",
    name: "RKP Transformation Coach",
    role: "Fat Loss and Lifestyle",
    experience: "Editable experience",
    image: "/images/training-floor.webp",
    specializations: ["Habit coaching", "Conditioning", "Beginner guidance"],
    certifications: ["Add verified certifications"],
    philosophy: "Small disciplined actions compound into visible change."
  },
  {
    slug: "rkp-functional-coach",
    name: "RKP Functional Coach",
    role: "Functional and HIIT Training",
    experience: "Editable experience",
    image: "/images/training-floor.webp",
    specializations: ["Mobility", "Core", "High-intensity circuits"],
    certifications: ["Add verified certifications"],
    philosophy: "Move with intent before you chase intensity."
  }
];

export const transformationFilters = ["All", "Fat Loss", "Muscle Gain", "Strength", "Fitness", "Lifestyle Transformation"];

export const transformations = [
  {
    id: "approved-client-content",
    name: "Approved Client Story",
    goal: "Add verified goal",
    duration: "Add verified duration",
    trainer: "Add trainer",
    filter: "Fitness",
    testimonial: "Verified client content can be added here after approval.",
    before: "/images/training-floor.webp",
    after: "/images/hero-arena.webp",
    approved: false
  }
];

export const galleryItems = [
  { id: "arena", type: "Interior", title: "Old Skool Arena Floor", src: "/images/hero-arena.webp", alt: "Dark black and gold strength training arena with racks and free weights" },
  { id: "bajrangbali-dhyan", type: "Culture", title: "Bajrangbali Dhyan Mudra", src: "/images/bajrangbali-dhyan.webp", alt: "Respectful cinematic image of Bajrangbali ji seated in dhyan mudra meditation with warm gold temple lighting" },
  { id: "rack-detail", type: "Equipment", title: "Power Rack Detail", src: "/images/gallery-rack-detail.webp", alt: "Black and gold power rack detail with plates and warm gym lighting" },
  { id: "zones", type: "Equipment", title: "Training Zones", src: "/images/training-floor.webp", alt: "Premium black and gold gym floor with strength, cardio and functional training equipment" },
  { id: "functional-tools", type: "Functional", title: "Functional Training Bay", src: "/images/gallery-functional-tools.webp", alt: "Functional training zone with kettlebells, ropes and rubber flooring" },
  { id: "dumbbell-line", type: "Strength", title: "Dumbbell Line", src: "/images/gallery-dumbbell-line.webp", alt: "Dumbbell rack and bench area inside a premium black and gold gym" },
  { id: "cardio-zone", type: "Cardio", title: "Cardio Conditioning Zone", src: "/images/gallery-cardio-zone.webp", alt: "Cardio equipment and conditioning floor in warm black and gold lighting" },
  { id: "arena-lights", type: "Interior", title: "Arena Light Shafts", src: "/images/gallery-arena-lights.webp", alt: "Cinematic gym lights cutting through a dark old school arena" },
  { id: "mural", type: "Culture", title: "Strength Guided by Discipline", src: "/images/bajrangbali-mural.webp", alt: "Respectful gold line-art mural inspired by Bajrangbali on a dark stone wall" },
  { id: "mural-detail", type: "Culture", title: "Discipline Wall Detail", src: "/images/gallery-mural-detail.webp", alt: "Close detail of a respectful Bajrangbali-inspired gold mural on stone" },
  { id: "reel-placeholder", type: "Reels", title: "Instagram Reel Placeholder", src: "/images/training-floor.webp", alt: "Configurable reel placeholder linked to the gym Instagram profile" }
];

export const nutritionNotes = [
  "Goal-based nutrition support for training consistency.",
  "General meal-planning education around protein, hydration and recovery.",
  "Habit tracking that supports realistic, sustainable progress.",
  "Consultation CTA for members who want guidance aligned with their goals."
];

export const supplements = [
  { category: "Protein", description: "Educational guidance on protein intake as part of balanced nutrition." },
  { category: "Creatine", description: "General information about common use, hydration and professional guidance." },
  { category: "Recovery Support", description: "Sleep, mobility and recovery habits come first; products are optional." },
  { category: "Hydration", description: "Water, electrolytes and training-session hydration basics." },
  { category: "Accessories", description: "Lifting belts, straps and wraps should support technique, not replace it." }
];

export const testimonials = [
  {
    name: "Verified Review Pending",
    goal: "Member feedback",
    rating: null,
    image: "/images/training-floor.webp",
    quote: "Approved member testimonials can be added here once verified by the gym."
  }
];

export const blogPosts = [
  {
    slug: "discipline-first-strength-training",
    category: "Strength Training",
    title: "Discipline-First Strength Training",
    excerpt: "How to build a lifting habit around technique, recovery and steady progression.",
    readingTime: "4 min read",
    image: "/images/hero-arena.webp",
    content: [
      "Strength is built by repeating the basics well. Start with movements you can control, add load only when your form remains stable, and give recovery the same respect as training.",
      "A disciplined plan should include compound lifts, accessory work, warm-ups, mobility, and enough rest between hard sessions. Progress does not need to be dramatic every week to be real."
    ]
  },
  {
    slug: "beginner-gym-guide",
    category: "Beginner Guidance",
    title: "Your First Week Inside the Arena",
    excerpt: "A calm, practical guide for beginners stepping into structured training.",
    readingTime: "5 min read",
    image: "/images/training-floor.webp",
    content: [
      "The first week is about learning the floor, building confidence and understanding safe movement patterns. Ask questions, start light, and keep notes.",
      "Bring a water bottle, towel, comfortable training clothes and a mindset ready for patient work. Consistency will matter more than intensity at the start."
    ]
  },
  {
    slug: "recovery-for-muscle-building",
    category: "Recovery",
    title: "Recovery Is Part of the Program",
    excerpt: "Why sleep, hydration and planned rest make training more effective.",
    readingTime: "3 min read",
    image: "/images/bajrangbali-mural.webp",
    content: [
      "Hard training creates the stimulus, but recovery is where adaptation happens. Sleep, food, hydration and stress management all influence how well you can train again.",
      "If performance drops for several sessions, reduce volume, check your sleep and rebuild gradually. Strong athletes know when to push and when to reset."
    ]
  }
];

export const faqs = [
  { question: "What are the gym timings?", answer: "RKP BLACK GOLD GYM is open from 5:00 AM to 11:00 AM and 4:00 PM to 10:00 PM." },
  { question: "Are beginners welcome?", answer: "Yes. Beginners can start with guided basics, form support and a realistic training plan." },
  { question: "Is personal training available?", answer: "Yes. Personal training is available for members who want one-to-one coaching and accountability." },
  { question: "Do you provide workout plans?", answer: "General workout guidance is available, and more personalized plans can be discussed with the trainers." },
  { question: "Is nutrition guidance available?", answer: "General nutrition guidance is available. It does not replace medical or dietetic advice." },
  { question: "Is there a dedicated cardio zone?", answer: "Yes. The gym includes cardio equipment for endurance, fat-loss and conditioning sessions." },
  { question: "Are trial sessions available?", answer: "Contact the gym directly to ask about current trial-session availability." },
  { question: "What should I bring for my first workout?", answer: "Bring comfortable training clothes, shoes, a towel, water bottle and any medical notes relevant to safe exercise." },
  { question: "Are there separate membership durations?", answer: "Yes. Monthly, quarterly, half-yearly, annual and personal training package options are configurable." },
  { question: "How can I contact the gym?", answer: "Call +91 94250 03533, message on WhatsApp, or visit near Nagar Palika in Betul Bazar." },
  { question: "Is parking available?", answer: "Please contact the gym for current parking guidance near GUD MANDI and Nagar Palika." },
  { question: "Can I join through WhatsApp?", answer: "Yes. Use the WhatsApp inquiry buttons to start the membership conversation." }
];

export const searchRecords = [
  ...navItems.map((item) => ({ type: "Page", title: item.label, href: item.href, text: item.label })),
  ...trainingZones.map((zone) => ({ type: "Facility", title: zone.title, href: `/facilities#${zone.id}`, text: `${zone.title} ${zone.summary} ${zone.bullets.join(" ")}` })),
  ...programs.map((program) => ({ type: "Program", title: program.title, href: `/programs#${program.slug}`, text: `${program.goal} ${program.days}` })),
  ...membershipPlans.map((plan) => ({ type: "Membership", title: plan.title, href: `/membership#${plan.slug}`, text: `${plan.duration} ${plan.includes.join(" ")}` })),
  ...trainers.map((trainer) => ({ type: "Trainer", title: trainer.name, href: "/trainers", text: `${trainer.role} ${trainer.specializations.join(" ")}` })),
  ...blogPosts.map((post) => ({ type: "Article", title: post.title, href: `/blog/${post.slug}`, text: `${post.category} ${post.excerpt}` })),
  ...faqs.map((faq) => ({ type: "FAQ", title: faq.question, href: "/contact#faq", text: faq.answer }))
];

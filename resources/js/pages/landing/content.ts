const img = (path: string) => `/images/landing/${path}`;

export const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://facebook.com',
        icon: img('social/facebook.png'),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: img('social/instagram.png'),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: img('social/linkedin.png'),
    },
    {
        label: 'X (Twitter)',
        href: 'https://x.com',
        icon: img('social/twitter.png'),
    },
] as const;

export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Our Services', href: '#services' },
    { label: 'Faq', href: '#faq' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
] as const;

export const trustedLogos = [
    { src: img('trusted/logo-1.png'), alt: 'Partner logo 1' },
    { src: img('trusted/logo-2.png'), alt: 'Partner logo 2' },
    { src: img('trusted/logo-3.png'), alt: 'Partner logo 3' },
    { src: img('trusted/logo-4.png'), alt: 'Partner logo 4' },
    { src: img('trusted/logo-5.png'), alt: 'Partner logo 5' },
    { src: img('trusted/logo-6.png'), alt: 'Partner logo 6' },
] as const;

export const teamMembers = [
    {
        name: 'Carl David',
        role: 'Video Editor',
        photo: img('person/carl-david.png'),
    },
    {
        name: 'Kevin Espina',
        role: 'Web Developer',
        photo: img('person/kevin-espina.png'),
    },
    {
        name: 'Jameson',
        role: 'Creatives',
        photo: img('person/jameson.png'),
    },
    {
        name: 'Jenn',
        role: 'Property Manager',
        photo: img('person/jenn.png'),
    },
    {
        name: 'Piloton',
        role: 'Team Member',
        photo: img('person/piloton.png'),
    },
    {
        name: 'Priscilla',
        role: 'Team Member',
        photo: img('person/priscilla.png'),
    },
    {
        name: 'Roy',
        role: 'Design Lead',
        photo: img('person/roy.png'),
    },
    {
        name: 'Val',
        role: 'Team Member',
        photo: img('person/val.png'),
    },
] as const;

export const services = [
    {
        title: 'Graphic Design',
        body: 'Brand visuals, marketing creatives, and design support tailored to your goals.',
        icon: img('services/icon-1.png'),
        href: '#contact',
    },
    {
        title: 'Virtual Assistant',
        body: 'Reliable admin, scheduling, and day-to-day operational support.',
        icon: img('services/icon-2.png'),
        href: '#contact',
    },
    {
        title: 'Video Editor',
        body: 'Editing, cuts, and polished video content for campaigns and social.',
        icon: img('services/icon-3.png'),
        href: '#contact',
    },
    {
        title: 'Nurse Assistant',
        body: 'Professional support for healthcare workflows and coordination tasks.',
        icon: img('services/icon-4.png'),
        href: '#contact',
    },
    {
        title: 'Real Estate Service',
        body: 'Listing support, client coordination, and property-related assistance.',
        icon: img('services/icon-5.png'),
        href: '#contact',
    },
    {
        title: 'Website Development',
        body: 'Modern websites and digital experiences built for clarity and conversion.',
        icon: img('services/icon-6.png'),
        href: '#contact',
    },
] as const;

export const faqs = [
    {
        id: 'who-are-we',
        question: 'Who are we?',
        answer: 'Artistry & Assistance (A&A) is a team of skilled Filipino professionals specializing in design, digital solutions, real estate support, and healthcare assistance. We help businesses stand out and operate efficiently through expert branding, website development, social media content, video editing, and administrative support.',
    },
    {
        id: 'vision',
        question: 'What is our Vision?',
        answer: 'To help businesses grow with reliable creative and operational support.',
    },
    {
        id: 'mission',
        question: 'What is our Mission?',
        answer: 'To deliver high-quality services with clear communication, craftsmanship, and care.',
    },
] as const;

export const pricingPlans = [
    {
        id: 'graphic-design',
        title: 'Graphic Design Service',
        price: '8',
        unit: '/ Hr',
        features: [
            'Logo Design',
            'Social Media Graphics',
            'Marketing Materials',
            'Website UI/UX Design',
        ],
        variant: 'default' as const,
    },
    {
        id: 'virtual-assistance',
        title: 'Virtual Assistance Services',
        price: '8',
        unit: '/ Hr',
        features: [
            'Administrative Support',
            'Email & Calendar Management',
            'Data Entry & Research',
            'Customer Support Assistance',
        ],
        variant: 'featured' as const,
    },
    {
        id: 'video-editing',
        title: 'Video Editing Services',
        price: '10',
        unit: '/ Hr',
        features: [
            'Basic Video Edits',
            'Social Media Reels',
            'Promotional & Marketing Videos',
            'YouTube Video Editing',
        ],
        variant: 'default' as const,
    },
    {
        id: 'nurse-assistant',
        title: 'Nurse Assistant',
        price: '8',
        unit: '/ Hr',
        features: [
            'Medical assistance',
            'Patient care support',
            'Documentation',
            'Telehealth support (virtual patient assistance)',
        ],
        variant: 'default' as const,
    },
    {
        id: 'real-estate',
        title: 'Real Estate Service',
        price: '10',
        unit: '/ Hr',
        features: [
            'Property listings, virtual tours',
            'Promotional materials',
            'Lead generation & client follow-ups',
        ],
        variant: 'accent' as const,
    },
    {
        id: 'website-development',
        title: 'Website Development Service',
        price: '15',
        unit: '/ Hr',
        features: [
            'Landing pages',
            'Promotional materials',
            'E-commerce stores',
            'website maintenance & updates',
        ],
        variant: 'default' as const,
    },
] as const;

export const footerResources = [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms and Conditions', href: '#contact' },
    { label: 'Blog', href: '#contact' },
    { label: 'Contact Us', href: '#contact' },
] as const;

export const footerProduct = [
    { label: 'Home', href: '#home' },
    { label: 'Type of Service', href: '#services' },
    { label: 'Skills Overview', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Find a Competent Team', href: '#team' },
] as const;

export const assets = {
    logoMark: img('logo-mark.webp'),
    logoWordmark: img('logo-wordmark.webp'),
    heroBackground: img('hero-laptop.webp'),
    heroVisual: img('about-illustration.webp'),
    aboutIllustration: img('about-us.webp'),
    aboutOverlay: img('mask-group-4.png'),
    sliderPrev: img('icons/slider-prev.png'),
    sliderNext: img('icons/slider-next.png'),
} as const;

export const copy = {
    email: 'info@artistryandassistance.com',
    emailLabel: 'Email acc: info@artistry&assistance.com',
    brand: 'Artistry & Assistance',
    heroSubtitle: 'Creativity, Digital Solutions, and Professional Support In One Place.',
    heroBody:
        'Offering innovative design, digital solutions, real estate support, and healthcare assistance, all in one place. From captivating visuals to seamless operations, we help businesses and professionals elevate their brand with creativity and efficiency',
    aboutBody:
        'Artistry & Assistance (A&A) is a dedicated service provider offering innovative design, digital solutions, real estate support, and healthcare assistance. We help businesses and professionals enhance their brand, streamline operations, and achieve success with creativity, efficiency, and expertise.',
    teamLead:
        'Artistry & Assistance (A&A) is a team of skilled Filipino professionals providing creative and digital solutions to help businesses grow. We specialize in branding, web design, social media content, video editing, real estate marketing, and healthcare assistance, delivering tailored services that make your brand stand out.',
    servicesLead: 'Flexible services designed to match how your business actually operates.',
    pricingLead: 'At Artistry & Assistance (A&A), we offer flexible and affordable pricing to meet your business needs. Whether you need eye-catching designs, reliable virtual assistance, or expert video editing, we’ve got you covered!',
    contactLead:
        "Reach out to our team – we're here to assist you every step of the way!",
    footerDesc:
        'Creativity, digital solutions, and professional support for growing teams.',
    copyright: `© ${new Date().getFullYear()} Artistry & Assistance. All rights reserved.`,
} as const;

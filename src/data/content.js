import { FaTruck, FaStore, FaUsers } from 'react-icons/fa';

export const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#founder', label: 'Founder' },
  { href: '#services', label: 'Services' },
  { href: '#brands', label: 'Brands' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES = [
  {
    Icon: FaTruck,
    title: 'Distribution Services',
    description:
      'Comprehensive distribution network covering KGF and KGF rural areas with efficient logistics and timely delivery.',
  },
  {
    Icon: FaStore,
    title: 'Super Stockist',
    description:
      'Authorized super stockist for Kolar and Chikkabalapura Districts, ensuring product availability across all taluks.',
  },
  {
    Icon: FaUsers,
    title: 'Network Management',
    description:
      'Managing a vast network of distributors across multiple taluks, ensuring seamless product flow and market coverage.',
  },
];

export const brands = [
  { name: 'MSR Oil', imagePath: require('../assets/MSR_cocunut_oil.png') },
  { name: 'Patanjali Food Products', imagePath: require('../assets/patanjali.jpg') },
  { name: 'Patanjali Cosmetics Products', imagePath: require('../assets/patanjali.jpg') },
  { name: 'Eyetex Dazller', imagePath: require('../assets/Dazller.jpg') },
  { name: 'Marino Food Products PVT LTD', imagePath: require('../assets/Marino.jpg') },
  { name: 'Pratap Snacks LTD', imagePath: require('../assets/prataap-snacks.jpg') },
  { name: 'Coco Cola', imagePath: require('../assets/coco-cola.png') },
  { name: 'Sunpure Oil', imagePath: require('../assets/sunpure_oil.png') },
  { name: 'Crax Chips', imagePath: require('../assets/Crax.png') },
  { name: 'Brands of Bharat', imagePath: require('../assets/brands_of_bharath.jpg') },
  { name: 'Kopiko Chocolate', imagePath: require('../assets/kopiko.png') },
  { name: 'Nestle', imagePath: require('../assets/nestle.png') },
  { name: 'Haldirams Prabhuji', imagePath: require('../assets/haldirams.png') },
  { name: 'Signature Water', imagePath: '/images/brands/signature-water.png' },
  { name: 'Campa Cola - Reliance Retail Limited', imagePath: require('../assets/campa_cola.png') },
  {
    name: 'Independence Biscuits - Reliance Retail Limited',
    imagePath: require('../assets/Independence_biscuts.jpg'),
  },
  { name: 'Gopal Snacks', imagePath: require('../assets/gopal.png') },
  { name: 'Angry Chips', imagePath: require('../assets/brands_of_bharath.jpg') },
  { name: "Kenty's Badam Milk", imagePath: require('../assets/kentys.jpg') },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Retailer, KGF',
    rating: 5,
    text: 'SLV Enterprises has been our trusted partner for over 5 years. Their reliable delivery and quality products have helped us grow our business significantly.',
  },
  {
    name: 'Priya',
    role: 'Store Owner, Robertsonpet',
    rating: 5,
    text: 'Excellent service and support from SLV Enterprises. They understand our needs and always deliver on time. Highly recommended!',
  },
  {
    name: 'Ranjith',
    role: 'Distributor, Chikkabalapura',
    rating: 5,
    text: "The best distribution partner we've worked with. Their extensive brand portfolio and professional approach make them stand out.",
  },
  {
    name: 'Suresh',
    role: 'Supermarket Owner, Bangarpet',
    rating: 5,
    text: 'SLV Enterprises has transformed our business with their wide range of products and exceptional customer service.',
  },
];

export const timeline = [
  { year: '2015', title: 'Company Founded', description: 'SLV Enterprises established by Sunil Kumar V in KGF' },
  { year: '2016', title: 'First Major Partnership', description: 'Secured distribution rights for Patanjali products' },
  { year: '2018', title: 'Expansion to Kolar', description: 'Extended operations to cover Kolar district' },
  { year: '2020', title: 'Chikkabalapura Coverage', description: 'Expanded network to Chikkabalapura district' },
  { year: '2022', title: 'Super Stockist Status', description: 'Achieved super stockist status for multiple brands' },
  { year: '2024', title: '400+ Retailers Network', description: 'Successfully serving 400+ retailers across districts' },
];

export const galleryImages = [
  { id: 1, title: 'Warehouse Operations', description: 'Our state-of-the-art warehouse facility' },
  { id: 2, title: 'Distribution Network', description: 'Our extensive delivery fleet' },
  { id: 3, title: 'Team Collaboration', description: 'Our dedicated team at work' },
  { id: 4, title: 'Product Range', description: 'Wide variety of premium products' },
  { id: 5, title: 'Customer Service', description: 'Dedicated customer support team' },
  { id: 6, title: 'Quality Control', description: 'Maintaining high quality standards' },
];

// ============================================================
// AROMA TIBLAWAN BEACH RESORT — Single Source of Truth
// All content lives here. HTML is purely structural.
// ============================================================

const ResortData = {

  // ── Global Identity ──────────────────────────────────────
  identity: {
    name: "Aroma Tiblawan Beach Resort",
    tagline: "Pahuway kadyot sa kasaba sa syudad.",
    subtagline: "Dinhi sa Aroma, tagamtama ang kalinaw sa dagat.",
    taglineEnglish: "Take a break from the noise of the city. Here at Aroma, experience the peace of the sea.",
    location: "Governor Generoso, Davao Oriental",
    contacts: ["09102072368", "09360653196"],
    logo: "assets/images/LOGO.jpg",
    facebookPage: "https://www.facebook.com/",
    messengerLink: "https://m.me/",
  },

  // ── Navigation ────────────────────────────────────────────
  nav: [
    { label: "Home",             href: "index.html" },
    { label: "Accommodations",   href: "accommodations.html" },
    { label: "Booking & Rates",  href: "booking.html" },
    { label: "House Rules",      href: "rules.html" },
    { label: "Local Impact",     href: "impact.html" },
  ],

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    headline: "Pahuway kadyot sa kasaba sa syudad.",
    subheadline: "Dinhi sa Aroma, tagamtama ang kalinaw sa dagat.",
    englishSub: "Your affordable coastal escape in Governor Generoso, Davao Oriental.",
    cta: { label: "Reserve Your Stay", href: "booking.html" },
    secondaryCta: { label: "View Accommodations", href: "accommodations.html" },
    bgImage: "assets/images/Light/Beach 1.JPG",
  },

  // ── Value Highlights (homepage quick badges) ──────────────
  highlights: [
    { icon: "🍖", label: "No Corkage Fees",        sub: "Bring your own food & drinks" },
    { icon: "🍻", label: "Drinks & Essentials",    sub: "Available for purchase" },
    { icon: "🏠", label: "Fully Equipped Kitchen", sub: "Cook comfortably" },
    { icon: "📶", label: "Piso Wifi On-Site",      sub: "Stay connected" },
    { icon: "🎤", label: "Karaoke Available",      sub: "PHP 1,500 rental" },
    { icon: "🎪", label: "Function Stage Area",    sub: "PHP 1,000 rental" },
  ],

  // ── Amenities (full detail for index.html) ────────────────
  amenities: {
    complimentary: [
      { name: "Fully Equipped Kitchen & Grilling Area", icon: "🍳" },
      { name: "Strictly NO Corkage Fees — Bring your own food and drinks", icon: "✅" },
    ],
    connectivity: [
      { name: "Piso Wifi Available On-Site", icon: "📶" },
    ],
    rentals: [
      { name: "Complete Karaoke Set",    price: "PHP 1,500", icon: "🎤" },
      { name: "Stage / Function Area",   price: "PHP 1,000", icon: "🎪" },
      { name: "Beer, Soft Drinks, Water & Cigarettes", price: "Available on-site", icon: "🍻" },
    ],
  },

  // ── Accommodations ────────────────────────────────────────
  accommodations: [
    {
      id: "shore-cottage-1",
      name: "Shore Cottage 1",
      slug: "Shore Cottage",
      badge: "Beachfront",
      description: "Native-style cottage located right by the shore. Perfect for small families and groups looking for a breezy, open-air beach experience.",
      capacity: 10,
      dayTour: {
        label: "Day Tour",
        time: "8:00 AM – 5:00 PM",
        price: 1000,
      },
      overnight: {
        label: "Overnight",
        time: "2:00 PM – 12:00 PM",
        price: 1500,
      },
      features: ["Open-air design", "Beachfront access", "Up to 10 pax"],
      image: "assets/images/Light/Beach 3.JPG",
      imageSlot: "shore-cottage-1-exterior",
    },
    {
      id: "shore-cottage-2",
      name: "Shore Cottage 2",
      slug: "Shore Cottage",
      badge: "Beachfront",
      description: "Native-style cottage located right by the shore. Perfect for small families and groups looking for a breezy, open-air beach experience.",
      capacity: 10,
      dayTour: {
        label: "Day Tour",
        time: "8:00 AM – 5:00 PM",
        price: 1000,
      },
      overnight: {
        label: "Overnight",
        time: "2:00 PM – 12:00 PM",
        price: 1500,
      },
      features: ["Open-air design", "Beachfront access", "Up to 10 pax"],
      image: "assets/images/Light/Beach 4.JPG",
      imageSlot: "shore-cottage-2-exterior",
    },
    {
      id: "top-cottage",
      name: "Top Cottage",
      slug: "Top Cottage",
      badge: "Ocean View",
      description: "A large, breezy open-air space on the 2nd floor. Perfect for lounging, eating, and sleeping with a beautiful elevated view of the ocean.",
      capacity: 20,
      dayTour: {
        label: "Day Tour",
        time: "8:00 AM – 5:00 PM",
        price: 1500,
      },
      overnight: {
        label: "Overnight",
        time: "2:00 PM – 12:00 PM",
        price: 2500,
      },
      features: ["Elevated ocean view", "2nd floor breezy space", "Up to 20 pax"],
      image: "assets/images/Light/Beach 5.JPG",
      imageSlot: "top-cottage-view",
    },
    {
      id: "primary-suite",
      name: "Primary Suite",
      slug: "Primary Suite",
      badge: "Premium · Air-Conditioned",
      description: "Premium air-conditioned comfort on the ground floor. Features a private bathroom inside. Package includes 2 beds and 6 flat mattresses.",
      capacity: 16,
      dayTour: {
        label: "Day Tour",
        time: "8:00 AM – 5:00 PM",
        price: 3000,
      },
      overnight: {
        label: "Overnight",
        time: "2:00 PM – 12:00 PM",
        price: 5000,
      },
      features: ["Air-conditioned", "Private bathroom", "2 beds + 6 mattresses", "Up to 16 pax"],
      image: "assets/images/Light/Beach 2.JPG",
      imageSlot: "primary-suite-interior",
    },
    {
      id: "whole-resort",
      name: "Exclusive Whole-Resort Rental",
      slug: "Whole Resort",
      badge: "Exclusive · Events",
      description: "Secure the resort for private weddings, reunions, and company outings. Includes 2 Shore Cottages and 1 Top Cottage. (Note: Primary Suite is NOT included).",
      capacity: 50,
      flatRate: {
        label: "Flat Rate",
        price: 10000,
      },
      features: ["Exclusive access to main areas", "Weddings, reunions, outings", "Up to 50 pax", "Excludes Primary Suite"],
      image: "assets/images/Light/Beach 1.JPG",
      imageSlot: "resort-aerial-full",
    },
  ],

  // ── House Rules ───────────────────────────────────────────
  rules: {
    bookingPayments: {
      title: "Booking & Payments",
      icon: "📋",
      items: [
        "NO REFUND / CANCELLATION. Rescheduling is allowed subject to availability.",
        "To avail EXCLUSIVE RATES, you must pay the provided DOWN PAYMENT to ensure your chosen schedule is reserved.",
      ],
    },
    etiquette: {
      title: "Resort Etiquette",
      icon: "🌊",
      items: [
        "Please RESPECT OTHERS living near the area. Any LOUD NOISES should be AVOIDED after 10:00 PM (THIS INCLUDES THE KARAOKE).",
        "MAINTAIN CLEANLINESS as much as possible.",
        "Furry friends are welcome! However, pets must be kept on a leash and owners must clean up after them.",
      ],
    },
    damages: {
      title: "Damages & Liabilities",
      icon: "⚠️",
      items: [
        "Before checking out, we will be DOUBLE-CHECKING the resort to ensure that there are NO DAMAGES.",
        "If ever there will be DAMAGES made by the guests, they MUST PAY the right amount in exchange.",
        "NOTICE: We will not be held liable for any incidences that may occur due to guest misbehavior.",
        "NOTICE: Management will not accept responsibility for loss or damage to any personal belongings left unattended on these premises.",
        "NOTICE: Any loss or damage must be reported immediately (items originally from the resort).",
      ],
    },
  },

  // ── Check-in / Check-out Times ────────────────────────────
  times: {
    dayTour: { checkIn: "8:00 AM", checkOut: "5:00 PM" },
    overnight: { checkIn: "2:00 PM", checkOut: "12:00 PM (Noon)" },
  },

  // ── Social Proof Toasts ───────────────────────────────────
  socialProof: [
    { name: "M***a T******a", action: "just booked the Primary Suite!", delay: 4000 },
    { name: "J**e C**z",      action: "just booked Shore Cottage 1!",   delay: 11000 },
    { name: "A**a S****s",    action: "just booked the Top Cottage!",   delay: 19000 },
    { name: "M**k B******a",  action: "just booked Shore Cottage 2!",   delay: 27000 },
  ],

  // ── Booking / Payment Info ────────────────────────────────
  booking: {
    downpaymentPercent: 50,
    gcash: { name: "Aroma Tiblawan Beach Resort", number: "09102072368" },
    bank: { name: "Bank Transfer — details upon inquiry", number: "" },
    note: "Send proof of payment via Facebook Messenger to confirm your reservation.",
  },

  // ── Local Impact ──────────────────────────────────────────
  impact: {
    headline: "Rooted in Governor Generoso",
    intro: "Aroma Tiblawan Beach Resort is more than a getaway — it is a commitment to the community that surrounds it.",
    pillars: [
      {
        title: "Local Employment",
        body: "Every staff member at Aroma Tiblawan is hired from the local barangay, ensuring that tourism revenue stays within the community.",
        icon: "👥",
      },
      {
        title: "Supporting Local Suppliers",
        body: "From fresh seafood to native materials, we source from local vendors and artisans in Governor Generoso and Davao Oriental.",
        icon: "🌿",
      },
      {
        title: "Eco-Conscious Operations",
        body: "We maintain the beauty of our coastline through responsible waste management and educating guests on eco-friendly beach practices.",
        icon: "🌊",
      },
      {
        title: "Cultural Heritage",
        body: "Our native-style architecture and Bisaya-first communication honor the culture of the Mandaya people and the coastal heritage of Davao Oriental.",
        icon: "🏡",
      },
    ],
  },

  // ── Images Map ────────────────────────────────────────────
  images: {
    logo:    "assets/images/LOGO.jpg",
    hero:    "assets/images/Light/Beach 1.JPG",
    beach1:  "assets/images/Light/Beach 1.JPG",
    beach2:  "assets/images/Light/Beach 2.JPG",
    beach3:  "assets/images/Light/Beach 3.JPG",
    beach4:  "assets/images/Light/Beach 4.JPG",
    beach5:  "assets/images/Light/Beach 5.JPG",
    dark1:   "assets/images/Dark/Dark 1.JPG",
    dark2:   "assets/images/Dark/Dark 2.JPG",
    dark3:   "assets/images/Dark/Dark 3.JPG",
    dark4:   "assets/images/Dark/Dark 4.JPG",
  },
};

// Export for module use and global access
if (typeof module !== "undefined") module.exports = ResortData;

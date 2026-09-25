// Portfolio Projects Data for Boda Design
// Easy to edit, add, or remove projects.
// Just add new items to this array or replace the image paths with your own JPG/PNG files!

const portfolioProjects = [
  {
    id: 1,
    titleEn: "Modern Educational Summary Guide",
    titleAr: "مذكرة ملخص تعليمي حديث للثانوية العامة",
    category: "educational",
    categoryLabelEn: "Educational Designs",
    categoryLabelAr: "تصاميم تعليمية",
    descEn: "Clean, structured, and visually engaging educational summary designed for secondary school students to simplify complex curricula.",
    descAr: "ملخص تعليمي منظم وجذاب بصرياً مصمم لطلاب المرحلة الثانوية لتبسيط المناهج المعقدة وتسهيل الحفظ والمراجعة.",
    image: "assets/images/project-edu-summary.svg",
    tags: ["Canva", "Photoshop", "Secondary School", "Print Ready"]
  },
  {
    id: 2,
    titleEn: "Brand Identity & Minimalist Logo",
    titleAr: "تصميم هوية بصرية وشعار إبداعي حديث",
    category: "logos",
    categoryLabelEn: "Logo Design",
    categoryLabelAr: "تصميم شعار",
    descEn: "A memorable, minimalist geometric logo that translates core brand values into a distinct visual symbol.",
    descAr: "شعار هندسي بسيط ومميز يحول الفكرة إلى رمز بصري فريد يعلق في الأذهان ويبني هوية قوية.",
    image: "assets/images/project-logo-concept.svg",
    tags: ["Photoshop", "Branding", "Vector", "Identity"]
  },
  {
    id: 3,
    titleEn: "High-Impact Commercial Social Ad",
    titleAr: "إعلان تجاري لافت لمنصات التواصل الاجتماعي",
    category: "ads",
    categoryLabelEn: "Advertisements",
    categoryLabelAr: "إعلانات",
    descEn: "Eye-catching commercial advertisement designed with dynamic lighting, typography hierarchy, and a strong conversion call-to-action.",
    descAr: "إعلان ترويجي جاذب للأنظار مصمم بإضاءة ديناميكية وتدرج بصري احترافي لتحقيق أعلى معدل تفاعل.",
    image: "assets/images/project-ad-promo.svg",
    tags: ["Photoshop", "Social Media", "Advertising", "Creative Lighting"]
  },
  {
    id: 4,
    titleEn: "Teacher's Revision Booklet & Study Notes",
    titleAr: "مذكرة مراجعة وأوراق عمل خاصة بالمعلم",
    category: "teachers",
    categoryLabelEn: "Teachers' Materials",
    categoryLabelAr: "مستلزمات المعلمين",
    descEn: "Comprehensive revision booklet cover and layout tailored specifically for secondary school teachers and their tutoring groups.",
    descAr: "تصميم غلاف ومحتوى مذكرة مراجعة شاملة مخصصة للمعلمين ومجموعات الدروس بطباعة أنيقة ومنظمة.",
    image: "assets/images/project-teacher-booklet.svg",
    tags: ["Educational", "Teachers", "Booklet", "Worksheets"]
  },
  {
    id: 5,
    titleEn: "Interactive Social Media Carousel Post",
    titleAr: "بوست سوشيال ميديا تفاعلي بتصميم عصري",
    category: "social",
    categoryLabelEn: "Social Media Designs",
    categoryLabelAr: "سوشيال ميديا",
    descEn: "Vibrant and aesthetic social media post crafted with clean typography, balanced contrast, and engaging visual hierarchy.",
    descAr: "منشور احترافي لمنصات التواصل الاجتماعي بتنسيق خطوط راقٍ وتوازن بصري يجذب المتابعين.",
    image: "assets/images/project-social-grid.svg",
    tags: ["Social Media", "Photoshop", "Canva", "Engagement"]
  },
  {
    id: 6,
    titleEn: "Creative Event & Educational Poster",
    titleAr: "بوستر إعلاني إبداعي لورشة تعليمية",
    category: "posters",
    categoryLabelEn: "Posters",
    categoryLabelAr: "بوسترات",
    descEn: "Large-format creative poster emphasizing outside-the-box typography, balanced negative space, and striking contrast.",
    descAr: "بوستر إعلاني مبتكر بمقاسات كبيرة يبرز التفكير الإبداعي خارج الصندوق وتناسق الكتل البصرية.",
    image: "assets/images/project-poster-creative.svg",
    tags: ["Posters", "Creative Artwork", "Composition", "Typography"]
  },
  {
    id: 7,
    titleEn: "Teacher Motivational Flashcards & Badges",
    titleAr: "بطاقات تعليمية تحفيزية وشهادات تقدير للطلاب",
    category: "teachers",
    categoryLabelEn: "Teachers' Materials",
    categoryLabelAr: "مستلزمات المعلمين",
    descEn: "Custom-designed educational flashcards, revision cards, and appreciation certificates created for teachers to inspire top-ranking students.",
    descAr: "كروت وشهادات تقدير مخصصة للمعلمين لتحفيز وتكريم الطلاب المتفوقين في الامتحانات والمراجعات.",
    image: "assets/images/project-teacher-cards.svg",
    tags: ["Teachers", "Educational Cards", "Certificates", "Students"]
  },
  {
    id: 8,
    titleEn: "Dynamic Promotional Story & Reel Graphic",
    titleAr: "تصميم ستوري ترويجي متحرك ومؤثر",
    category: "ads",
    categoryLabelEn: "Advertisements",
    categoryLabelAr: "إعلانات",
    descEn: "Fast-paced, mobile-optimized visual advertisement tailored for Instagram and Facebook Stories with high retention power.",
    descAr: "تصميم عمودي مميز لقصص إنستغرام وفيسبوك مصمم خصيصاً لجذب انتباه المستخدم من أول ثانية.",
    image: "assets/images/project-ad-story.svg",
    tags: ["Stories", "Advertising", "Mobile", "Photoshop"]
  },
  {
    id: 9,
    titleEn: "Comprehensive Secondary Science Diagram Summary",
    titleAr: "مخطط بياني وملخص مادة علمية لطلاب الثانوية",
    category: "educational",
    categoryLabelEn: "Educational Designs",
    categoryLabelAr: "تصاميم تعليمية",
    descEn: "Infographic-style study summary translating dense scientific concepts into clear, color-coded diagrams for effortless revision.",
    descAr: "إنفوجرافيك تعليمي متقن يحول المعلومات المعقدة إلى مخططات ملونة سهلة الفهم للطلاب في فترة الامتحانات.",
    image: "assets/images/project-edu-infographic.svg",
    tags: ["Educational", "Infographic", "Summary", "Canva"]
  }
];

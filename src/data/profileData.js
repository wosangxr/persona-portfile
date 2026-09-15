export const profileData = {
  // ข้อมูลส่วนตัวหลัก
  name: "wosangxr",
  tagline: "Just a random person on the internet",
  bio: "Full-Stack Developer & Creator crafting interactive web experiences, bots, and tools.",
  avatar: "/profile.png",
  avatarPosition: "center 55%", // ปรับตำแหน่งรูป: เลื่อนขึ้น-ลง เช่น "center 10%", "center 25%", "center 40%"
  avatarScale: 1.0,            // ปรับขนาดซูมรูป: 1.0 (ปกติ), 1.1 (ซูมเข้า 10%), 1.2 (ซูมเข้า 20%)
  location: "Thailand",
  status: "Online & building things",

  // ปุ่มกดลัดเหลือแค่ GitHub กับ Mail
  quickActions: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/wosangxr",
      icon: "Github",
    },
  ],

  // แบ่งโปรเจกต์เป็น 2 คอลัมน์ รวม 6 ช่อง ตามตัวอย่างในรูปที่ 2
  projectColumns: {
    left: [
      {
        sectionTitle: "Favorite",
        projects: [
          {
            id: "Baking game",
            title: "Baking game",
            description: "A relaxing, cozy bakery simulation web game",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Food%20and%20Drink/Pretzel.webp",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/Baking-games" }
            ]
          }
        ]
      },
      {
        sectionTitle: "Other Fun Things",
        projects: [
          {
            id: "wifi-report-AI_V.2",
            title: "wifi-report-AI_V.2",
            description: "A web application system for reporting and analyzing Wi-Fi signal issues, featuring an administrator dashboard and AI-driven data analysis.",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Mobile%20Phone.webp",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/wifi-report-AI_V.2" }
            ]
          },
          {
            id: "Note App",
            title: "Note App",
            description: "This is a React Native Note Application built with SQLite.",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Memo.webp",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/Note-App" },
            ]
          }
        ]
      }
    ],
    right: [
      {
        sectionTitle: "Simple Web Apps",
        projects: [
          {
            id: "job board",
            title: "job board",
            description: "A modern job board application where users can browse listings, view job details, and post new jobs.",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Card%20Index%20Dividers.webp",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/job-board" },
            ]
          },
          {
            id: "patient assessment",
            title: "patient assessment",
            description: "A web app for recording and assessing patient health data and vital indicators.",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Blue%20Heart.png",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/patient-assessment" },
            ]
          },
          {
            id: "shift management",
            title: "shift management",
            description: "Shift Management and Payroll Calculation System",
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Money%20With%20Wings.webp",
            buttons: [
              { label: "", icon: "Github", url: "https://github.com/wosangxr/shift-management" },
            ]
          }
        ]
      }
    ]
  },

  // ทักษะและความสามารถ (Skills)
  skills: [
    { category: "Frontend", items: ["React", "JavaScript", "CSS", "HTML", "Python", "TypeScript"] },
    { category: "Backend & Tools", items: ["Node.js", "Git & GitHub", "Vercel", "REST APIs", "npm"] },
    { category: "Design & UX", items: ["Dark Mode UI", "Responsive Design", "UI/UX", "Figma"] }
  ]
};
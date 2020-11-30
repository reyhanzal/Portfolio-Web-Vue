let info = {
  name: "M. Reyhan Zalbina",
  logo_name: "M. Reyhan Zalbina",
  flat_picture: require("./src/assets/potrait.svg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description: "A 5 years’ experience Software Developer with an interest in Software Development, Web Development and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person, I am looking forward to implementing and grow in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/mreyhanzalbina/",
    github: "https://github.com/reyhanzal",
    resume: "https://drive.google.com/file/d/1MwiUbX1jFQ-h22AGXqr13xNGTro25PDp/view?usp=sharing",
  },
  education: [{
    name: "Universitas Sriwijaya",
    place: "Indonesia",
    date: "2009 - 2014",
    degree: "Bachelor in Computer Science",
    gpa: "3.14/4.00",
    description: "Major in Sistem Komputer.",
    skills: ["VBA", "SQL"],
  }, ],
  experience: [{
      name: "NTT Ltd",
      place: "Jakarta, Indonesia",
      date: "May, 2019 - Present",
      position: "ETL Developer",
      description: "Worked as a ETL Developer, building innovative dashboard, and ad-hoc report.",
      skills: [
        "SQL Server",
        "SSIS",
        "SSRS",
        "Microsoft Sharepoint",
        "Microsoft Excel",
      ],
    },
    {
      name: "PT Micropiranti Computer",
      place: "Jakarta, Indonesia",
      date: "Oct, 2015 - Apr, 2019",
      position: "Software Developer",
      description: "Worked as a software developer in back ofice division to develop S21+ Enhanced Back Office System.",
      skills: ["VBA", "SQL"],
    },
  ],
  skills: [{
      title: "languages",
      info: ["C++", "C#", "VBA", "Javascript"],
      icon: "fa fa-code",
    },
    {
      title: "web technologies",
      info: ["HTML", "CSS", "SASS", "Vue.js", "Node.js"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["SQL"],
      icon: "fa fa-database",
    },
    {
      title: "microsoft stack",
      info: ["Sharepoint, SSDT, SQL Server, Power BI"],
      icon: "fa fa-tools",
    },
  ],
  portfolio: [{
      name: "Microsoft Sharepoint",
      pictures: [{
          img: require("./src/assets/portfolio/sharepoint/1.png"),
        },
        {
          img: require("./src/assets/portfolio/sharepoint/2.png"),
        },
      ],
      technologies: [
        "Microsoft Sharepoint",
        "SQL Server",
        "SSRS",
        "SSIS",
        "SSDT",
      ],
      category: "Website",
      date: "Jan, 2020 - Present",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "http://www.micropiranti.com/BackOffice.aspx",
      description: "This is a desktop application, uses to account all brokerage transaction. The application consists of Client KYC, Contract Booking, MKBD and etc.",
    },
    {
      name: "T24 | Insight ETL",
      pictures: [{
          img: require("./src/assets/portfolio/t24/1.png"),
        },
        {
          img: require("./src/assets/portfolio/t24/2.png"),
        },
      ],
      technologies: ["SQL Server", "SSIS", "SSRS", "SSDT"],
      category: "Database Administrator",
      date: "May, 2019 - Dec, 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description: "As an ETL Developer, I was handled data extraction, transform, and load from T24 to Insight Database.",
    },
    {
      name: "S21+ Enhanced Back Office",
      pictures: [{
          img: require("./src/assets/portfolio/s21/1.png"),
        },
        {
          img: require("./src/assets/portfolio/s21/2.png"),
        },
      ],
      technologies: ["Microsoft Access 2010", "SQL Server", "VBA"],
      category: "Desktop App",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2015 - Apr, 2019",
      visit: "http://www.micropiranti.com/BackOffice.aspx",
      description: "This is a desktop application, used to account all brokerage transaction. The application consists of Client KYC, Contract Booking, MKBD and etc.",
    },
  ],
  recommendations: [{
      title: "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai",
    },
    {
      title: "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai",
    },
    {
      title: "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai",
    },
    {
      title: "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore",
    },
  ],
  contacts: [{
      title: "Address",
      value: "Jakarta, Indonesia",
      icon: "fa fa-map-pin",
    },
    {
      title: "Email",
      value: "muhammadreyhanzalbina@gmail.com",
      icon: "fa fa-envelope",
    },
    {
      title: "Contact",
      value: "+6281996331102",
      icon: "fa fa-address-book",
    },
  ],
};

export default info;
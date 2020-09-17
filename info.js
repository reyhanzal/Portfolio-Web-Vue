import { EmailJSResponseStatus } from "emailjs-com";

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
  description:
    "A 5 years’ experience Software Developer with an interest in Software Development, Web Development and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person, I am looking forward to implementing and grow in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/mreyhanzalbina/",
    github: "https://github.com/reyhanzal",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf",
  },
  education: [
    {
      name: "Universitas Sriwijaya",
      place: "Indonesia",
      date: "2009 - 2014",
      degree: "Bachelor in Computer Science",
      gpa: "3.14/4.00",
      description: "Major in Sistem Komputer.",
      skills: ["VBA", "SQL"],
    },
  ],
  experience: [
    {
      name: "NTT Ltd",
      place: "Jakarta, Indonesia",
      date: "May, 2019 - Present",
      position: "ETL Developer",
      description:
        "Worked as a ETL Developer, building innovative dashboard, and ad-hoc report.",
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
      description:
        "Worked as a software developer in back ofice division to develop S21+ Enhanced Back Office System.",
      skills: ["VBA", "SQL"],
    },
  ],
  skills: [
    {
      title: "languages",
      info: ["C++", "C#", "VBA", "Javascript"],
      icon: "fa fa-code",
    },
    {
      title: "web technologies",
      info: ["HTML", "CSS", "Vue", "Node"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["SQL"],
      icon: "fa fa-database",
    },
    {
      title: "operating systems & tools",
      info: ["Windows", "Ubuntu"],
      icon: "fas fa-tools",
    },
  ],
  portfolio: [
    {
      name: "Microsoft Sharepoint",
      pictures: [
        {
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
      description:
        "This is a desktop application, uses to account all brokerage transaction. The application consists of Client KYC, Contract Booking, MKBD and etc.",
    },
    {
      name: "T24 | Insight ETL",
      pictures: [
        {
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
      description:
        "As an ETL Developer, I was handled data extraction, transform, and load from T24 to Insight Database.",
    },
    {
      name: "S21+ Enhanced Back Office",
      pictures: [
        {
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
      description:
        "This is a desktop application, used to account all brokerage transaction. The application consists of Client KYC, Contract Booking, MKBD and etc.",
    },
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard",
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2",
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore.",
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients.",
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3",
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1",
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease.",
    },
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai",
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai",
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai",
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore",
    },
  ],
  contacts: [
    {
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
      value: "+62 8199 6331 102",
      icon: "fa fa-address-book",
    },
  ],
};

export default info;

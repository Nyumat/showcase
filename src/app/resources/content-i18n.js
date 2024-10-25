const createI18nContent = (t) => {
  const person = {
    firstName: "Tom",
    lastName: "Nyuma",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role", { role: "hates javascript" }), // Using dynamic content with fallback
    avatar: "/images/avatar.webp",
    location: "America/Los_Angeles", // IANA time zone identifier
    languages: ["Portland, Oregon"], // Leaving as per your request
  };

  const newsletter = {
    display: true, // Keeping as true per your earlier config
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: (
      <>
        {t("newsletter.description", {
          fallback:
            "I occasionally write about software engineering, product development, and share insights from my experiences in the tech industry.",
        })}
      </>
    ), // Utilizing t with a fallback description
  };

  const social = [
    {
      name: "GitHub",
      icon: "github",
      link: t("social.github.link", { fallback: "https://github.com/nyumat" }),
    },
    {
      name: "Devpost",
      icon: "devpost",
      link: t("social.devpost.link", {
        fallback: "https://devpost.com/Nyumat",
      }),
    },
    {
      name: "Discord",
      icon: "discord",
      link: t("social.discord.link", {
        fallback: "https://discord.com/users/700444827287945316",
      }),
    },
    {
      name: "Email",
      icon: "email",
      link: t("social.email.link", { fallback: "mailto:nyumat18@gmail.com" }),
    },
    {
      name: "X",
      icon: "x",
      link: t("social.x.link", { fallback: "https://x.com/tomnyuma" }),
    },
  ];

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: person.name }), // Using dynamic content for title
    description: t("home.description", {
      role: person.role,
      fallback:
        "formerly, an overcomplicated mess of react. now, a chill gallery for my projects, blogs, and photos.",
    }),
    headline: (
      <>{t("home.headline", { fallback: "software engineer and builder" })}</>
    ), // Using fallback for headline
    subline: (
      <>
        {t("home.subline", {
          fallback:
            "welcome to my corner of the internet. formerly an overcomplicated mess of react, now just a chill gallery of projects, blogs, and photos. take a look around, and feel free to reach out if you have any questions or just want to chat. ✌🏿",
        })}
      </>
    ),
  };

  const about = {
    label: t("about.label"),
    title: t("about.label"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: false,
      link: t("about.calendar.link", { fallback: "https://cal.com" }),
    },
    intro: {
      display: true,
      title: t("about.intro.title"),
      description: (
        <>
          {t("about.intro.description", {
            fallback: `Hey, I’m Nyuma! I write code, make music, and occasionally combine the two to something cool. You might’ve seen my work at Notion, or maybe caught me winning a hackathon or two. Currently, I'm changing the way people with Sickle Cell Disease manage their health.\n\nWelcome to my little corner of the 'net.`,
          })}
        </>
      ),
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: t("about.work.experiences.FLY.company", { fallback: "FLY" }),
          timeframe: t("about.work.experiences.FLY.timeframe"),
          role: t("about.work.experiences.FLY.role"),
          achievements: t("about.work.experiences.FLY.achievements", {
            fallback: "Led a web app rebuild; Managed a team of developers",
          }).split(";"),
          images: [
            {
              src: "/images/projects/project-01/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: t("about.work.experiences.Creativ3.company", {
            fallback: "Creativ3",
          }),
          timeframe: t("about.work.experiences.Creativ3.timeframe"),
          role: t("about.work.experiences.Creativ3.role"),
          achievements: t("about.work.experiences.Creativ3.achievements", {
            fallback: "Built innovative marketing tools; Developed APIs",
          }).split(";"),
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: t("about.studies.title"),
      institutions: [
        {
          name: t("about.studies.institutions.OregonStateUniversity.name", {
            fallback: "Oregon State University",
          }),
          description: (
            <>
              {t(
                "about.studies.institutions.OregonStateUniversity.description",
                {
                  fallback:
                    "Degree in Computer Science with a focus on Web and Mobile Development. Member of ACM, NSBE, and LUG.",
                }
              )}
            </>
          ),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Figma",
          description: (
            <>
              {t("about.technical.skills.Figma.description", {
                fallback: "UI/UX Design using Figma.",
              })}
            </>
          ),
          images: [
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-03.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Next.js",
          description: (
            <>
              {t("about.technical.skills.Nextjs.description", {
                fallback: "Building modern web apps with Next.js.",
              })}
            </>
          ),
          images: [
            {
              src: "/images/projects/project-01/cover-04.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      ],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
  };

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
    images: [
      {
        src: "/images/gallery/img-01.jpg",
        alt: t("gallery.image.alt", { fallback: "image" }),
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-02.jpg",
        alt: t("gallery.image.alt", { fallback: "image" }),
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-03.jpg",
        alt: t("gallery.image.alt", { fallback: "image" }),
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-04.jpg",
        alt: t("gallery.image.alt", { fallback: "image" }),
        orientation: "horizontal",
      },
      // Remaining gallery images...
    ],
  };

  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };

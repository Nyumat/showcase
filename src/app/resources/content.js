const person = {
  firstName: "tom",
  lastName: "nyuma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "hates javascript",
  avatar: "/images/avatar.webp",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier
  languages: ["Portland, Oregon"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, product development, and
      share insights from my experiences in the tech industry.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nyumat",
  },
  {
    name: "Devpost",
    icon: "devpost",
    link: "https://devpost.com/Nyumat",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/tomnyuma",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nyumat18@gmail.com",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.com/users/700444827287945316",
  },
];

const home = {
  label: "home",
  title: `nyuma's personal website`,
  description: `formerly, an overcomplicated mess of react. now, a chill gallery for my projects, blogs, and photos.`,
  headline: <>software engineer and builder</>,
  subline: (
    <>
      hey, i'm tom nyuma. ✌🏿 welcome to my <i>new</i> corner of the net. <br />
      <br /> formerly an overcomplicated mess of react, now just a chill gallery
      of projects, ramblings, and photos. take a look around, and feel free to
      reach out if you have any questions or just want to chat.
    </>
  ),
};

const about = {
  label: "about",
  title: "about me",
  description: `basically all my info in one place`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "introduction",
    description: (
      <>
        hey, im nyuma! i write code, make music, and occasionally combine the
        two to make something cool. you might’ve seen my work at some hackathon, or
        maybe caught me chanting go beavs at a football game, regarless—welcome.
        currently, i'm changing the way people with Sickle Cell Disease manage
        their health.
        <br />
        <br />
        <br />
        <br />
        welcome to my little corner of the 'net.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "what I've been up to",
    experiences: [
      {
        company: "app development club",
        timeframe: "oregon state university",
        role: "president",
        achievements: [
          <>
            Lead a team of over 200+ student developers in building web and
            mobile apps, organizing hackathons, and fostering a community of
            some of the most passionate developers I've ever met.
          </>,
          <>
            Hosted a $2000 hackathon with 75+ particpants, partnering with
            <a
              href="https://www.purs.digital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Purs Digital
            </a>{" "}
            and
            <a
              href="https://www.oregonstate.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Oregon State University,
            </a>{" "}
            challenging students to build an NFC-based mobile application in
            just 48 hours.
          </>,
          <>
            Led the launch of 5 apps, including an{" "}
            <a href="https://beavbright-web.vercel.app" target="_blank">
              AI-platform
            </a>{" "}
            that understands your course schedule, a{" "}
            <a href="https://beavsai.onrender.com" target="_blank">
              peer-to-peer study group and tutoring platform
            </a>{" "}
            for OSU students, and{" "}
            <a href="https://osuapp.club" target="_blank">
              an all-new club website, moving us away from Wix studio
            </a>
            .
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/osuapp/group.webp",
            alt: "App Club @ OSU",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "notion",
        timeframe: "2024",
        role: "engineering Intern",
        achievements: [
          <>
            Launched the{" "}
            <a
              href="https://www.linkedin.com/posts/notionhq_its-easier-than-ever-to-secure-your-account-activity-7242602102907117568-0jm7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion Device Mangaer
            </a>{" "}
            to over 10 million users, unlocking the ability to secure their
            accounts with log-in with log-in alerts, session management, and
            device tracking.
          </>,
          <>
            Featured in the{" "}
            <a
              href="https://www.notion.so/blog/start-a-club-on-notion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion Blog
            </a>{" "}
            for our Club's (App Club @ OSU) innovative use of Notion to manage
            our club's engineering, logistics, and community endeavors.
          </>,
          <>
            Sparked partnernship between Notion and{" "}
            <a
              href="https://www.colorstack.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorstack
            </a>
            , a non-profit organization aimed to increase diversity in tech,
            establishing a pipeline for underrepresented students to intern at
            Notion.
          </>,
        ],
        images: [
          {
            src: "/images/notion/device-manager.png",
            alt: "Notion Device Manager",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "hackathons, geckos, and me",
        timeframe: "a while now...",
        role: "all over the USA",
        achievements: [
          <>
            I achieved 2nd place and $5000 at the first ever AfroTech AI
            Hackathon with{" "}
            <a
              href="https://devpost.com/software/sicklesense"
              target="_blank"
              rel="noopener noreferrer"
            >
              SickleSense
            </a>
            , won the terraform track prize at the largest hackathon in the PNW,
            DubHacks, with{" "}
            <a
              href="https://devpost.com/software/dubjam-hy9ej8"
              target="_blank"
              rel="noopener noreferrer"
            >
              DubJam
            </a>
            , and secured 1st place overall at the UC Berkeley CalHacks 10th
            anniversary, the largest collegiate hackathon, with{" "}
            <a
              href="https://devpost.com/software/nexus-27zakp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nexus
            </a>
            .
          </>,
          <>
            I moved my Leopard Gecko, Leo to his permanent home, a bioactive
            terrarium featuring 4 different species of isopods, springtails, and
            a variety of plants. Because Leo's heat requirements are unlike most
            geckos, I coded up a custom temperature and humidity sensor that
            both alerts me and automatically adjusts the terrarium's climate to
            keep him as comfortable as possible.
          </>,
          <>
            This year, I'm working on a project that will change the way people
            with Sickle Cell Disease manage their health. I'm excited to share
            more about this project soon! It was one of the winning projects at
            the AfroTech AI Hackathon, and I'm currently working with a talented
            team of Hematologists, Engineers, and Sickle Cell Advocates to bring
            this project to life.
          </>,
        ],
        images: [
          {
            src: "/images/osuapp/calhacks.jpg",
            alt: "CalHacks",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "studies",
    institutions: [
      {
        name: "oregon state university",
        description: (
          <>
            <ul>
              <li>
                Degree in Computer Science with a focus on Web and Mobile
                Development. I've taken courses in topics ranging from Data
                Structures and Algorithms to Cloud Computing and Operating
                Systems.
              </li>
              <li>
                President of the App Development Club, Webmaster for the
                Association for Computing Machinery, Webmaster for the Linux
                Users Group, member of the National Society of Black Engineers,
                African Student Association, Black Student Union, and the
                National Association for the Advancement of Colored People.{" "}
                <a
                  href="https://eecs.engineering.oregonstate.edu/project-showcase/profile/?id=ofg5RugpoqqnhukB"
                  target="_blank"
                >
                  (Project Showcase)
                </a>{" "}
                -{" "}
                <a
                  href="https://engineering.oregonstate.edu/all-stories/oregon-state-team-wins-top-prize-cal-hacks-competition"
                  target="_blank"
                >
                  (CalHacks Article)
                </a>{" "}
                -{" "}
                <a href="https://github.com/NextJudge" target="_blank">
                  (Capstone)
                </a>
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "technical skills",
    skills: [
      {
        title: "web development",
        description: (
          <>
            Building modern web apps that not only delight, but also perform
            well.
          </>
        ),
        images: [
          {
            src: "/images/projects/misc/pipelines.png",
            alt: "Sickle Sense",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/nextjudge/old-landing.png",
            alt: "Next Judge",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "ai development",
        description: (
          <>
            Developing AI applications integrating machine learning models,
            tokenization, and natural language processing into applications.
          </>
        ),
        images: [
          {
            src: "/images/projects/misc/sicklesense.png",
            alt: "Sickle Sense",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/misc/beavsai.png",
            alt: "BeavsAI",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "yapping",
  title: "writing about everything i care about",
  description: `a collection of thoughts, ideas, and random junk i have no other place for.`,
};

const work = {
  label: "stuff i've built",
  title: "nyuma's projects",
  description: `a collection of projects i've done through the years.`,
};

const gallery = {
  label: "photos",
  title: "pictures and vibes",
  description: `photo collection from out 'n about`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

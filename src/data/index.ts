import { v4 as uuidv4 } from "uuid";
import { Image, Project, Social } from "../types";

/*
 - Archived Content

  {
    id: uuidv4(),
    title: "TrackMe@Dixon",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/tmad_xhlx7r_gsqc7e.webp",
    link: "https://trackmedixon.onrender.com",
    github: "https://github.com/nyumat/progress",
  },
   {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313547/pf/x/IMG_1051_ma3jbo.jpg",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308787/pf/9_xcfwcc_hginid.webp",
    },
      {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/bhfa22_vpjrvg_o4e1ws.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/bhwi23_n8sagd_mwr0cr.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308787/pf/14_fxurzf_sx0vcj.webp",
    },
      {
    id: uuidv4(),
    title: "UploadThing",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686314824/pf/x/mid_sepcqv.webp",
    link: "https://uploadthing.com/",
    github: "https://github.com/pingdotgg/uploadthing",
  },

    */

export const projects: Project[] = [
  {
    id: uuidv4(),
    title: "BeavsAI",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703560104/pf/x/Screen_Shot_2023-12-08_at_11.06.02_PM_d9zj0j.png",
    link: "https://beavsai.onrender.com/",
    github: "https://github.com/OSU-App-Club/beavsAI-frontend",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704205885/videos/beavsai_vj6hyw.mov",
  },
  {
    id: uuidv4(),
    title: "NyumatFlix",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/nyumatflix_k6gko8_niyilq.webp",
    link: "https://nyumatflix.com",
    github: "https://github.com/Nyumat/NyumatFlix",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704204945/videos/nyumatflix_k1n0iw.mov",
  },
  {
    id: uuidv4(),
    title: "TalkToBeavs",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1704206362/pf/Screen_Shot_2024-01-02_at_6.38.57_AM_iijp2p.png",
    link: "https://talktobeavs.onrender.com",
    github: "https://github.com/Nyumat/TalkToBeavs",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704205605/videos/talktobeavs_xtpouv.mov",
  },
  {
    id: uuidv4(),
    title: "OSU's ACM Website",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1696379199/pf/acm_site.png",
    link: "https://acm.oregonstate.edu/",
    github: "https://github.com/osu-acm/website",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704216104/videos/acm_njg7ja.mov",
  },
  {
    id: uuidv4(),
    title: "NextJudge",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703559902/pf/x/Screen_Shot_2023-12-23_at_5.33.27_PM_wd94hg.png",
    link: "https://github.com/NextJudge",
    github: "https://github.com/NextJudge/NextJudge",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704207913/videos/nextjudge_simocs.mov",
  },
  {
    id: uuidv4(),
    title: "Nexus",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703559839/pf/x/nexus_hlfvdb.png",
    link: "https://devpost.com/software/nexus-27zakp",
    github: "https://github.com/Sankalpsp21/Nexus",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704208933/videos/nexus_lauyqy.mov",
  },
  {
    id: uuidv4(),
    title: "ISpyAI",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/ispy_rykpja_dtjayr.webp",
    link: "https://ispyai.onrender.com",
    github: "https://github.com/Nyumat/ispyai",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704204162/videos/ispyai_sssn9i.mp4",
  },
  {
    id: uuidv4(),
    title: "MockBuddy",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703560059/pf/x/Screen_Shot_2023-11-20_at_6.33.21_PM_qk0vsc.png",
    link: "https://devpost.com/software/mockbuddy",
    github: "https://github.com/Nyumat/Mockbuddy",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704207031/videos/mockbuddy_qj2pm9.mp4",
  },
  {
    id: uuidv4(),
    title: "Band Photo Gallery",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/doesband_btqagl_glkkpp.webp",
    link: "https://nyumat-does-band.vercel.app",
    github: "https://github.com/Nyumat/NyumatDoesBand",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704209217/videos/doesband_wdxwbi.mov",
  },

  {
    id: uuidv4(),
    title: "CSS-in-JS PokeDex",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1704213404/pf/Screen_Shot_2024-01-02_at_8.36.11_AM_qsp8x8.png",
    link: "https://github.com/Nyumat/NyumatPokedex",
    github: "https://github.com/Nyumat/NyumatPokedex",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704213601/videos/pokedex_clfse3.mov",
  },
  {
    id: uuidv4(),
    title: "Syllabot",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703562718/pf/x/Screen_Shot_2023-12-25_at_7.17.56_PM_xztq2k.png",
    link: "https://devpost.com/software/syllabot-1dxsil",
    github: "https://github.com/Nyumat/Syllabot",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704206761/videos/syllabot_syifai.mp4",
  },
  {
    id: uuidv4(),
    title: "Open Source Diversity",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703562717/pf/x/Screen_Shot_2023-12-25_at_7.51.27_PM_adjhyv.png",
    link: "https://opensourcediversity.org/",
    github: "https://github.com/opensourcediversity/opensourcediversity.org",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704209379/videos/opensourcediversity_qm1gpj.mov",
  },
  {
    id: uuidv4(),
    title: "My Blog",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/blog_mslh5t_i5juwt.webp",
    link: "https://nyumat.onrender.com",
    github: "https://github.com/Nyumat/blog",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704206009/videos/myblog_dt2xee.mov",
  },
  {
    id: uuidv4(),
    title: "Typing Speed Test",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/nyumatype_cems5a_t9vhn3.webp",
    link: "https://nyumatype.onrender.com",
    github: "https://github.com/Nyumat/NyumaType",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704209730/videos/typingtest_p5umle.mov",
  },
  {
    id: uuidv4(),
    title: "OSU Rec. Center Workout Tracker",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1704214718/pf/Screen_Shot_2024-01-02_at_8.56.07_AM_periul.png",
    link: "https://trackmedixon.onrender.com",
    github: "https://github.com/Nyumat/ProgressAD",
    demoVideo:
      "https://res.cloudinary.com/dkosoobf7/video/upload/v1704215062/videos/trackmedixon_vre4qc.mp4",
  },
];

export const heroImages: Image[] = [
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313551/pf/x/instc_2021-01-24_001259.178_smtf8c.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/HUS_6126_khvzuu_ogcrep.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/pg_hitukq_b3bsbi.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686319217/pf/x/9C698097-9D23-443E-9492-381682DA884E_qql7ao.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308786/pf/1C5A5701_as9nol_gi8f43.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686319217/pf/x/IMG_0019_lnnmuv.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/DSC_2949_lnvhoa_bnidn1.webp",
  },
  {
    id: uuidv4(),
    title: "Hero Image",
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/IMG_6032_uiwgsa_gxqmda.webp",
  },
];

export const bandPhotosMisc: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686310892/pf/33_uw2548.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686310896/pf/14_1_g7bxzj.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308790/pf/wazzu_l2zduw_xc1jjy.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/cavs_s1ncel_lmznqd.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313633/pf/38_drf4aq.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313548/pf/x/IMG_5664_qu4b8f.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686310942/pf/1_1_znd8fc.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686310947/pf/16_ik62ap.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/pre_xf9lqx_oimuz3.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/scc_uhwmxq_wthssj.webp",
  },
  // { id: uuidv4(), image: "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/stack_prlq31_kwgbjw.webp" },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1676358915/band/IMG_3038_q0cnji.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1676274240/band/IMG_2854_fr4yn5.jpg",
  },
];

export const csMemories: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164858/pf/IMG_2571_tigzqv.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164856/pf/IMG_2590_qzvbab.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164850/pf/IMG_2839_mpbutv.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164849/pf/IMG_2779_evrkrl.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164847/pf/IMG_2913_vwjo0m.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164845/pf/IMG_0392_zafcxk.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164839/pf/DSC07463_Original_fbejx1.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164836/pf/IMG_3293_hyaenw.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164855/pf/FAF0E06B-AD69-4216-869C-1AEF9795E14B_hwp603.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308787/pf/barcamp_qphuh3_i8i0n5.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308787/pf/acm_a8wct3_qtcjjy.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164856/pf/IMG_2187_vkdgoa.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1701164838/pf/IMG_3290_h4njhz.jpg",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308786/pf/7_jgparz_ackqdq.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703576051/pf/Screen_Shot_2023-12-25_at_11.33.32_PM_aflwig.png",
  },
  {
    id: uuidv4(),
    image:
      "https://cdn.discordapp.com/attachments/1163717135596539914/1189112828041375774/IMG_3895.png?ex=659cfa9e&is=658a859e&hm=9798dc0702f32348dd48e4d72ba5210e0939a561402b5799887ed0d48ddcd056&",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703576583/pf/Screen_Shot_2023-12-25_at_11.42.25_PM_ipv0xo.png",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1703576652/pf/team-picture-af4e7deb_awa2kw.jpg",
  },
].sort(() => Math.random() - 0.5);

export const miscMemories: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317350/pf/x/IMG_7657_u8h7tm_3e8f00.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313548/pf/x/IMG_8599_qyunue.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686313547/pf/x/IMG_1958_anmmu4.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308788/pf/goog_hdshea_yglnja.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317715/pf/x/IMG_7201_cxcps0_728b65.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317654/pf/x/IMG_2123_pmq8xh_f450fb.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317627/pf/x/IMG_0736_umo1y6_96ac6f.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317607/pf/x/IMG_0739_nf6grt_146b23.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686319217/pf/x/TELE1204_kd8yyo.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317578/pf/x/IMG_0990_smguwh_99e2e2.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317290/pf/x/IMG_0503_yqkq8n_4a3954.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308790/pf/zon_o91ixp_nr2txc.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317543/pf/x/IMG_0713_japodn.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686317682/pf/x/IMG_9454_wtiwcy_03bd3b.webp",
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/dkosoobf7/image/upload/v1686318033/pf/x/IMG_4815_bqiecb.webp",
  },
];

export const socials: Social[] = [
  {
    id: 1,
    title: "Youtube",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    link: "https://www.youtube.com/@nyumat",
    username: "nyumat",
  },
  {
    id: 2,
    title: "Github",
    image: "https://www.svgrepo.com/show/449764/github.svg",
    link: "https://github.com/nyumat",
    username: "Nyumat",
  },
  {
    id: 3,
    title: "Instagram",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622",
    link: "https://www.instagram.com/tomnyuma",
    username: "tomnyuma",
  },
  {
    id: 4,
    title: "Twitter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png?20220821125553",
    link: "https://www.twitter.com/BotJcole",
    username: "BotJcole",
  },
  {
    id: 5,
    title: "Devpost",
    image: "https://www.vectorlogo.zone/logos/devpost/devpost-icon.svg",
    link: "https://www.devpost.com/Nyumat",
    username: "Nyumat",
  },
  {
    id: 6,
    title: "Discord",
    image: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    link: "https://discordapp.com/users/700444827287945316",
    username: "Nyumat",
  },
];

import { v4 as uuidv4 } from "uuid";
import { Image, Project, Social } from "../types";
import data from "./data.json";

interface CImage {
  id: number;
  imageName: string;
  imageUrl: string;
}

interface Video {
  id: number;
  videoName: string;
  videoUrl: string;
}

interface MediaData {
  images: CImage[];
  videos: Video[];
}

const images = data.images;
const videos = data.videos;

export const mediaData: MediaData = {
  images,
  videos,
};

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
  {
    id: uuidv4(),
    title: "Astro.js Blog",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000572427-blog_mslh5t_i5juwt.webp?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=oVlZDdg4FaZLpL6iV-AzXLgYG~PrUhXLlaU~7~neIYmoowuPsigYdj3erEdhE-JeJBOsO5g9t7lykYQHRFcyEoRKXO6TsRt5Q-tpKBRuujuQ4A~aOaU2M5-WzjBzNqdtINEzoJWiCGjH59YtanZpthedw32bGbpV-u2zifQIeQ4v352WNKMdKn~Zglo7y-57oVWpyC-P3Ma67aF2RYkdxlZam2vvcFXRwSDBeK0FGSqCfC8~8mUU2IZHF1xCurPSZinBGc41zZo2vPOaSMlHzB7vd7HbrmVAMq4AOA66itF0p7nj85FCp1ha64iJ7oaD5ipGktEnMFqSCNp4g3NqfQ__",
    link: "https://nyumat.onrender.com",
    github: "https://github.com/Nyumat/blog",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001111465-myblog_dt2xee.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=OFicnNYdykXGgqkl6mwc-aFdUlxrAt6sIvl1wVyYhlFYJkzUIe5VVgaLUKQuBdEqDW5kgbXtfLfI-UKO9M2d8upbt8irGul77OukgpRHBzwuKz8YRihlb~tJY0O6vPtL-hwlO-oXAjwwfWNLvjhwZYOz35etcP4WVjIA3syyEd9wrStFu~dYqb6ik2nu8QhbvllVJ6TLoyetM6D2YWUdFF89aoypu8Vb7VvjRfL6YD60XtoWvr56VHIvwOKxUqwiBfVG37O1gp7arjOQYXGluinPdptsZma7S8OLpLhPg~2C-W65fbbgAYIMB9FER0Yg84pTqYqKcCu2uZG6eiGsAw__",
  },
  {
    id: uuidv4(),
    title: "Typing Speed Test",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000584325-nyumatype_cems5a_t9vhn3.webp?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=euBRewgRD32LWDuOEl5sV-xGmp8jH7nMsmwjvxoND8C~bDEN-VbrXjzKG~XwrZ2RjKm-8XouFWZqlUfwatxXfI~lEBbPWp9vMTQAAIDPnD~Tqo3LPkbd9xE5QIAGFvebwE7-Bs5u7LBFMzJrT1WD5baX40fZfrVB1hj7iA591WepwNfK~64csxWNTGURe7o9ON9ORNOjBotR62vUi44KRVeaNYE3A049hMWL9MWe3hcpgGqI9Aw9papkKVK6qGCI5BhLSfnrGQagy~5~e8N2IXun7nyPEga9nbPSPBC2Cj4A8cEDnKUSX-2JWg70MlFRcANR7ICAi99URjfAuzfTOQ__",
    link: "https://nyumatype.onrender.com",
    github: "https://github.com/Nyumat/NyumaType",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001142897-typingtest_p5umle.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=hFRGykY7iDxUt0yfL6cLaJeqhGGKPBq3frvAiKBgCx26WQ4t2VfLqV08A0S7-zpH8ZEemRwwDP8u5RYOZ6O4ATPDVOAryOd9s9oaJqOiFZ~lDQ~W8cFS6emo70hLPNi1WJ6GOZQGxgbx~uucax76xroEIHgTR~Nv25AqPN3i0MtzR6CU2p8BfnKWc38W9-Kv1XL3rFDv2gjRXx2i02PJpA7GFx5J82E5nkH-OcDYagdoMWkB1FPbu6vgwOefmNy8A81cQo653tQY-5ran-W4ufHiPJwEyrvSuTbiil-3cVBkxgBR1uONn5K-W~n7uzkcHQERHE7TMCiIUE3lPejj7g__",
  },
  {
    id: uuidv4(),
    title: "OSU Rec. Center Workout Tracker",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000597743-Screen_Shot_2024-01-02_at_8.56.07_AM_periul.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=g-rputa92K7s4fUIF6hyo8eodPEq8vyfpMyHERpqs97I6I6sCKN60nLqMTtxd2GpM1VnTrQiJ2Ouuj2ZcujVULCSIX--9wRt8nPXPfM0DEugSsAZZBlH3cVuUzDBVZrIJF~XBhzizhzoPLBQZyBGx1GGdIOKorRsvft~cY0kAdVZCvwG7gMJeGuwTgjaE9jxY40aT9-ffaA9530HzVB6bHAvqEJpWa5~R7dfylDcCF0okdZlnasdDmzMKmqjI178k8Ya7cTMC9WFXOt7hEBgcynZmHo~Sm893LCqAMNS4kC-INzV-TPP9XJ1~GmeqQ0QDrqkyixpZrDMW8rvoQwc2Q__",
    link: "https://trackmedixon.onrender.com",
    github: "https://github.com/Nyumat/ProgressAD",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001160467-trackmedixon_vre4qc.mp4?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=hGR4bfksOnQ9w12b0RJQYu0gvg4Ij8QGtP3NVEAlMrQhRh8gkezEpovbfyvHhkSMl~trXyoYgmYBTYnrfvs0ByyENxSVHsZUVm~aaxvgrzzBlg6e7O0CDGY9s22z72BO6ZCFinpetaJMPZEwv8DGIOu7edc6AHFLfCqYfnVwiXuIcUe1p--0R1UrXXBewJbp6z0-sqwQv1ab~TdHTzoonuTgmgjPE4XffLNjrFPLslfuIk~2Ur2OXE08OUotNd~b6S-8KkVCSdoSJIDINer6ZhFaMM1cLa7WWpBT-W4NkaHWpDkcmC8OOLoRYqKH4Y0ZizGCnybovRE13yPF6loeIQ__",
  },

    */

export const projects: Project[] = [
  {
    id: uuidv4(),
    title: "NextJudge",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1707106832130-Screen%20Shot%202024-02-04%20at%206.46.20%20PM.png?Expires=1709698837&Key-Pair-Id=K2QFIALPUONXG1&Signature=qh350pWCGMj-tCU2cUGCxOldzftPTCpb0RjXcqfxV8Ic4ehfsXZ4wVyl6CoC9tVrQ7uVgkbQw4Q6QAtRhjwoJwiIqfuqXEttFw~dj0KSLKj8PhZjvDTQ7RrEXhwhMhjlUzpyWXw6jC7Ie-Fn0~vDV9I29UPzXBmGEO3h8J9Xam~8-y4bz8RRkFd2r6gPdJWiOssOp1a1Lx7WQxB6NkI-gZZ5vYYtyxug1cbhFO6fFaqYZ7g00kLC5OQpVIyhWCS-iMr0UNVRT0WmAfJpG5Ko1Pq1xrDQNaX1MoeKNsa1KjGIk~VmSW6UT7qmdEUd3aSUK-Ne57OijHPD~2QJUUSHRg__",
    link: "https://nextjudge.vercel.app",
    github: "https://github.com/NextJudge/NextJudge",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000392024-nextjudge_simocs.mov?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=c8ryNfIbr1AZhoBThtEb2mGVwv1-YKAW8RZbsarDDrero6vsinAstNvYnzpKziR3L3lArVq~8~Hcb5lMFx2eHFqSooBzeZ0HC1jW~8BaMj0aPwA1Fsgo-guMnVmHvKzFk90y-tOuGvzAyvS0wpvcpUf9QYXn8SGgKRpUUI6JAECkRaN2G1fpB4ZwowcLm494cCauRFzA5pIoQcoCOB-KbByrnwaVWGyFft3yNX6jaLMAJD7sHPoY8HbLc1RcgtHDIRKzOIrMaIcUKEb0PFybziA4FMjSDevpKi2sVfBac~xRY~dxKeHaCCvm4IhTd~6e3Ld1f12ImKDXUjw~CIUmhg__",
  },
  {
    id: uuidv4(),
    title: "YetAnotherPokedex",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000526328-Screen_Shot_2024-01-02_at_8.36.11_AM_qsp8x8.png?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=WqXMac~rZ1jAh1X-NpZ0hAbI5RDy0FcivEdrAVBBVTxYMzQhL-0wEtBdnzET0aRyQ0Ei702NadiitMC8JWlxYBVS4JRijhgax0HsvRI2vGzaFofaG-UF3LWI0z1yhBOW164eWkqBqIjHg9a~EDaBM5RY2IW1YaRl7rt5KgHccM2u2XKzj0lvUU91VidJZdZ2h6Z33cwQIrk3PvSh5skqrVTInm7vHMffNTTYlLKHBfbn3hxAdPiKbNVNAxoKF69nrAfTYnlThsGgisNUOg55ZmhK-FLtOt~rQL92692b~zFfKXaQD~uzaRUi7aDAArDs9Br6ZSZOlUDNxqnLmMSRUQ__",
    link: "https://github.com/Nyumat/NyumatPokedex",
    github: "https://github.com/Nyumat/NyumatPokedex",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000952940-pokedex_clfse3.mov?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=FsxlP0m3L~c8dy3td4FBzVbkdhQyzrFzMKdJ3RUfMCqqxAGb-kZ-ibSueJBMechFGtpu3pzPHH1yS1kNPtZ4kBA9Vv7Kdyg5GECyN1SciFY5f8a~X8ZDuQeALiP2Rv9o4FIWdEHC~p0ZIin0LcEaGqXhrs0oXgK8YSxMRWNwX-Yes3HSJNYtWgJ4t4kP9Wvj7w2utxMJN71puXCEU7xGYrHrQIqREUA2NfqPPg83X22SyMzhAJh9sEmKu~1E~Ai195xgjOECSczKMaGm7PoYyRd1YnRSoRsPLmRzEfjraHAhVRvZ3yR4OSg4U98AuX-ut6UYvH4UaSlBUwIxrqDu2A__",
  },
  {
    id: uuidv4(),
    title: "Pipelines",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706085239815-Screen%20Shot%202024-01-24%20at%2012.18.29%20AM.png?Expires=1708677247&Key-Pair-Id=K2QFIALPUONXG1&Signature=KfZ9UZuAKkPu2Au5xV-cvOxuKXEgoZFrcOCDFJhotJY3vyPbeBDAUmkKN4LS4IKnZrqeVxtTsR64JToxuSmkC1SYAXgEAyVCL8yy5o5T-7JgsXDA8Vfb96oFMoIANqVCnnYUkI4QcEriL~GsByMlVVSUKvDWgOYR8M6N~-ES~9UIehtqHqBmgQGBMlIrdOksJ3ln~cFXAw~mALCpLTihU~u87-2ujR7KDggjj6PoY5TaOscnef5F05LuLFmqYzJ9RqW4fCqGRE4rluVoHPe7H~3ZRvoX-Z2hry3O6wmdbhf270zXRO6HFblLrqU2zLtWbHMHULI3zXeYohx2muZkXg__",
    link: "https://pipelines.lol",
    github: "https://github.com/pipelines-lol/pipelines",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706085179886-pipelines.mov?Expires=1708677247&Key-Pair-Id=K2QFIALPUONXG1&Signature=EBiZ~CPHfyIi3wNmZtm4hnPd6eyB-NgJ4UqA2aM12EIFZw0z~5UmP9ElEwus8QtCdXgReAocvNPm6uylRa0H49I9IXuWgGyKPS4EwSzpMKc7yK42jH5Kq~ElnbJDmIV5APS7D5OVBTY7yIiWxMeHENGsFWeIw06sDVR3RUXaa~xPB86OdNBqKtCQrSSVbJ7zHd-nfsemui5G-GsqNwIPBq8SuGeC0b2n5NXKeVXT9ASCl32TDYnVU0cSVUaVoyJNmajW82KKl~EZpCM8-mG9Foj~4s4Fvmx5ooLM02NtmcDVTo6YFSVrGLgEekvW~ED-Ii9SyXb4nE8iChwBZRcT4g__",
  },
  {
    id: uuidv4(),
    title: "TalkToBeavs",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706089213236-Screen%20Shot%202024-01-24%20at%201.39.53%20AM.png?Expires=1708681218&Key-Pair-Id=K2QFIALPUONXG1&Signature=tl7yh55T0I5g2S9M~HjZ0jssy-s~8jydIQJoHbVXO2VDsdrNyVsht2Y7eLzPxEK8iQklq7KDn5rpCg-dcrdkF9LlBQUYdYrgpEFtN1sxH2JrYUosj2pt7DTJEGXhUfdpvjMN5cSSlAkMbtQk2jD~gjjer2xCB1PrR2fzibjlm6XnWy~Zv869pHWqyUo~~JNUE3dZC5k0xhPw-A2OuNLNntXQ~6vSh2AnKFYYsJsYQDyqxCjewwpHTfhGdlTxafu3leXlLF-4p1Q543ywWrPAfxhxSuG3Cqt9uTwzK2NIY-HwPHBWPAmdVML7A39S~dcq2bNasJQL6LEg9rQGVSQFsA__",
    link: "https://talktobeavs.onrender.com",
    github: "https://github.com/Nyumat/TalkToBeavs",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000010287-talktobeavs_xtpouv.mov?Expires=1708592238&Key-Pair-Id=K2QFIALPUONXG1&Signature=bo0MhKC41XZpyJQGzipHcZVPYlnB5ao13U65c5OypqIdmO4tt-yLI5l-jtjhAqeF7QtCNhmFE988B-Y3hQFT4oclOw-6Zxbji~oPUrkwIHYWhfdcDsz-gAztQMK8qZeW45mbiPba0hbcoyCXBKGmU6BXNdK4e51iw3mGnWur46uxkF5cdFdjBbUj6MeokYxIbfCXRPyuoRn-NC53zif2Yj3Y3vEK~6hK-eemfNShVt2z4Uqzl7aiUGE64DjUPGT2cNMZz6el-4mJuj7-GJQhkwLrUt3c~PBH7ADzwvJiy~6x1~SpgJ8-hKBjLCNdcPmLa13~yGIFynNjHCVCZ6AHXg__",
  },
  {
    id: uuidv4(),
    title: "NyumatFlix",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706089368940-Screen%20Shot%202024-01-24%20at%201.42.17%20AM.png?Expires=1708681374&Key-Pair-Id=K2QFIALPUONXG1&Signature=dXEqY3p8CmYIjJW0xv5GURBd7Y7lo1yhUSVo0qChqu~5Ti~xWh7rEIOwHilKd-MZrRL7Ui9dfoz9xaXG9gQN5ksWRGb-XuPQp7scrMjx-cS6qZ3~YhhXZ0fxrIIY3eQipG-X9x1ffSatIiCJ0j5BYvQmZSzWp0AD9O9jU7YDsfCrlllMvd6MoPGKGdSXd0tKj9los0dREmnRhgzOjT2BbD5MrT-Kjy8nIGuVsDJuSIusFD14xp1XeTmeWfzOhdBknUlk4AjMswYj-b2xVn7DEwGTmjBp20fevuQ9o6Ay4dQ0tq9PXvBkubCUvpSTtqff9HNMll4~zxNC-QinYT35Xg__",
    link: "https://nyumatflix.com",
    github: "https://github.com/Nyumat/NyumatFlix",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706089620561-nyumatflix.mov?Expires=1708681674&Key-Pair-Id=K2QFIALPUONXG1&Signature=y7y6tDfEgVW-ONtOp5lgeS8S7VOGgdrrPyfOXNk4jvFfvwuFEn0NMb-qUzy3bd9AO9SyyF3YTVdj39uzp2~EW8V4WWi1GhbMLe3r62jZGLZJLc-krEZmb1A3lc4RKq8eN4rLcjYkvNRfd4T2ykkhMjUWG5t0XuIqKOEFB-5HGMfGJy3pylpsZAQFWHrNdXkyrwhLFrRX-D7NhVZPRUDyai8t~7CDjl0Dl~yUa8EOWPz5ENd3zkj09uJ9IJ14BwWe3T8zPMQIuTJFnG-8jpe42b7CIcYh2qUl4VJy1Okj-pi8dbrS42qn6ivXTF~xG2GLk6dtzTftDtABDPb8c86Now__",
  },
  {
    id: uuidv4(),
    title: "MockBuddy",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000489392-Screen_Shot_2023-11-20_at_6.33.21_PM_qk0vsc.png?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=XtOtWD4FfbuX9QzpRrEYfjCGSZP8VECkHyc6-wmPerXXSISi46vtsyfQUyQn9Y5lmqxPB1TLucm0dR0-J0~6JhjL3y8XKWLrK35hzQcuHMjLZUi0ui7q9MVQx1Z4oD0pGGvWOXaD48UHmo2imyJmSMD2LagPU7InEru3IWXitxpsVc3SP5Ti5mucYaWLT1X~cGSsUgj3zk7NnyR2Mz0tEDHZnLmhwamhxl2EX2Pwxfflit~g7g40de6~HbSOq1XDeNhsyYlS5BQAk5~JW-qbUWHZ8w9JlLCwsl2GIGqJZanG4-ALYOzlAHxXPJkyFaAwRRJHf5EZLRVMXfhvF30xzg__",
    link: "https://devpost.com/software/mockbuddy",
    github: "https://github.com/Nyumat/Mockbuddy",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000893836-mockbuddy_qj2pm9.mp4?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=GkwDthnbRpqKtZSDRYSEKEn~9QpdpdbEdIqYOyTUU9bLuQCptlMDjQ0E5zwfL0SU-pmzAy7iHLerdZNHq9LGbhtQRAMFXOBXGddfcNmxrmg3xXWS9~lIdOqvRhMBdTNZfigSzGH1zYO5mWvvy2nb8vB~yoP7qBqcDhpCk1c4zM4fXWQj0TxWpNjv0rbXJ65-iC8ByREFuqPMiWtLtDw0nWqyH78XAB~ZCYIvYvohew2cyQqtYO1lArhbu8noxQkUvHj43U7Gk3CYP7Z6x1itTmaXuaGXU2IduZ0Bk-ZZdNxIDaQmml3jdtj~9s5yBF-ZcC61JRB0nXW3Oj0yfiis8g__",
  },
  {
    id: uuidv4(),
    title: "BeavsAI",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706089849462-Screen%20Shot%202024-01-24%20at%201.50.27%20AM.png?Expires=1708681851&Key-Pair-Id=K2QFIALPUONXG1&Signature=i2cCTH5-xe2WFZ6KGrwc6IFEqZUracUzbS77J4fGtxR615p7jWN3apvDCvboDWCutAwQuTs3Z9saMd~d7q-5u~pDg44VWwiwzy-szf~TmbYL1AHiV6qE-4nlk-9skZq4qSblHWzAf9-ZdpuRWw~w9IhKQ0IZY~k~o4bwXi9OZVP9qRDl8GiFfLu4DmQNMrkuGJRJy3YEg4fcETRetqZLq3nTwDIxTYpmEZQ3POnsbHFKNj-4uj7RsDbk62V-PYEiwnrTKue-6JLaCl2aOa~zRPs~IhZuFb3Cp46fk8v9JItvmLAetcXfdqb2oWEJzNtGZfU~ddKFwuDj8D0KxigxjA__",
    link: "https://beavsai.onrender.com/",
    github: "https://github.com/OSU-App-Club/beavsAI-frontend",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1705999762920-beavsai_vj6hyw.mov?Expires=1708591844&Key-Pair-Id=K2QFIALPUONXG1&Signature=kYfdCx16Xzl24sHW-WZmkfSrthAoLB9Ceb6OaNkx38V0tVx6I4FGPcgsh9QfZuA70JCTJcaSg884Q3rwXgH21QAOmgtw-rpUjzUA42~QLvudKBOBYrWbo9741H-UnsOtVA~WMu-vQ4IKUB7eakLEBjKhJZth-7x7HUenoHdm7bT23in9bTHfLe73tEOhoDUpvX5PSpQn1JTDmViSpTAa0WknxIfy1tYYTRlKm3FstCcHgs0O7w0kBUXtSN2irS8O-MOKkErHXHclgTzm7bRDJwSSyA6x9yzIPo5TFmnuDa0~seUUg0TnUhvnmCAIe4xmpqW3h5JQAW7A1RdnsNrluQ__",
  },
  {
    id: uuidv4(),
    title: "Nexus",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000461391-nexus_hlfvdb.png?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=y1a1E98SYjoyDq3e4SPW-mFFH8nxlzEsAFn6CxHg3JBvh82sG9SeKO9PfeCa27eTicfJA3PLxdQUQEjtsRC07AU5SYWvSGET3RaNsX51usP6dzsGFEcYYe~OUekYoWrmrudJeZwufZ~43MvBn9VV2XyqGIVarIXDF68sKm1hQJfgN93c8zZuKhpPsHorVD63cK~CVhinmKV3~oENOCda8Zhl0FZMJFwXqSzBWhudIK~QrLH0mYv3-AoLpbc3UGSA9toGmDmWZ-JeyvAxJFWlIVp9dXVWkCTah8G~uKxahllS-ccWQynVtMPfJ0-8ooQJT5jFS6TW2taquUopcfgNdA__",
    github: "https://github.com/Sankalpsp21/Nexus",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000836598-nexus_lauyqy.mov?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=MWP~m2DlD2QdlSD2125hw4-rGj3rw9TYfv4hvuT105iXZnJYVve30-7~ldjwTX4DjFY5cTP6Erd0RA8Aq40cq86zuxNrcd-E2NeJ~iNt3VL-QtixxmiNXO~OPe6vvPKm81-BPvsaYO54kkb1XZsMg1XzC-3htFWCz1xyVNCwFhYoyJDktJhecQCayIycr8W-I15HFOY61YcDqy3GdGWa~9ycNtmaO-7SOH1BeMDdeVu-yD3-FL3zHMHQ90d5N2Pjr8xjCRerZLW8lFQJoskBPsSx9tswxEol9vMddE9kybuYsTv-V1UGG6Mc6-pXcBR6~76pnO4m4IjjVaPAAVRcaw__",
  },
  {
    id: uuidv4(),
    title: "OSU's ACM Website",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706001733500-acm_site.png?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=DMxCEOaKmPJCSh-T-2iZaKIAp~0STux60hcrP0ZOViR~Y4nsjmrvyHUq0FtIlXwABsD3j3mPrAjckOmYOTdVNUsuJ9Xko1ftDE6dCfO70Y7jzApHc2zbQ5PE3P-duHWCSzegbBCBqoPVEvO9eX94fuZ6rPm3PztiFIxlkO3pInwY8drrJM2jgZIHMJKaErFUptxg3GLrz~lWakST0G0j4Zk1pRCEXTskL5to5vrXKR16ezSdVHD227y~7gSEAtL-n8MGa8i3MTOtVJwDxP4NPkzmrTaHNMx2WLOO8PY6DPhBO274n3ezvKXfIe3RccUuyGEGdM9ts1ENuMJrzgh--A__",
    link: "https://acm.oregonstate.edu/",
    github: "https://github.com/osu-acm/website",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001739745-acm_njg7ja.mov?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=aIB-q1To3OY6UfLreZDchXBqQdjPtX0xAFw4Y8Q0pgXBmrQTnGpd-Rt7Tmn2DFdGTQvlgAND28h4~rzWLU86~4Jm-YBi8ij2SgWY-Ax2Wx-AIek~TvvS5RHykzPxaO68z5h73Y9p4G6jZoLrHHfK4zfngvVM9G-eTHxRDA9FF0pa3boBazREjJEqx0uAZKGAsfVWEvjqv~ai0qYwePvSNaFd-afB6rzlK9J6W-tMa1pBzqmW~09fwfNHzIVf705TMN9OITrXaE4gThntNqJH5rz9RP4MATLfM6qekUyqm9VRYjnY2Gy-P1aJFfAaiCEOmpKTZ9Cmyf3V0a2hBI0Dlg__",
  },
  {
    id: uuidv4(),
    title: "ISpyAI",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000473713-ispy_rykpja_dtjayr.webp?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=MYUX5tRyajvHn8d7mCf0XScGkTXue3cp7gjQIdmdqT3qL4ZTDmgzASUGXiyVMi3FiqvZU3HO~B5r-3NN7MD~JxjBiVnZ7SX42I3mzK7IUi4Dxanxba8kCwENIyzO01zguCIAbOMo4gaL3lm-OZTrrrSJRtSR6wPBLg8TJFiAf4TJh0zD3J5M5lm74~N-pZT~-uKWjTkyz-QY-HenNmrUUOZ7zfyD0IjyMP7f5ENP3JiEm5i2hPfAQIGXwr9e5dg0ijd6WQYIbnW51pPcmsAIE79g~IENKLQAHe4eZTKRKXcsZP4Ze-pgvp8byeRxy4tH0qTIZMgJdl8NttB9sx3YyQ__",
    link: "https://ispyai.onrender.com",
    github: "https://github.com/Nyumat/ispyai",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000879625-ispyai_sssn9i.mp4?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=cg6LnmrtEIf9qK1iutc0u2-dPJNgkNFjicj9sC-7AAqzfgJAwQlBuyheILsCi9TcAwyVbsy~MDwU~JgiDBGMhz5dS52ogZTmtUjVJRouYCoKMaVR~5gbo96Fh3pHwSwVq8Y1df9PiEOUcoR-KfThS3mTuiV0Ka-WLeBr-vOBCP~P6hy4plI6O3gdwwevLdpwhMNOld8nAT-yWw0Fe4R6R8Q4V493Vozha8YG5BufYKVje2Br9B-UmOGYb0uABWJVR4Zc9MHaIpBH3oPuU7P3SjJsoRfu4U0aBEx-8nksZ0CB9iAm48rFLkA26AzN9eusq5-WOrNpJ1qsPQ0RR5QdEA__",
  },
  {
    id: uuidv4(),
    title: "Band Photo Gallery",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000514075-doesband_btqagl_glkkpp.webp?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=gQqv6cASrsHz1wy41orXxae7UbEbizynImqJumLC5AEZ~8OOVYrNgg4sJID~3nCPGNhUIkP7OVA21RuPt6ii7y1UiKHLgNivHsR2iEtQ0Lq8fcCOLaRf4KzNKUZefJn3zZrmam-4b5CYRPqNjZxy68TLJ2~dfQaLhs8owUwDA55WtDVInqE6kof1ulB91TWzl5pHsMZP-YO1Nj96bHl4Y~M5Ob9nAMEbNNXxnEzqyDgRY8JKuDCMprj83q-3knzy-MYAGd8~~MVjlpIaLKPf5eaEd2Po8LhRk1o-7WcPbuRFUo7M8Sx7Xv8x5PXAsFMdVnZsGhy6ego3DrmLUV8qVw__",
    link: "https://nyumat-does-band.vercel.app",
    github: "https://github.com/Nyumat/NyumatDoesBand",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000907264-doesband_wdxwbi.mov?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=x5D2cG4-~LBQNgIRuhWUmEm7Hpqr51fZyC9VVtjg4Gp1k1QLag4wQ2-lPWZv11MRqNgEj1DMxOBOM2MVDmrOC3ArLB~O8IB-4sGm2k0uyCS5vCTH2bmqWsJBs82F6ZypoHvZUkre9OH9w3O6lCh-jdmiLujxrHDJ~JENRy7s3ggTSJZJ3oDHjFA-8vPorNwdoxrTNm2Jgyq90VBIjfbE1L-8H7FUMjcjaTal2tdPmpN1nJA7-M0UZUQulo128PMhmwzkBNPN86VDQKw7NDf8qBSDCWN50cjfIpP~1QByA023U-wQBMgTlEhVcBLbKldjZKI4kI9jVwdvpQ60vC7X6Q__",
  },
  {
    id: uuidv4(),
    title: "Syllabot",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000541688-Screen_Shot_2023-12-25_at_7.17.56_PM_xztq2k.png?Expires=1866407355&Key-Pair-Id=K2QFIALPUONXG1&Signature=eX6RqJleZA5m8qYkb66KJvcONLkqNwxdtyCh3D4LW8BJTqPfCJQeYSDBhHz9IP0S4N~RgUlXmVBsIkZdoTMXPFvMy6HnRJ2IK2jHHUwkGydPw0xHhufx~xdE40YCjHtTPW4lsDaFhW2KSk7Qj1qxrzWjCACfWOnILU-AjP8XumCKGAzpQPkSl6ySCUrX6iRs8tt2KQKcG3Q9KYwqIoh9n1GBFPOE9Vg1rPGoAydUhTYWXBaWq~DM4Us8wSY1ySJ-DM8DsZeLxxZCB-4K8HrBWfC9cNBpKxjfXnuF6jptw4hGHAp2Sp79Mihd-pSHelJl-hbF5qFn724gtEBFRGAIPw__",
    link: "https://devpost.com/software/syllabot-1dxsil",
    github: "https://github.com/Nyumat/Syllabot",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001074998-syllabot_syifai.mp4?Expires=1711242931&Key-Pair-Id=K2QFIALPUONXG1&Signature=XaRhofJT1ksioAj1Y0mJJ5XT4RFjh9XICMQuCD5pFhwxUqxd7OaGEG~4JkUbidVnu0amT9iIZzwOCvkQSJdv7-B~eCIZKL7k0M4vjaHD1yvzUS~rXFnPRRTQfbsI~w8vfoHfmK2d3T-NFmSgcV~LH-s5CIKD5z~QfYrFJDkYrtlthkoFbwX5Fu5sWvQssHmapRq8Kdg71RPL-i5sUfrGrh~I~gbM2y3rvT9mRJFBjb92oxhiOEbm~LqgxrBbczimkdw8Hr8mQA6DDzDQmHvPlA8niXcO9NbFo4vzPIaUenHkG3ZtES~eLxsvYNzQY6tQ2UP8Hj03pSdgiF6ny46RdA__",
  },
];

export const heroImages: Image[] = [
  {
    id: uuidv4(),
    title: "Face Shot",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996287782-instc_2021-01-24_001259.178_smtf8c.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Jdb4f2B13LWNfaJPKjOmN2qCWRxCE1TQFoddVrMntaxCtBqzXCYGVfAxhVjiMoRAcJvPITJzG5hmqyt9LG3VyLc~~0ouen5boxMWiPyTCqGReluok95m~mZGdcR-5TAuCVocZs~Ju0EPtBztFqKJby5BJcZDaXesA3nN6pKXQeRjEk0SlxBw1thDMvHLijBk2qybjViSamw22yCcPviJxac2i8Q4pK0VvxYNHNIIwR3QFjzYJCKphS9chf2WhT3jsLNkyRWDx2gfuy5XniENy5R4k6LvBtx0OnYBmZY44I0aNm0n2JL5RfMcSLpG9vO2UQHZihqSdp0cEfe3Um9hEA__",
  },
  {
    id: uuidv4(),
    title: "Github PFP",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996450807-HUS_6126_khvzuu_ogcrep.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=s~9-WqUhUYWNiQejXSHxf8DgMycDjn4OtS4u8P8nYgd9c2oLpRxVadgh5Z~o9dtQAzmgervRaPepZOzpraZPokHNW0W8dCFHYotW6GYhoplyk-jpvpnvGJPh~nBGsVqu8pGXHnxMtVHwC~Pa62jaS~4qKhYgIJ-3roLN9Uw19WSBhaQxDJfQwZ~Wb6b0PpX7dQfHJEg-qXWiQtFHhaUaRiugfJbVMsykIiz7LdjvyUbvB~MlMvDYZh9MK~XNQeAETboan5bx1XQBVYYwQ6gKN0E2oYUM6YOeDtC8sYsr3CHHudE8m3qQIk1j15UKNJSycU4K6XM8F-5RYsIIhux0aA__",
  },
  {
    id: uuidv4(),
    title: "OSU VS USC 2023",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996554717-pg_hitukq_b3bsbi.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=PdhCTXpMLWxYEHFwgpLxU1bgfuPopzjsz4nCypbYF84CKoi4rt-dNEIWWy1~gHmJnytHhs-YxNNDXhVrJJm2D4iExMxVWSZGUgMJPp5ZqFtL0l3xliKbDpvhWQ8DTj2Vxwv87Nh1lMqDQstsXPJp3j3WnYTzyUbnlsD-ho9BRIYNcrl1DfNkvNnitoA1EIFVLWKuDHB-L5C5lHPFFGvp8oLoaSOd2pd5rfz1tg5~6regfqxW81l4YXiIow-HdX8WbvP3P1mxFdsQRd37GPPD-mtair13tCeksTfYCh~SKchnuC~BKIU~AzT-Ay8ruhPI6oke8tbqG0fWPP3gqeEtAw__",
  },
  {
    id: uuidv4(),
    title: "Face Shot Great America",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996619752-9C698097-9D23-443E-9492-381682DA884E_qql7ao.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=K1XqUCyP7M59sCKT-tmpLwElCUtgJJ-SHEYZAC1F~PumdQDXbnBJ1bJKhlMOfJj13vFumGeWdKe9sRuoWUMJf4xCf6ZaB1Sr1OBXcifusCAzqCi3a2XtDAkSkAhOOfRVl4eH7zrqmJHkg0~XMZGxraPmU1P86R4zTcdHtAoOfIdDJUHbvk6tpJ~GIBKRIw6J~1rrMrMWQr9Pt0xeozOS9ktPxjgwz-6lK6c4ePQAFqJI6ZZYd25GWr53YfamacHd2sXbbwHnDEF4W-jOqz0ZMzIXhUZZPG0ckzzfK-vSKOwN~bYJwG35FLCFiwP7ai71NAMVpMespJEVzLSJ-SfOhA__",
  },
  {
    id: uuidv4(),
    title: "Peace Sign Face Shot Band",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996690169-1C5A5701_as9nol_gi8f43.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=DlHk1Qqebx7uPusErLXOifZIeUBc9IN7C69t47Sfii0UurDdvJuNc-~PFjSPnmokFeoEH0dujXvxWqmmQAVLNtCh8cNGXjOff9A2s3prJVy0oyLqrlWqE-7AkdPmGtx4d~k1Lyuhq9sSbRsJj1IlNeQcb2v4HAeOXWTEdsWAi1ZlfWRPJCdgF7xkPSkW07JcT0tEppnHeJMWFVShDdn3KwcO0LaHuJ~fAjgnOjlZUuIoF5Kz4YMIgNxLeyVuzhZIsI1fjmLcoRfMclkVHtxiGoml~CsvMHlWgYxhQ-vRyyma1psyRl3hdi-ppC6cpW0k6te8zSjz1t1vXxWWcyidwQ__",
  },
  {
    id: uuidv4(),
    title: "Malibu 2022",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996749150-IMG_0019_lnnmuv.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=uzIhZy5VYfEjnC-BTWwWDzJfvTufiNUOA07eTqzNvtYJg3Va08iqkjPFkvHpFuoehRJFELl6GLYuPpgQQEN1NJGXYF2RM07-TLn-KRpnl2eS7TSHyUlg1RB0B6eHz1An0eN36io14i6rIaqQoENCvlpH9TsouUK-y~~u07f7L79U-hkszM5GuBAKZBL8JuvdsINDFx4l5YnJkEIBCga5jS3wEoAyIXwBVjcnwOOcXgfz4ttz~O9XsB99yUe-uekYHt8yem9U3kwJiim-SM9OgY9dyzFUubtkOcpcGXLZwSk8HzHmx81bN28RoCJ-z7U8cNyAReHxqvvP9yqGASCQlQ__",
  },
  {
    id: uuidv4(),
    title: "Band Candid Look Away",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996788010-DSC_2949_lnvhoa_bnidn1.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=d4OYuSFeFTsN~gVYGd8AI6oUMf0eERkkxdj-Q~Px-z547t7vvILO2bWlEp6jaA1bp5vXSZr26hPDZtlCtGU40jj0dC4t96-8dPYH5r9jRwOJ9QBNfDeg3DwbZeK85whkD6VyOZL1sAgpMj18IatmAx~nac-xeUzxC7oUrL9pAIr8o4u~BUQmxQhcFv7S~rXSqFkG9yKcjUSVIt6VZOms4vcP0FYbjKYkq5HNi-Kj-i~gdYEUIw4--t~K5jmaOL4mJr673v8rbGrloIJitIBeUK5aG6vHf-zDGeRU0nx1tDrlO8STWE0bgOtweLaFxrmHL3kFyySWBTJN2dL9~xgaGQ__",
  },
  {
    id: uuidv4(),
    title: "LA Bowl",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996868971-IMG_6032_uiwgsa_gxqmda.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Ua1~fvUku2DDu9SXz-RCr8yumJ28z9gP9k1qSRusBtAd1sVFzQoaVj5z4q9StvrVk-XLk6gKgBK8B3rixzROYbFwtwLek6NytX1JgPnmtdisJphFIL-R~Xv6LI3B1fg9RGhzmCE8v~-H3qFA7Luri1FP6X7zGUc2flkDNgS95lhGKWp38Vq-SuaOT9C2gdEkIatGVFewOGx2pSaUxaNEdhkkNWjzErnELwXe4aOrojAaCrgmf-1vqjeMjIJiC2tEfRJUMxL0VaocYg6fYvdSYfbKeGazOQdhNl0gLqL3sW-bE~D90H-lS4fQBwslPKHTEQFuW~5nYlwWBR9jXyebeQ__",
  },
];

export const bandPhotosMisc: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997016305-33_uw2548.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Jka4ub4cg-5ZnG~43WJp6H9u7-L5Tk7dLbmy6u6Vi-XNis5BUwC~XL04z1S1r6XZsqK87vnSbXPgzxVzDnoPWoL7Un-OINvkYtkZCfbPYHPldWwKVSsNdwQRR2NvArWM7DG~kyln4U~DQas2EvQJzaX~Q4DxB9VOCk4t4ZHnTLyP7xJXl1ejoxALOVQ0DG-sre6XpUZz1AhIbCdcUBS6AyBXYv89uCdX2iLyX1HpqWbvscvjWQK1--4UKg-Gj6Q4lbggRJoFLKuyFCQmbrehlNCYDvkd9TH2zibMsI7Z9YOCxaPBtHijQrl1YC6aKMdEPf2gM-t8ZAkcIVBVzH5uXA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997208064-wazzu_l2zduw_xc1jjy.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=bs48D0AQl27zaGBcpl6dGjNyCGexMaeFr3bFyuBXPYcbI-d41mtkFpdgPGis0Qt8tHfAahKIs62GSyJyuXx7hDgaQ4lHNmFB7J~PKjOiT0hKW2ubSBAWyHbAPpyrcrG2GeMorHLhqfr9eUohZH22wtqogl5eW~NJ5FLKkk8aLGouHd29ecQ-fv9pZAPbtRIuRVIGEdCebNXE3saAACgOKJK2ofxw6ystQ4iyBkh445wa9Etqp2vaidNcIdTYLjNP6E8GcoHk-cxP-VWB-tdKD3trtiPObtUAWxwStUIEbjcqAXZj9dDFeURu6d~TJyOiSRPA1LEiuKat5g-URy8vMA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996041838-IMG_5099_203_jg1lqu.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Xwwo5lxZWGCegohCXcgqNjjCyzZyEy36zaBGg7yEx7wCnpI9pCADTg7x5KRe5cnHvY759xea8N4thO30XpUtfMYyMkNlzEEiE4XgpHgpn-4ePeLfJfI9y6do5wyh8YMyDkBsrO4Uofd6LPIp8-95q4N9Id7CZ06KDVucD0M3c3r0HX2qltLMH10vCiKF2y~QG5D7~8JDiwM7RRk9z0GK~kuLMVjQvrEy~67AyppxlUE4IJfk4kWgXV7wmx1lbY9WLlelhy09qT6jM6rGdtJM3jmzcHoJZqYOwqqPCtsQyQ7t3qyX39q82CB~I3VMuf3t4d3kwjuTPXX3pYLXr8lNIw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997265976-IMG_5664_qu4b8f.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=BzmDAOCYrasmFJYOhqWsxk9U8c-m2EOXxYd9J~Sfr9c0yG5-ILYvSr698Y9Nf1U28EEIfK2CoojHa0vlk5iaCsGgoviHIPopdYN4H459dV84BIFl18Pd6Fqx79v26BibINVocXJ2VCztSM2I1MVnMfRRg5ddaTnnglvzCgdsFJhcNngDmZTIiJfU0-Jam9rpOgVDMF1d2NAtDzOEw-W0EHtfUfR9EM1-Cs4mBf-tVyH4Xsut1WnzNssXUvmy76GRshYSRq5ThJ~W1jludVbVhceZse8geiuQpVPvga3PO8ODj9LMdwipFKMzkto1zBmak3n2XTFV4x3-7O4HRUR~VA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997251911-38_drf4aq.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=nMFDgds4cK9ugqD1qXhCNoOo2n7cQWdCnLnAKTeSQSo~gfj921RxBnN1tG2tUHEqhIsT4mRDgKOcb8XgItQIXoh6PJcyP7XTV1QpZ4Ip0DCuf35AcTWSTbRiuPsH36vpUm3T8mgNnQzTMeMUCIpD1IK6qkJbOiF39y6oDm0QDz~L1mLoMHUmPbGSFYr51l~znyAc80YGCvzGYWiaS9a7lZLgosRP0mbIWgl89qXeSo9yqqt6K-8PXDNOmb8LEGQD4Hwp7bjYz0FViIFFC1EXAs4xs-Kh9nJE4wzmeHGqQf111pHzuaOKPR1LrKeLmKz7sZEL4xJQC1Izs2pXK7aGMw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997827361-some.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=IX9lF4McfqPHmnyruVk7K7KK08StfXaJlyulaZD1xfdJhD2LOaeHAt13Jj0Zqobgafn8Dup3pxhNNlxgvYK9C5iOQxNowrs4dAQ2RT6Yy9yXIw7oY7koO6AgeFs-2eHyV67uTKmSLcxIC6TDwI0XDmiGKM2Z74Y9FTvQXpknUTkfcVVHoJzV9-eSfvJct2-Pj9Up~ZRkBdgsOhrWe3WegbAS8Y1jkfLTQwNlmUU94MmFtqiXX5lhinF8pgz12XsGjdSnbl~T29NwL4iuU3ENWk5Zaujejwo~wP~nI-X7FU7aGAD40sZB2jnpIiR35-gBrWfCQSZ~3hF5o~xp5mO9eg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996055368-Moto-628-min_hreygc.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=L9CggkGoPIB32hG3~5sOJAC8-P1SFLlfKtCypVgsJDsEz1grc1DEC9PlUb91HP41BoDcsMaJAjLmPdOO8DSXEXPHN0T8V~fixMcpa5PwcyGBKRRSraw9LqU0b1Byl5vBQst9aGWtUWun9qFqatME8ZlrC6gJtl0jDbbRojmn3C3fsujRL3TPOhDyBIUfEn~sBZbECw3bthifNct2zb5ctO~oLQFwGeJdAo9nP1JT320O-qBNTx8Syd1AitLPqjATIjz78Ee45~JhP1FPE-HrDKC8OXXSJW-9tt5cU94Mo-xIeVgYiClbYeUVT7-zUvtsVKR2V4q6FXsEmWA74WNZ2w__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996788010-DSC_2949_lnvhoa_bnidn1.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=d4OYuSFeFTsN~gVYGd8AI6oUMf0eERkkxdj-Q~Px-z547t7vvILO2bWlEp6jaA1bp5vXSZr26hPDZtlCtGU40jj0dC4t96-8dPYH5r9jRwOJ9QBNfDeg3DwbZeK85whkD6VyOZL1sAgpMj18IatmAx~nac-xeUzxC7oUrL9pAIr8o4u~BUQmxQhcFv7S~rXSqFkG9yKcjUSVIt6VZOms4vcP0FYbjKYkq5HNi-Kj-i~gdYEUIw4--t~K5jmaOL4mJr673v8rbGrloIJitIBeUK5aG6vHf-zDGeRU0nx1tDrlO8STWE0bgOtweLaFxrmHL3kFyySWBTJN2dL9~xgaGQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705995992655-image0000001_qfskdw.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=W9NZ8cE5zVhLJZ00IwSFKXxS469gAe8iJJ5KfICTX6Lx3heB7bxaFiHpzSK2irOC3bCxN6gGf5tRodEvSgTi4gbqxRkK65blAvwEJzeG5jmt3dTx3JqQPWDpfKrLyNxVAcTWoOrtyyOK4~HBuIrCKqE7tq1kiPopMfVR~sXhJE0TkJCBNnJ4TNyFQApkECuMUXmFVrSyl4lNK~w5kHK8Wc0atSldc4nZjyq7eJXM24TdCBsRYndad7vjcxxszBFRA3cGgeIv9O49FEp3WafcYflAZG3kIDUaosxFdhuwL0Q43YpZzTHzg9GRpy7-KBtDyFj3XOUMlu9JN7c3HI0qwg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996004947-IMG_0667_t8jobf.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=iJrECI201N9sNTTrW3elYTHGRsSgHj53dURQmNnHvGztkVj1RlgY3iVatGRgmu9Q6QI3yo7v8LqMniXUy2zwP6rSuPOheUVaAol5W6miuNnh1gnfUbEfP--5uD44Owq1yfrsVoo4bHtxL4PIHK7WtqAkoHM1k2kVh9jvOVwUBKF6vnOOQJMNLQmXeHbfmXS0nvRrmtbS7PRGAU78WcDyHBWOwJfFGEW9shd9BCKUM3LJqZicSJSPvHxVNkJEaTq4dogpGDxoiKaVjmzvgwfpeyQjToS3jfLi0hZ7EQgVf~8TowObOLd6sqG6Mo-GcXDf0ARj68VD6s42uyuaR4dHrg__",
  },
  // { id: uuidv4(), image: "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/stack_prlq31_kwgbjw.webp" },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996031202-IMG_3038_q0cnji.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=nP~nzaJ6IyUflPpIn~fJbeR0vdWu~JRCF47DzHYRsyV7XAMJHyN~xCEsLdtm4PTjKDw9Iq1Z3-cWdz~P6ieN2yO06e-9gT4zKMvugKYT8LiNXJ2ccOs3NCPNPFXD3MrbuuOMlkUQC4UTsaXGcMZiW~m8aqIOtNL9yd0w5HtM3yz0ha4d68IJNKaWnwAZyLdUs4G~2APijmQCvx1wZFdroHNZrjl8OBlO9loFg8YPu2Qbb8Re~hZuc6bWrAc7tLCfxXfeysiL9fqqZpADDkefGM-bfXH2Y~yFGgfDy2sQ1xc9DCG1e9Ss-XLmmDBlxJU3mGG1u~4KJUdcQSvQX7eZgw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997294143-16_ik62ap.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=NW9n5XnwCmb2yWHPWwvbaYPueRNu3RPw-x5K3FIVwdz1Twr12F~90xtq0unsm~rWYI02hxkA3SykfHNu9sfyEsX6qh-2Jshe3AVVqcEHLTzbRX7zgBEcQYtnmhiddn29EiZvZCm1CyWjBTJ7Hg9gDqVCL4Vx5MbtT4nVwUrRQKEoYuiMSGGxEpKSG8se6H9PxIYzcYBmeYPvFdRmCAsrGN6uKhfztUk2tvN2Vr8jhgs~cZsTA2z8M2q7~qu22rQaEjcLXYguyQ-l7e9ZNI--qgCchNZrT3dM3iliyMp~0FL4Q3C-rjT~AMvchQcy4Vdszk~Ru8~pSSc6yWnE2sE5Wg__",
  },
];

export const csMemories: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998374032-IMG_2571_tigzqv.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=bvnvqyJs9kTCSXU~npFCidKaHe7OHxyjE9yqj3pAugPfOa9KQuPiwRHfI0MhwCGsMj6xUm6TE7rJ6LE7jhha9VhiwCfqmOWtnVgCd4GmtIZo-NNJI6U6PDn-qsne9Tx8VIPRgkrWrEgrkaSqDUuu5uPpMX7NT4uBiTe7xhjVQg1teT9Aa5kyxB~fmgnrreXULiSZPLKWrzjiZVci2o1dq7vkHJaR46sDGMqmhP~iIgFpEbrorBKJRozrM77WELMUYf27ImvDbxElvvSIHQUSuAD6MTG~b4fGE-2wRAPncClZDTmTaQoCTPgJkjzwLLIrcNvG-dCPpDjCUB8b~nlMdA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998395663-IMG_2590_qzvbab.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=OMOUQRK298adIu5AS0V397FtC7px2BkoRUWvmTTGbbUGsgsjBvL2BBOG0DISlqlbl6IR-TnwOWRKsvf~8vLNYKOp5c~s0hi3yhlv1lajkhZFtZHGmGPz5HdwB6ch3k1WYGS6AKlfM50I9LDz6MKi1vTcFWFfPTO0pj1vCKxF1MpjGbJZTFpDyxrteBmI8MUuR1SGDg8QlGCfTszauYuGAhryHglxrz2mMIwp8G8nSjNo-01Qj0vxvwozqaSeVAujt8Xt0PKRUfqm2i-1RUrEsuPsz6k2Y6ZiOxiJia2O3VDWwhD1Sg3iFrvFe3xTglbMavKUKeqajHNin1PiglkbPw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998412847-IMG_2839_mpbutv.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Nn3E7VhFgBV9Z24qpf6KgmR6aPqoxBB1mIqoDVOzGG-kJrCm7S7wavZZ-d3zFa1xQBkTgQFesfiYXhrielAjhEAwcH-hgXYt5~tEsdjU8FO0W6In1oWr9PZFt0toHTejzRpvCD3tBj9JqM-JgAU-zUcKUF6tO1yPxdmcwqSmWx8YBlQqrriD46r~EoxPv0RVBXH23pnRHf1TNCsdGBqGJ5BS19RM~Of~6WH-38my1L2O2tEOt46A3FNZQ6MHWUhc3c0xL75q8m3wDrdYbAT4BwIqEMiItg4QftbxXQDmDCOLI~9TlMZ2b7dWhTHDAATjPTWvFhVIZigkJoltxOj7EA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998426519-IMG_2779_evrkrl.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=dr9tgzKVhKnhKqGaH3fGRc53YiKaw2SY1K-LNFh4stBE-JzEVpsQOpU2TXlYIGDDg0t88IZvQcUmhRtV6lL855~sN9EAnevZ4MdW5s3Mw1mgAb~YMoncMsYlHLWnx6OhB3duW3YYqA3U-fefN17lx6O5OhhahXR4N5m-fc2CLJRVNUkfY8N-EfdUaqOnWn0oZqZk5zo2qZ6hYtwpUT2TtrWg0Jzhs5ALAA8VsNDfvJCUHt2uKznoMt1LMAc98BEfhW9Gfyu~RDvAF-3MEzfiynHFHz~z6xhvna2LkizPIcYOp~c~-J-qBeJzDT3lB~vw7ywa1Hh8N-pCrt56qhyU3Q__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998438089-IMG_2913_vwjo0m.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=SG9yqJgeIaO3AW8SNITvuu~evfSRn7i~sDo5TH2mTfRZZ0cfvol1EDMpoptAUs3LjPjEB0kDPnQP9ari-Lb-DYL1BtHodLBAAoObzqjtKbTo3yQQzjxjjE2XSqJhPynL2Dikqa3t-lBREn07Y5xUQsho8SqiFG7mSlOqPNmfNTOwqi0YJjMh1oOjD3pROzg7kPo0uC~YHjYOK8oj2gvOi4PVCD4pkKoMv46P5JuhZM7IsbqBN1ILjVKphOJM0qs9QDAt5C-od0fonWkJD9LCey5pAUav8-rlUxzqqcaNv67he41WsKmq2LKZJl9h~OtxD6kWF7VCVRF09fDj9jAFNg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998450547-IMG_0392_zafcxk.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=q8Z1QBK5YXJnB3XtERTjBTNN3aY3SPqWrNaygGcaAx3XTZdCbwndh8GCpktqqueRmtPHYXYZR3FWaxx9qlCFL-1jV2FW-gKAxffAONBOJokMQ62dr0k80FDJZg~Tl70dTjG4M58dwYvKn4FqIvmCehyyt4XgBZJ4mtf4BIcQMaNTWP5CBr~7HLbuvqbKOejxPNwBudhPsR~phtreNGPI4p7~Ed8DPZ9ONm5wcGKjOuwVVXYFxT8R9lm8GtpHgMvxyc1Sju-IMYNkYJGZJzpFEoSwpwjdt5FP9y6sKTm9RCYdLStku-WrYgUCS6nCF8zOqmVo1iSZPYfaIkmNykANyA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998465397-DSC07463_Original_fbejx1.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Mt-6GQaDmNGp5yy6jrgw~0tqdcq1RJOKMsx1YuK3tdQ-KQcjKHl01qaDDc358ZCjP-e24XuJKrE01eRqxC9C7GvA0Yb~roXqd9ds0oooWJNo7PeEu7iBAgzvOeJEDdESvmx0rZ9UqNXfzxTvFignL2HeUGmBvvetgHrHs7o6hsVNgJc4rdm103Erns~Bx4HOXzO81l43GZ~nDeioBiY9LGwIotcirfxntkagJpVMdDIzso-a86EX6~AnlPhlSPZkRbF7ncG424dnjd6EuZj20L526pFoegkVpoCZXjbO5W9Y9BwV~7sFgCjcF9gPslOGuUdeStn9JEwikNN84RYj0w__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998478766-IMG_3293_hyaenw.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=hzWTM0H2pUlX8j0x5FwOVoEkMSumW4oQr5c5SskRlYFZyK~p8-KQIyQGf~Wmd-C18I2KqPHJQTc0RehTfpSt4PtiCdHhFN-UCOPWuqoVxVerTQbdoae1H4Rnrw6K8nhn~nsMV1YK5mnkiq5wOJFn4jL1sNkeFNLvKEVc2Urm~32pf8tZRma3k~7XleFZnksCncHauXsABBTB3ITiY~mzDQvYqDxvVWqZrqd4vTWjpmKXK0vyHtlZ2dpB0TdS8S~rcm4k9QpvQxiFx59R0sI274xJ9y3UkKo6dEunrK1zm3vXoOhEjl-fpF5cjWSze0MYP4rleAR8eX-0SHOywNRkzw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998498807-FAF0E06B-AD69-4216-869C-1AEF9795E14B_hwp603.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=g5WYCx3Rs52carlDnkbuFvFwRNOX8vFfvFZk8Mo7UhEsbUoicSx3a7Wb02KXFeys1-I4wp5HboaFeeTYgN~e3kKyVAPaMGk-2c2QjsQf~bx-PTuJ9JyL45EKEkxObYBK6X0vIgydnFa4AljA9FmADuFbrC63ojBs7IkXjkqDSSpPJxKXGxm4wI~mq82y8f3Bf7V7lPVIl5OpStZ4aUmckdD5t9FB8RtRDlkx9Mx0pClBcLLF50b3TRCI72p2r3xecgaCrPf-4L~vB694EMfiKViyGo0dLTEVSenzeICvfqL3dt7V2zF6StvTE2wvZscS~pIoeLB~ltxNDBIARcNSHA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998513173-barcamp_qphuh3_i8i0n5.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=dNzVay0Ln3sozxIpKXQwRf7wm8mi08uGff1RsMEUyTwF6TMsRUbJlnkrSEM~e1dQ~BwrwaxbHgrDVp2EIYkd8bHTQTjzQ1rJgxBv4RIfUm~vHoMnA4M-wuRbk5qi021aVsEuAGQ9hqQQQSHx66kGcgChW2AFo0czJjFMqTyABRrrG~sAYwqcC01hNuE9fc1naK5OlOi83c~fVJF~YZwjG3aWCIJjo3jQyCmmTQ2aVBmEoiC~eiSWLtIWQCHjVdY6x3AcVTlH6R9em9EYc-yzvypTOv1YsvDL9IaJR77tyftuYjMWa~2fnaQiehdH3a6aIUMCTqjSA9axhvPQs9mNXQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998550461-IMG_2187_vkdgoa.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=gQpcpv05mwVHOCDVNkkwetiCQH6XecLwuv7Dd8SFjXuEMicu6OS9LQg4RorXrJvHSQY9CV~qDQS3fWekp~Qmzeka6PJz7-VX2ZE9YbFt8Y5JVbqep73JE6sVRAto~RvZY8AyNm4ihkImhnCR7uYRL4SWdwz4IvoHBIh6f3siZCfvB2LEUzi82PN28ZhEzkUAAg1jHhXrgX-br9vQ3f4KYZKGIGZHhiNrvyZmAVMcJwWbBVNoJCliIM-yUrfhfmEo2MDCZRu1DDYUs0LODKoY7LJVqFtIyAewwrH8gttFQZpFh6dAG9JfmTB3ez7AWKiPsy5Df2RCB7wlgT4CEchW1g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998565804-IMG_3290_h4njhz.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=SclU9dCHFOJgQYh5yozKK5pGcYu5~Re7w4KSxc7RxG2by-rWDHt1KzUiCExRvruC3Mq7Fr7wHtUBpmMDVO7XJ8UznIFSF04kUd9PJjek4XPPjh1gEGoVt~UfuVEKt8w7xlZSh-6gRFoIxXIkDMwTjTqACS4FG1TArPa4YTh43a4U80RUtfrFaihXph8FDjdjsG~cFVtLL2Zpfn8zwkUhXJ32OAaR~54p4o5BAEUHZOVLP5hJg7e2zBKwLYNwVatqipmfHSmb-d5pLOYmOEmbKGr1B-iIwNcHVCQyGtOBTHDy8uT3B5QY~c0fvNZNafDZAUWo4HWmKW0P0RWpg4d8uQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998586829-7_jgparz_ackqdq.webp?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=Pzo8pp2MmBlTrckJr10HOVxKYTonqqmcP-ZF4mLnSbBltTYOgEyYCN0VrxSQoTKeqaA-9BcrK7gW0Dwa0IMFMeQ3Oryyg9w58MbJaS5sGAocglYouX~D2YA2XcSA5V0HCcOOi04hBHExrhjzKMtbsnKE8VIY76S3XhWU76a96En7wrpq6LRcyFRIyEvkUWxiIYFS-TvHw8nPGhD~snlIUe-aU3X3FS-kX7Zp-OqpjmWow1iP5fb~jT5ZKJrC8dkZsqwSVe7XFVvKKuKvuQ8-UcNq4-sbgLv6ecmT~3uvrodS6IAddS3DCy1Uoo-ThRCY-cpm3dcDih9uM4mKbHChcQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998604155-Screen_Shot_2023-12-25_at_11.33.32_PM_aflwig.png?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=v5kbXVzzew-Mu0b4s30A9D8HvfP7koA~EdH-KX-4GIVDDuBrFn85Vp6DtB7vC7LPlOatC2eQU0Uo6rKIW-lLN0zD4gM0alJgEVFbcDzxewKrQyBMMZSTzwEx39d6U9E8OOXCjp~ypL05JavXnYHexkR8T~ABIpsJ-cVcdTjJoXMzS2O2T5r3BQ68TVBHtEbHRBYsKJWlfDMeswBPSo9ys33r37BCM3CqWsOHMKdXvDm58ZELkNOS9-UNLzfVgS7usMIDwgKtZYzNkHUdAobeYiGoqlxOImWfwGkFhRLHAPXIl4Hja9hcg4VU5d6vAtYkmPQkf36j21HqB18B~2Fbbw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998626517-Screen_Shot_2023-12-25_at_11.42.25_PM_ipv0xo.png?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=pZIq8SQ2E6kyKTB8RHCKTp6k-~wHsn08~6GMmuQku1lUR4UeG8eDtKtMLyWwjBFX4cup5BxUks~biOU-Ez0FipyN7oBiw917q-BH3CTKm10mI31bSJuA8RTueYs~NoUGmdIwELfsmxr15bSSjN5cYIgnho95fiFSXQrA-CXS~X4vbENT-pjQox9lOPw4oz1e8DcA5mWkGogapT-HUC0Bxog7ZWvygGCVNldfmN3Rrum3o3C21w~-cVO0lXfeLyfqo2LWQJl8VWaD-5DoOjj0V~w-4qvXHa0lPEMYiB1GkWy~J78~3GjDselRePbNY4lmMzRuc9nxAzEz~TNR1KS7MQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://cdn.discordapp.com/attachments/1163717135596539914/1189112828041375774/IMG_3895.png?ex=65e6ce9e&is=65d4599e&hm=4937a32b4063208fdae280bfc826b2b1d6b482badc8490dc7d5afcfe70fab746&",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998640081-team-picture-af4e7deb_awa2kw.jpg?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=yQj61NyoCGDDnAH-QujBdKXigic2Tm6W68WdrwjGptNeSRxC8Su1cTi9s4kzNMy1wm6~GBLPk26gkj6FYsbyZIVUWSP0d1iTrjiYNu6xLAvL3EbSD1nfBXuX7reZjtydlydOdJTope4JP7y0SSnr7wuUnuukBqMHRMLdW~EBbk3Tq07zjT5SmnNgcK1KReFsEgG1R8pnI0arIz6Z8gpAsQ-pp6OyGMYPzBm6AOZSovgamEM7i244MLwofxBHh1w7Vw2sUz3fOxYrIeOLlVyNogP1DGuehCF0l8zyLlKKJxwVoda0qCEYQleCL0MUJmGXdZZmNVjrIbCjpCjO7w9~gA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705999140873-IMG_3170.JPG?Expires=1866438931&Key-Pair-Id=K2QFIALPUONXG1&Signature=A-Ttf0WOEz2q-EuShCAuOwGZNKuaxsMAXQ~LzjAeT83~Ys51QbB3pdGHrgZAJEm~3HYXvcENcSZf~e0jApCePjU3W1PDBKhMaGieXx-jFMN9zYI-eY0TnehRTbmi1IcsmbHb61nCJnVbEEVFnjJTkyZw2-xGGc9zbQwTHG7qTkPmJlISgW0baOwjCSODpHFfudIfWH~803dtBqqOygjl8LAyuDVgIn6TTgOlQpGWilwG9ib1AA6HU9tnKfK1B8VmcM8NLygN8G63ss89ajRUIn~VIBoKwbGFA2ZP~O7co2Qozvik3NOMG~17yDWwzhFPRDMTsmQRnvRduLiSUMaDOg__",
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

// const fetchBandPhotos = async () => {
//   const newPhotos = bandPhotosMisc.forEach(async (photo) => {
//     const response = await fetch(photo.image);
//     if (response.status === 403) {
//       const regex = /(?<=image-)(.*?)(?=-)/;
//       const match = photo.image.match(regex);
//       console.log(match ? match[0] : "no match");
//       const newImage = mediaData.images.find((image) =>
//         image.imageUrl.includes(match ? match[0] : "")
//       );

//       if (newImage) {
//         const newResponse = await fetch(newImage.imageUrl);
//         console.log(newResponse.status);
//         if (newResponse.status === 200) {
//           console.log("found");
//           photo.image = newImage.imageUrl;
//         }
//       }
//     }
//   });
//   console.log(newPhotos, "newPhotos2");
// };

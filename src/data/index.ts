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
      "https://d3uraa353l50l1.cloudfront.net/image-1705999424668-Screen_Shot_2023-12-08_at_11.06.02_PM_d9zj0j.png?Expires=1708591844&Key-Pair-Id=K2QFIALPUONXG1&Signature=SMfEK6BtbC4xMkvbWLPPtm~MZz0oSW3YcdwNc6IhVmdmHgirgdwWn8fiquG3y38S7~eYB9ewXlGW9P~0tHkpiQmRveNSgS202vl6rhw5rcXZiNiXoN076dKimB4F1a4Anebg1XUuk7jYGCerZ7Hld4-IhPCjwwu3kLFZiJiM01mihfmktWNvB9pKeMJQ4QGgo7SUzD60TZhayJD~9mKUbEQ-BcsuZJv8xfy0wWU-xjuBfoN5SCfq5qqhEzPgCAHgTFVgq7KuKLVJs-YIGW9wyqDOpFLH0mwscKgIZwylnj7w~2OumNXXNF2OVmBDUVH6KJB8xcfk~Zes1aK9LUQYLg__",
    link: "https://beavsai.onrender.com/",
    github: "https://github.com/OSU-App-Club/beavsAI-frontend",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1705999762920-beavsai_vj6hyw.mov?Expires=1708591844&Key-Pair-Id=K2QFIALPUONXG1&Signature=kYfdCx16Xzl24sHW-WZmkfSrthAoLB9Ceb6OaNkx38V0tVx6I4FGPcgsh9QfZuA70JCTJcaSg884Q3rwXgH21QAOmgtw-rpUjzUA42~QLvudKBOBYrWbo9741H-UnsOtVA~WMu-vQ4IKUB7eakLEBjKhJZth-7x7HUenoHdm7bT23in9bTHfLe73tEOhoDUpvX5PSpQn1JTDmViSpTAa0WknxIfy1tYYTRlKm3FstCcHgs0O7w0kBUXtSN2irS8O-MOKkErHXHclgTzm7bRDJwSSyA6x9yzIPo5TFmnuDa0~seUUg0TnUhvnmCAIe4xmpqW3h5JQAW7A1RdnsNrluQ__",
  },
  {
    id: uuidv4(),
    title: "NyumatFlix",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705999932504-nyumatflix_k6gko8_niyilq.webp?Expires=1708592238&Key-Pair-Id=K2QFIALPUONXG1&Signature=V6JYeH7Fk6waeajlgC41AhwlRlTIERMzWOKkt3fWdYi1an00Nj4tpSYqeQ7DkosouDU9npzYnihFfFXlSL-1LZMuL4JzqSakFL~-3K1Fo~RlXsFz3Ij9QlFfo77scZntEGsdONQ6MhARwPljSnHOX8A0ulLMW4qmAwMAHDrD5GtnuLZYM~BGG1MsqrB~TBoDX1MYMcE~l8HUeAuoRk4d7jw1Fp~oLAwjkFRNF-OdBmR9lrd3G49Z~0d5FlzU6Oj5YviBl4kNjHou-gjFE2-D7YeEEnMqxyTI2dRBdA7rA~7dQZR2qhwmRjpDql67t3bwoEJoWhpKbJDocNhMPDgSFw__",
    link: "https://nyumatflix.com",
    github: "https://github.com/Nyumat/NyumatFlix",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1705999969736-nyumatflix_k1n0iw.mov?Expires=1708592238&Key-Pair-Id=K2QFIALPUONXG1&Signature=pD6MhxBz-WYLnBAsP2waDOoRTtEAzTiIFO1DmbLJHcXaMJSxdKYO4Ua8ZOkix1pgeRcnBSrpyCDdAIfDXge4-o3AMK3i1f0Nv~G-ZEpkKdjkP2qvfsgA4w1dv6Rdj3P5PxS~jeDWpDnK6LM-wts9p7Lbf4Pz1hPlejoHQF~EkGFjPy9Yid4nRUMrclGPtX~49KE3qlM5B~pfBCtKL~PcPT50Wty5uur5BaW1Qds1NG-LXjFiEXrTd~-qYnxQmQ00hbJct9e5tFCNecpl7Pj2RxeDyeDXfVahsUe4Smx-01LPd1TLwp1lyzI7P7o8piIXkD6eRGAHPSZq5wf2nymhbQ__",
  },
  {
    id: uuidv4(),
    title: "TalkToBeavs",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705999996354-Screen_Shot_2024-01-02_at_6.38.57_AM_iijp2p.png?Expires=1708592238&Key-Pair-Id=K2QFIALPUONXG1&Signature=lgntFURZxQFKUAi56YTQqGOEOQ9Rwz~jZyhzb-12g5KIjRS8GeCr-tv821~Lzr3IG-tPxGWpQj4z0gAIvQRSamQx~PVlBUBcjo3jwQXZN7KZ3G~4PIYXryug3GGZ0y1SIX-SQGtKSAaZYbrz7qvWcmGoGjEq-qZO4kZkFEIL9osBsXu4ZmxOr2O938oPIohV1p2jxblVpBsx-xEtdf~4kNSYC9dlIUEYuxYEHRe7JdlhyC~I7Gepz5tTXvuVXLN-sWZalXwwJD8yJTvE4ClPX7YIPGydlF1FfGvLm9fre7WP4qsOY~q8rtsncZ2rGRfbtYdzRy7ByEpmPXU1uZEC2g__",
    link: "https://talktobeavs.onrender.com",
    github: "https://github.com/Nyumat/TalkToBeavs",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000010287-talktobeavs_xtpouv.mov?Expires=1708592238&Key-Pair-Id=K2QFIALPUONXG1&Signature=bo0MhKC41XZpyJQGzipHcZVPYlnB5ao13U65c5OypqIdmO4tt-yLI5l-jtjhAqeF7QtCNhmFE988B-Y3hQFT4oclOw-6Zxbji~oPUrkwIHYWhfdcDsz-gAztQMK8qZeW45mbiPba0hbcoyCXBKGmU6BXNdK4e51iw3mGnWur46uxkF5cdFdjBbUj6MeokYxIbfCXRPyuoRn-NC53zif2Yj3Y3vEK~6hK-eemfNShVt2z4Uqzl7aiUGE64DjUPGT2cNMZz6el-4mJuj7-GJQhkwLrUt3c~PBH7ADzwvJiy~6x1~SpgJ8-hKBjLCNdcPmLa13~yGIFynNjHCVCZ6AHXg__",
  },
  {
    id: uuidv4(),
    title: "OSU's ACM Website",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706001733500-acm_site.png?Expires=1708593749&Key-Pair-Id=K2QFIALPUONXG1&Signature=IsJa-WBYBKY4l61ujWcb8OAoPNxuKhIkKjdst108625Yp00~-c~-cfFZlb9G4dwX57L0iugW1vI58nqD-ZVpGZkc~AbknUwPFP63ZTYHbKq5Ivpkq9xaE1Z4H7d-wJbeojZtGSOTcpT~1geIx72lHXR~iNb~K-aZL052k73xGfNtZPBk4iTmO2Plp-Q-OQl-lgqv~E0Qv4UkSd8TfbOV~TPZXNq0AuJ4y2y-CWfQm2AZRPMYEy54fM25km9Wen4Lapw~svcyCM08ISJGKuK8ikEKeG0uFEDmpRy3HqSp~X4NNIGWgz1fyJlxMqZiS8ybb-j1jJDgp3-CK9XDyH63Dg__",
    link: "https://acm.oregonstate.edu/",
    github: "https://github.com/osu-acm/website",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001739745-acm_njg7ja.mov?Expires=1708593792&Key-Pair-Id=K2QFIALPUONXG1&Signature=vJbCdVJJvNw9UAY2p~3vZJybNwgGgwH6yKNAxbM6OOZEjYjOx50OHQL1o065C~lfGwTDMFzGN~a1Rblp629KF8En3~UJfceV8FRpoan-Lyv~BNSJT0FJik69RfndafoSVOy2IQ6yo-LIO6IpQd2l~RRpX7wOk0UEgUGwO-DmwOjRqJnS~NtdXrBWDSt6Ywt-mPXUquvYuH4AqHtt9rqG-fCn1tB2QAXopHl8WBawj63HQk8VR3QuO3Id2wV36mTV5afJzBg29EryHshXcrIOFEhTf1hp8oek~k3yCknFynBZNhY8fV-PC6tOc6QEX0e5Bf6AbhBm88oo6~Nu6qss0g__",
  },
  {
    id: uuidv4(),
    title: "NextJudge",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000438901-Screen_Shot_2023-12-23_at_5.33.27_PM_wd94hg.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=BU6hi2omY0K5pLQ3iCeWQScOfBCgrFqWe8iKmlhn3oQ~Ran00KYCWdKCr6LzUhH~KExbSUBPZkbJWAagiiAO-~0WFUHVBE5No1MTt2FriIEGOoIkG0QIUM1DZnBJQKbRnLpnfotvhTn9GQh1yyIExg83p3KjvOisDmTxg7lsqdBL~SKyLy0ObsouNTxL3d02I~D~v9h1z2S5yUCjXLb85eUiXdXkryL3qfT~yRV8GHuIW2A4pfK~pf~3bULEJv-UtJj9uuYWApxE-jJOZxGucvK~mT2RM3K0Csv34zdCUHZp~HJrtT7Mc10w2Ao1rHLVt~QS7ZREsvp4VrwgnSnj6Q__",
    link: "https://github.com/NextJudge",
    github: "https://github.com/NextJudge/NextJudge",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000392024-nextjudge_simocs.mov?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=c8ryNfIbr1AZhoBThtEb2mGVwv1-YKAW8RZbsarDDrero6vsinAstNvYnzpKziR3L3lArVq~8~Hcb5lMFx2eHFqSooBzeZ0HC1jW~8BaMj0aPwA1Fsgo-guMnVmHvKzFk90y-tOuGvzAyvS0wpvcpUf9QYXn8SGgKRpUUI6JAECkRaN2G1fpB4ZwowcLm494cCauRFzA5pIoQcoCOB-KbByrnwaVWGyFft3yNX6jaLMAJD7sHPoY8HbLc1RcgtHDIRKzOIrMaIcUKEb0PFybziA4FMjSDevpKi2sVfBac~xRY~dxKeHaCCvm4IhTd~6e3Ld1f12ImKDXUjw~CIUmhg__",
  },
  {
    id: uuidv4(),
    title: "Nexus",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000461391-nexus_hlfvdb.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=eOCSYHctOmcik8FvuObYqo9qCzzGwa74ixRtPt37TGG69DurnyXMkzs4K3rZvf99Po-i54gTM6OFuXnzJFVKI-xtuVNBoDgV9f-YF8VvCYlDp4X6WFuHbHE5D9PsdnZVdW-fiOeerjJdX68ZvzXjnTbKXzenYaNWUAKUg2AsanvhA45DFofnyGD9mrpzt40oYH0y4Qb6dcCsO0OtAiZo2TA1zBLDnukDiKxa0-d~Iq5hCv6uH0Gwgc4NOxtJJiDVHRBYuWb7T93znKAlWbuun3vM6pGB0BhkIPdWjerALI-xAOxYPN-kFX0eszfDcdAjsRh1jWwzx-eC02n0BHNvmQ__",
    link: "https://devpost.com/software/nexus-27zakp",
    github: "https://github.com/Sankalpsp21/Nexus",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000836598-nexus_lauyqy.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=ycCscFI~jsA2wKjoyskrwP7-MVwEmlEGNFbcmCFPuieiQK6aCWalaz2KEzoZkjwn5tbwVbIClBoIGhQAQ4qoMwD~hk4Kvm3CySoAeyhADtlioqgcZz~4m5~kOsoKZBYc7LmwiCTiGR~sXW-iiV0kHBV9Hb77J4r-DtIUY7OVm3KZ6zepdK1GSg4j9QQeiVINjHwOkcF20uqBfQkD7iA2N9FnOeVIjnAZ2jbyiCwPp4LWPZldfV98ZY2DZSsg65kVS5XVOSUcaRdse~vAZMtTOVw2wYaFEEMICZsFYMOA8~qdNxDIdVCSLY9wANCq3u9b4ysKXyuB7fbm-4ZuAOCfKA__https://d3uraa353l50l1.cloudfront.net/video-1706000836598-nexus_lauyqy.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=ycCscFI~jsA2wKjoyskrwP7-MVwEmlEGNFbcmCFPuieiQK6aCWalaz2KEzoZkjwn5tbwVbIClBoIGhQAQ4qoMwD~hk4Kvm3CySoAeyhADtlioqgcZz~4m5~kOsoKZBYc7LmwiCTiGR~sXW-iiV0kHBV9Hb77J4r-DtIUY7OVm3KZ6zepdK1GSg4j9QQeiVINjHwOkcF20uqBfQkD7iA2N9FnOeVIjnAZ2jbyiCwPp4LWPZldfV98ZY2DZSsg65kVS5XVOSUcaRdse~vAZMtTOVw2wYaFEEMICZsFYMOA8~qdNxDIdVCSLY9wANCq3u9b4ysKXyuB7fbm-4ZuAOCfKA__",
  },
  {
    id: uuidv4(),
    title: "ISpyAI",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000473713-ispy_rykpja_dtjayr.webp?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=MtH--xO7MC3iNrQVgXRVURoyNB3ypIPg3hQdPFGpXjHiYj48Ob-lXYmgm03tdM6zCF5Ft6HQ4IpSD9SAekhLrY1nC-Pc~OD9Mnyxp~xV3YCxpyElMSPltPP-lmxi6EJox9VNZbd6iBIUg85HQOKVgQjlG12BmCNeKYgdooU7bF8b~UgzqUszU5ZOzbbjcK6170CSAnPa5kXjx8IKBtnArX~yqBNFFEUiBSMuyKmjGbYoEhnLVeyeUcVDislvSh32dMbikh534kxzhDikZLNKIXh4TMgfyx0VE5yR1cyQZ7ewPwjFm9BXOOvdVEBkarkCchaBxh2yL8DkymSlNannIw__",
    link: "https://ispyai.onrender.com",
    github: "https://github.com/Nyumat/ispyai",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000879625-ispyai_sssn9i.mp4?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=BkAbngFUh3cWTZIFGcNMTbxm1TOuzRO~T1QDiH0khnn5FY9TcWimUuI6Ql54P2RSgyVRPr4TrGNyQWHUmqzBrkrYbfMSsakYQBJtwuMl1FTibsQK-cY7I49wY7eaNSYHojdXoU5m5ER60pX8nnTi62nOYQuB-t0yoWQJxUvdTMJwCmZ2n2CygVmWS5UtCeTuLh64b7H76puLOENYJEaHN4dX5j-zSD4qR6YQG8bXhjE-OR7FMWlXWPRxPGX~CMHzZD5A77MWCe5RtHDof~F3XtBQddBkTYzfWqGWCo9s56MlwFYjy1mcvzMZouAwtRdrFozxImlP2XKB0E64GeP0hw__",
  },
  {
    id: uuidv4(),
    title: "MockBuddy",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000489392-Screen_Shot_2023-11-20_at_6.33.21_PM_qk0vsc.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=leCDdsVl0VEBXHyAFD39k0s8WykeAqLFkPSOSCpIGQ9LW19k98qSYcxJQE30y4RIZtcHAD6amp6wwtascTW1v~tjzaUjJm-7zhvc7WgfjX8vgpZZiZPdeDgzYYd6rWJSeSUtr2yEKEQVEC1PtWXsskVkbYv-6OTmKzd2QpVcWHVLq81BRSGvXZPGgHITWOZioBepOVkoyutDRcfwSIhnNKevAIoTmBJ0EchYftfupFztev0x5JX8uLM-2AyvyLYffyv-kN2uKiFqZOwH2lSipoTjxhXRgjdTB9K3gbHMGg85J1BjPTlfBCK0-9jibo0S4tMo6zTsoUL82W4mi4nPhA__",
    link: "https://devpost.com/software/mockbuddy",
    github: "https://github.com/Nyumat/Mockbuddy",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000893836-mockbuddy_qj2pm9.mp4?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=a3bcA3LXbrBIUj-4eejK6nLcNON-P7D8-9pJU1HymzeUJgQd7MH~03krOJWRL2ahlWoebPzRYZqEluBnBrIoHrybajofcjx2kKEbCQlGf1~gsXI8DBTHIMEBuhPrgbOk2~DN4PGCJxgf4e0ncD7~2eI0bkKNLUukPRoD5XafheEPoXiYClOh8PWVZSBln2YkiYLoDksU3~MeitFDy3Khg1kK6HqK9pM7nHXPryLZgT~rKYscOObnlS8gzhWQRM9hxlVvkAEYayqJTa6VZYZmz5DV0fPvetKUVhUNx-y-4rMjogbvOEvcmAq-VewxWSaHCFKPhUZJkR4go8rCl9eTwg__",
  },
  {
    id: uuidv4(),
    title: "Band Photo Gallery",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000514075-doesband_btqagl_glkkpp.webp?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=uLddpA1IF0-F4jUOERdbyVs85oRnSJXRoNTEeaGVdkya1tXHgGVIHQ6nxzozsPl4DpTdh35KSnXie9~qUSCVkw1Qv5MClQike~Rl~aM8xk-2PCk-Aw6IKkUjQOmJkjvMjDyTMyyr4p1Mix7w7Tv5H7UiXmxQSkckF-9CHuFElZXRzKHBV9BG0rgnOHcwaIXeImHaAZNFYOWUzQsCU-v-7V~QKqGZBj0lMdNtL2JVFm6W07bMyny5FP3l3SoKepEN9VMI3V8zNb5HBonIFO~EqfxMObJsr7qKVoND6JdAiZWemc9vlPi70JKPiU4FucjqdFSi6KqRQWaMmmycGR39LA__",
    link: "https://nyumat-does-band.vercel.app",
    github: "https://github.com/Nyumat/NyumatDoesBand",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000907264-doesband_wdxwbi.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=uZSTRKn1fH-2XyX0BuzSl6oGDSOaIIT~Ub9A-VloDFNbECiB1oDNt6096bAiA7SaVz~~1-cB3o6L4stb5eFQCi27H1LJuT6PWPoP-iuBNjsq6kyBW0N1iyxZjX4WTAgPQHw2a8kgmJCDZZlfdy-2XedZv-EP6jwIZu~NkM4-POHkvbg3wJi-Aye7ddtgGyVFr7Ew3uYSYUE7Li6XrzBJLB1B0srz~VMc~RlOWADbPHjWYQJp~ZqtqFscm5Xc6O2lDUCtAS9gQO~5~gnZPAnr1KLJXcQhuXzoImuF7hHThosLtU26e3vCPOHHLDIQ~c~FsM9t4bo0o8ZWr8JCtfqFAA__",
  },

  {
    id: uuidv4(),
    title: "CSS-in-JS PokeDex",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000526328-Screen_Shot_2024-01-02_at_8.36.11_AM_qsp8x8.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=G-l7ejIx~67dI3-yKi~~MEy2lsUgFnhFpuL6urh7vQVQnZQah65aMyqOlgnLX8SaJK2cTzJExDMvNloRXVvAOA63SKsjCQWxJZj1ST4mH20P6LgvzMqmoMu-NhJTtZNiqKmvBHyNKlI9o1BHj1VSXGvSpl90A1MzMOg8YMV850hBP79VU0nqcwFMtykSzXqZGmrM4K8SOt-hBOf3D3kk90dxS9zR~a88b40PTByrqF8j~~86Qn389M~EqmhiNZN6incnkto1lC5jvz8oesRxhLORYxq~Tu7jX7t6Q8yJg2qXOT6c1Aglhcel3LBaNPKyz1~nhpI5~Z1n62J3Hklfew__",
    link: "https://github.com/Nyumat/NyumatPokedex",
    github: "https://github.com/Nyumat/NyumatPokedex",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706000952940-pokedex_clfse3.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=vV2xnpjPO5uJkE0~40D2uNyF5dMdmCnLxkfVbeujp6u~XvEKWcctHGgIHjolN9e4xwoD8u9WE-7B0gX9p3j0JSuiR4~7WX6G8wpp~WKOs4KHYv57OwhT74d6wRGOx3k5zzfKEGuBfx7MdNw7WJMvAeU08jsIcD6qG1J23i0eOh513nX-EfYipIkuDwabVBToEox8rgKtDJMrstJ48XUt3KuxwniO-qYXtpVF-DhtHKE9tXhcIYx2v20on~7IpfZsL8TqHwVQPcXFlYidTExQRp~DlSmx3Tu5hv3ZNFl-XoUBe0b5FIJQa469~S5S7ACH~WXCjW20Q~vn6PmHytpOng__",
  },
  {
    id: uuidv4(),
    title: "Syllabot",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000541688-Screen_Shot_2023-12-25_at_7.17.56_PM_xztq2k.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=QpLEI9TFmUgWoqCUj6gGC5QFU1limO6Cop1GP0lQccuwwKOjYEvL5fYh69HMuuRED1p0JQRfRqCcmge2v65BNDFigWeDealJkFOPqF1saKKysydD7b7~HGPjGkKhVG0rTcImDzQgGBkB4T7Ais~RiBrdhl-uf7GQeohAffskZO6zOBgRZgZrlfKLpDiIOwfEQ5WhK65htwim8zQmbI7BfYZmfBkcIfRLpIRfMg6P0AjlkzapYQ3VWHntTggf3W05N49F5ciygnhohTHyhQ1yvqIVQjwEYDcCzv-GgbrKEXOFkI3PN9ilCw7mj6KqShV4efc1CDJ9YSK9~3xdx9p1Yg__",
    link: "https://devpost.com/software/syllabot-1dxsil",
    github: "https://github.com/Nyumat/Syllabot",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001074998-syllabot_syifai.mp4?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=KwN3GSZA5H0Z4UK-VlntIy~p43Dw~CiJbUUrtpB0KD5msB8sxtBkDmzOnxlIt0j2dB9ksxQ9tdBtcFpKDk2D34QXyc8oRIiJOeP6lK-MjxJf25FZOlUZkzIRZvcaFC1uKy56AF2F8jtCj7MCy6X4jzrgUHSDKjPmre0qzfbxdb3OYi0Zm3GKtk-~vCAdZCfk~NC6iaETGUeJYlweb3hwouPpJL7m7nf1pYudJh3N3zhPVEQE4kbVZN3zQvpwbqTFWIs26vpUAXC4ahhb5pTR89qmhThzYRLdIBhsNRS5HPt0QomMUjSkPy1T7MV6vHDWOI8HGft5GcWEv~ncqzg-Mg__",
  },
  {
    id: uuidv4(),
    title: "Open Source Diversity",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1706000557345-Screen_Shot_2023-12-25_at_7.51.27_PM_adjhyv.png?Expires=1708592617&Key-Pair-Id=K2QFIALPUONXG1&Signature=DWVnW0Bkx-vxv4uZwgXNKUBuXCuaDLQwYBHaF0L3naqgUb1r3sn9ffK1IDiHALKQlaCPAylTuzpaEZ~D2kREV9pbEm18a5BFojf3Vo2k6WCDSKjR~fx4BLSWmS7-vtO2dwV8Ee3B1BUFVK8ee49DO1PfiynX4BZwDCXllzT4upfHtWWoM~IAkJ0BKWVvx-b0R85Lb2vHYu71HfbVUFO69hqd9mdAvA3IFjaTMEyhcu0EnY8KmvTJCRsceuqhYzd15NZMuLKdxk2UguW8hd3QyYc-Mrat86YqDyL5IZ1uzmUqpgECd~VkIn2WNZGWIszJSf0C5TVRpRklwYTIw3Y0XQ__",
    link: "https://opensourcediversity.org/",
    github: "https://github.com/opensourcediversity/opensourcediversity.org",
    demoVideo:
      "https://d3uraa353l50l1.cloudfront.net/video-1706001090973-opensourcediversity_qm1gpj.mov?Expires=1708593170&Key-Pair-Id=K2QFIALPUONXG1&Signature=BQFJotJXhiiMcDzHhDrxf0PHr7FG38mwiYxDqm~BJWtzQovCJROg4IKmUAtbXGyr2F9zruJTdrTWxgvni2WBeR-JS-u~v9MPKX~X3~V2QJBXY99HJeqlqwvaaqOnfznIuC3BSxIIKoOG2-hs0pbgcsUoJ0nWZX6mqIxnIpOKTGmCig5utdU8lmfqJ8DNLdUX31XU9E0PrSHcjrsIVvXRnKueXNe0bbsY97xgBfeMJPPMCe1ez-a155Cf5q~84DySTIRV4njY0zBNNFAWj6G7jLuV5k6JaTm-AprXvZ21CFTxnJIkEc735O5jIACGQh20AHyASo2j-p5SgYe0JZAaiQ__",
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
];

export const heroImages: Image[] = [
  {
    id: uuidv4(),
    title: "Face Shot",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996287782-instc_2021-01-24_001259.178_smtf8c.webp?Expires=1708588295&Key-Pair-Id=K2QFIALPUONXG1&Signature=ts~~rt7TitvAnXsAx7TottUWZohOyoqVgj56s~nNga93H7MTpi1Zyn~76Bg8aXh51Ja1kppvHeiU9MiL6ORTn9~OgQAgQolqjNnYVdpg3bNCRGYt2ww2uGM2Tict3WYTUllEAmjqgPYjw-jRTft309LZah9mUPSyoKzWBZaNFyI~CUqyKLR1VLtF5NRWcsbCxanlHZA3QXmctNht8uBHdBhPAD0HpXbDao8QJmTK9LyR6VATN64JrH1Qt9~wDeFR6i-FBBLsvmTi043G7N5l7SWuZNX4O-YmlCc-cItLy3y9CPopdrjQq0JCgn2jy5NhZc959zZzoeThRx7xhxhszw__",
  },
  {
    id: uuidv4(),
    title: "Github PFP",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996450807-HUS_6126_khvzuu_ogcrep.webp?Expires=1708588465&Key-Pair-Id=K2QFIALPUONXG1&Signature=H33wadSHLBr9khB~M0EXqh7SlglJFH7EM~V740nkiMyM7bIHOocyf9KorHCM0LSge4yIXEdaeI6sKnMYwjpYfvO3~dh7SUAnP3M8DZ~uBR~M5el2AZL3i0pnJuHMghjgpi8NV88es8dE212Nq4tQS5yj5OZsZKukcq53pGzy4vq-vNC8os-LC3ihDnuYJRPs2uk2Cdhb4CGgdxBYGmfGIeZ-3QfvElZidryhV0xrFjnQoWgPvPxQpZUkADiYoYvMDJa8BG43Fz5LqmGOC3SmQLN8Sns0p0rFpUObRIM1xrDkq2YGwbi65Q6uDfl~XdfvZL0XKrOCdaRAWoPNvW3b9Q__",
  },
  {
    id: uuidv4(),
    title: "OSU VS USC 2023",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996554717-pg_hitukq_b3bsbi.webp?Expires=1708588557&Key-Pair-Id=K2QFIALPUONXG1&Signature=jiDofDaeknQmJ6oEnio-DLqmL4nn0MLfetgtiCIOhJi2JP2QEAsbG1kbI0395ajUIghwNHh3rEodawAJrwpOst~axlYnHkSHA-wy3Jgj6QRuv-LTj7HFXiL6DP8jS3qkXOPvNHl1tcfvu~NeihbUYkaA3ZlHMh8LtIZJrWlsDV0IL8QuRoufRji0qnNFpFgnvNV-0xEfpWdjA2Qv2ZKmkVG2Oxy4NyT-SfKWGsGgf8Y52UhiG-sdzuQ3XGQKmzzleznFjFNDu-fjwv9BAnj33ig-XrNvyj9Mh2FGkfQG8PwSNx92EMkj~ZQimiJ-Mc~FOsZC1Kimr0c54x~8qtygbw__",
  },
  {
    id: uuidv4(),
    title: "Face Shot Great America",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996619752-9C698097-9D23-443E-9492-381682DA884E_qql7ao.webp?Expires=1708588623&Key-Pair-Id=K2QFIALPUONXG1&Signature=Aeh5OTwXHrWhSxlf~7cS~IMm8OX164ZO0IWeCbuYGDbdqWRjaLueSM8xnHGHI2NsVaxt3k2SQZZXhF38snN-aLXlYONhzxQHowqy0prKnMxq684IJ9bPnXtfu6seaxGbjLZAUKi44TCVM2Gtvozuox6QuB~PYZz9-aOa4FyxvZ8fWpt95FwEgqciddK2hW2S9wvShSLsW3xmTOO5BTBKoOlBLXIC~j~Pe~Jql6-LK4ExkSdn4V9VwRKG9o2uRm7xmTISblrEe3aSFW0QgK3zdFLBzdDfu4gxN4OxwD3e8J9teyBmhbv4w2-AFOko36hNLgt0GFfgSSZgOnmooub2hw__",
  },
  {
    id: uuidv4(),
    title: "Peace Sign Face Shot Band",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996690169-1C5A5701_as9nol_gi8f43.webp?Expires=1708588693&Key-Pair-Id=K2QFIALPUONXG1&Signature=rRB08j8Tong~VGbVeV2d1PHWwMsP4cA24Y2RHHVBNUfZ1P1FgV8rZJn3HlQvzCRv0-ojO2qhH~UFusvFTi-blQA8fQnU-J7sonUMaFSpybUZlfCt-0ygIbKND7IReCuKy0CXcyaC2jY~sepRwA7YR-yUSbRSqi4iceQyhoRt2k2sNIUOl1-kCD8XNJRXIpiaxo7T4YVem-~UCWXHP6OR8diX1oK6Ll6C0OzE~Zyh0lEYxCW4hcffivTx1r866wUxdUqagtVzqfz7-1BupRa~HARSRi--N527JQJDpuExQGn~jHOPudoSl~c7tqMsAtm1ywyi6ezipwwOnOcL~fecpA__",
  },
  {
    id: uuidv4(),
    title: "Malibu 2022",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996749150-IMG_0019_lnnmuv.webp?Expires=1708588751&Key-Pair-Id=K2QFIALPUONXG1&Signature=lENIQEgbCXYqVG2PAXrmGmccgM74V9lUiwYFE4d9PixRoOhJiEYWveuPh2~kFczO2sKAKluahzH~0qhQJfP32r~0nYdqhIpKQOHx6WtTPN9JMotbLS4~g1K0viyMiz8D0NEJXjKh16LJGgjBcl7Autby9T1mD2ufy2ARTUwNNQvEDIivXs089WBDg5psZwTvfMmAARbdZfXwk6xOxbCiMpG93saUM5PkxBOPqWIHqvAvMbbFoxY2oVumtBWAWo5U-uaHZ0cPdA0teT~1WVPnnoku8v8EtzHd~yLTPCxTq-S4F7ygWTkD39xqTXCsF-1RKGg9PUBzu6LZNfgZ1~VcZg__",
  },
  {
    id: uuidv4(),
    title: "Band Candid Look Away",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996788010-DSC_2949_lnvhoa_bnidn1.webp?Expires=1708588796&Key-Pair-Id=K2QFIALPUONXG1&Signature=fsdEc6UmwQ6-MsVjYNxDbVvI49Ek6sjuQAUaicsFq~L6pfjZ1t5Air~F9M-IQ90o9bW6e3FckXf-Sz-xm3VJaOXm4MgYXk5tGp98VLsfSZ34hld1iD8Iz6uEW0pl4OH~9RWegdiV29rG7kFaaax0emn5kVARAFtpOOGe6ksbAwBjZPMSNw-zvCOUBfndvNNwFvJ~9-VtfS1QMSAQTNNtDZsPkGOqjOOejSAYfmPN~r-uBMbj2AkRa9p6QHlARBW4N7QfdQMpCv3UMedZ93~R8FvSQoOceUzX3x8XLdcdpH6G77ZnLGf4EJQrnobwItsr8JFXkZ3PMUBLDEUwMgyqWQ__",
  },
  {
    id: uuidv4(),
    title: "LA Bowl",
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996868971-IMG_6032_uiwgsa_gxqmda.webp?Expires=1708588872&Key-Pair-Id=K2QFIALPUONXG1&Signature=Id5YrVqIxQ1GDl~DeBKZjJ-ASemewjJAYA6jgNMSesDH8hnCTkFxbU6nMde2~iycitOMzIyqj7QJhZPSgkYMVs5LEeKcvktzY-q3G49CDHplqGv~DYgDQMTzaDqLCHztR4JFDcUy~CgllUe4GmlwgqVHJ76jbig5oSOd8NmurSWeGivuydIm4arqu~9tjff1UfB3YUpRMDWhruCeecoypbz7G0K51l24MX5UVi62hdwxI8kfST5lrXtEysY-88l6zVUP89jK9XJoDX3zs5LpKWiyTGRcbQEHLfq5~fp9o2LZLAnojgvcuvYx6rY4iDLYmMdBJOkC4Z43xspQH4aGQQ__",
  },
];

export const bandPhotosMisc: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997016305-33_uw2548.webp?Expires=1708589387&Key-Pair-Id=K2QFIALPUONXG1&Signature=wgwynQBO7RYD-zMv3sv9K~WAPlNJ7ilnWh5ToVNGbjJm9pSxYd-nxVBKwDj9JqNQaurRcdM5Ii6LmrwKuw-ZbOwqcqaThv1e42xShWgjaW~9Uq1b1JEaxk42K6jYSmA4mXX1lTw5WpqVTUTZl9omF2I~X0CtBkUD9yXxh-RvZ1ZiRxUYO~TE~gMbQo0VCkVfO-pwtfnmo1T-mmYKYhUdX-31exEvuJxoiHJOwuPLlsfnqc2X1UAwBEPC6hrHngkb8rtxUBh9m3FcwIN0Shllgla9zE4whdu7~CCISUyhLP4382PBDj5xXdrSA2131DBMQDKOQzV~rZLDvU4JTi1r9g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997208064-wazzu_l2zduw_xc1jjy.webp?Expires=1708589387&Key-Pair-Id=K2QFIALPUONXG1&Signature=mssC3S5wdGJYlN4mZy19Jp-4RueOcw9UkYnlhvSvvSuP8z~ESo3P3G6lV7t0VdhIQVY59QmnpxLnNrNM4tuxRU5MgGEIWPEZFHmGUBiixox2mTrEfUy-FRJJCUnzWr7DEMX1RzbChhwasVSDTXuikY1h2y6Yex1jFoGjaV8r36Dz2vnbwDLFPgo2n1-vlIumO7So1hUi4V5vdRije8iCy2CeO6QbOVHuInnkcCgyuJmQVLKKbgF46ste9IxjqomtZg3XNz~Ypv2YF73o5rpsBqdh-zd9DQgv3CVN50gSO-whKBYeBYPeM7WTukCAlAQYFW93EQL1DpwUtcH6WqckqQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996041838-IMG_5099_203_jg1lqu.jpg?Expires=1708589387&Key-Pair-Id=K2QFIALPUONXG1&Signature=LeK3odUsB2E0z807~oOjRUJ3nNuF~UQ6rOhNbRX4lm2NLNmvfLSiBTXU3NlkIwYJNj8rrRoGHbJc0b4WfUkX2O6CA-DUMUfVUSJO5JcGA0MYgllLeCLNNkdq2anpo20OHEDumawk2yNl~5TbloMafRwo8bYibNzSo15gvSwgsM2M7JLqCFljzBPhPTp1qvM1zjS0zavVWQw1-uYgVE4dJQQLI24LRItVx9pO4VusF2GB9Hbeu-QD7hafqiNw6oFxFBKFxWeIcmvcI5-3OWWa~8PmWzBmSYhq~MA0sp5HrdD-VxMF1be9V0u-URxbZ4ohJFDlGxffYpB9alKNQSGrqQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997265976-IMG_5664_qu4b8f.webp?Expires=1708589538&Key-Pair-Id=K2QFIALPUONXG1&Signature=bxJNhM87wDyVMxdRiDWCRwbxfZtHtBMvqzeUG-XqtFHKJcH1TP6vngL3rFXFc1KumE3Z8Nuby39JmvMtNKSd~yOW~quX4mQTX71ZOmgSt97yzH-Pp8t07fMSiQOntjm15raFL3ENI4tmRaSfy6Z2cCrCuM8Vfzkpb04QqOMPF4SifKNB3Htyio6oZXqUV5e2VBsM4RhnuX5j4TVhgzFa3TVM9VaiXMbMKVK98sK9WUFTxVKt2PbIg-2APo3yy1Lw0Xwse7SIal8maAmjB~UIP7KSP79PV23fEGKZ-7nAj0bMkwAdUlKP5B7G6dWN3J8hGJGkh4VOiDKvNP538dBvpg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997251911-38_drf4aq.webp?Expires=1708589538&Key-Pair-Id=K2QFIALPUONXG1&Signature=cUmVIwGEd4102Iea9CLjDf7L7pkkx4tnZq0DxkgXUEk4UGA7KpSJ2HjhRceB08Hnzjbifs4YsS~jXeDuJdMNU94s3SDPZkhWvKV1zTOzXbrNAMcrV3sLb5c3WzGCzCU9tIal3fzTik6W9G4tFOLIcjlpfuykKB-orSWInssrBD7Uzb6CygXvWkbC1XIAzGQzYQhMHg-OBvkd229NQMTsc6CMVSc1~2plFwOLRdJfVa1tKdKS9cSjSL-bnbaTybGVJrG3d6j3g7dHX5EdP7b3sFO8njKvJL7glP-3XGFmPvggZLJ2g8PIHZsj3~W90lrM~bjayzHcvkWrfvPSmGypcA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997827361-some.jpg?Expires=1708590021&Key-Pair-Id=K2QFIALPUONXG1&Signature=DAl~UHlEmjxlvL1K6JoSYHrEuvfntZWXEwan353zmAwXQroqSefIJZBKGSwyJDNrQqmi2NNOSo21~C5jYdsJGcczgLD5IW6AsPBmY-ebcAg58D0Li8NEeByD1AmJVflyoktSaqUJcSDORyqiHcpwXTBYFb2PewnY9fjZ68Tc8geBfArFZvzPOk6UtH1LQS4ylnijeAQIqxxGwUzRr6zOTz5iemfjP1~ryZ~2Kv0fXNTb6K-I8qk5zGOqEd6c7P5deObSu5KklTmy67cbKjTOjVL7liKqcbqezbSh-yh5XXKxF5xFDs6EI8gYVOEI1dTC60bUC4ZUD4RsxJmL7psw0g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996055368-Moto-628-min_hreygc.jpg?Expires=1708590021&Key-Pair-Id=K2QFIALPUONXG1&Signature=sUY22VUK6JDdPHJP~VbK8Z6WQLCQKMzCF5ycQv3mn5VDwtiZ9DU3bE-RYYFw7K2DvPyB1YETBDMY56~qPqpqvVOjovt8C-ECwxu-s2QY9BPDbMohQNhLwXvv5mSWyUr8HW-yhmdRpMLeY6Z348Er1onxAsPM25jwkOafUM-sx1k1eAd-EoEzfjk1aSCXiyMjItHP3h9RAujus5xGISJMr~CdNpHSu8CCdFq2zlh5fuEVK9MCxuuk82FtuDvR4bv9B8EYtpXiX4DcUum0OfSrdKmLjaPPmNfZMjxLtI~i8pU0DajOPG45yCe4X4Imh6v5~PH0g6klwfnzb0l83Sx83g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996788010-DSC_2949_lnvhoa_bnidn1.webp?Expires=1708590124&Key-Pair-Id=K2QFIALPUONXG1&Signature=KcwJJ9FzmaMqblQFVvgKDuYdwPcL2KJsBwsjsr1LbG99gFriggoi-LBZHBjmkW0vwUcuQpxPmloqEFHbxznmotodOf3emjRLI1ArijSFkJ2PSJvpwsaaTFyvLu05xLnw6G4PI3v7VmSf95vHRxtmgb~zGYZuLR-wDG1US8HQhU39acezs1JYiCld~oAx7CeSDIJUuBocyl-WAjj9CvymaQIEy9FUosbKQzdXWRe1zPj1O8jrr4puj2qPYYZJMPMou1hm0~lyXrIHKA2ykCUt79UrFdMxVdiyo6VmPyml2Jnn07Z5P8Mfc8BdF~urH9jPTkRClj8BHviqt37FWmo5xA__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705995992655-image0000001_qfskdw.jpg?Expires=1708590124&Key-Pair-Id=K2QFIALPUONXG1&Signature=MS32G7d5Nl4jUXKB~9xUg-vE6dDOhkt1DuVVlVKn95BaFRYukfTNt-Rn08Le~HJ8RMuIcmOqe8lpJ5YnMqIRkunFrACBjQazLcQVhFAaycx4Xe7NBsEqp47DCoPtSA4uSO2-3QSd0B-YNr9uKTGEj~zGKEA8apGn0hmb4nzjIhviD9AXHCvM2OczVeCCZVZpQRReEIInFChgwISL9hKy7slGoK~pTcPLVjOqWqNpincSU6tki~zrGTtnjyYDV4NP3iJXLBEW9C3r-MaN0tDxYmfWM8qlavYEF~cZ3W3IxN4dOyx2icthJougJRDwY7Nxy0LbIL1vGvLJlgNp31oG4g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996004947-IMG_0667_t8jobf.jpg?Expires=1708590124&Key-Pair-Id=K2QFIALPUONXG1&Signature=h~T~DDfrd1gBoDv0Oqkb~HViOGz14hSLv-CsNnYZnCLEe-0AtEDBVT0ULlfxck7kyC3sXhjG2hjrv6PgPdi3~LIp-BaEvEh5Bmr8ntnN60tMHwHOL-T7fR3~n8vo0aSwV2j-TWxW7CxmecWnEp4WWJ61NTPOT2QrNaD4xPGMh9ZVjy~llSvew9OBOUL87di3M9KObVvJMHrAzvvqkcm6omEEHPTp3VAUMDcMq-uVJVdyZKfG4k6PSVAf3Zlk5128ZUpFq4YsUDDvpy5MCoMUwNC5cmO9qRJM8iea3Agr~QYdeTdn4dSKRjZnztKJeZ0gvJoonqgZBeoN7MG69-xxdg__",
  },
  // { id: uuidv4(), image: "https://res.cloudinary.com/dkosoobf7/image/upload/v1686308789/pf/stack_prlq31_kwgbjw.webp" },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705996031202-IMG_3038_q0cnji.jpg?Expires=1708590124&Key-Pair-Id=K2QFIALPUONXG1&Signature=T4ltN7OfI6SCnGTukShX7dCDRzeVSkDJ3xyMDUrRWgdY2Z2rN~Ptty0DwFjj9OtGAlDItGYNPypwGoEesPPvL04zsIxnPIADo3J8oRrhpwR10ghLLvNCD3UnVIK3Z25iKdJqys33vE1de3kzJz3XKs50pcxW01q620g7xDNUxQiq7gRq1mxRM0BHjcf0xWxLQey-I9mMekx1cDp~aEz73kNElpKzpwoTUOvZkwQtHtGOdLb1T3w-x7cUjHp9qUvn9ebxEaq9dVtXApxjtIpsUCS1p7tbbNjdtpj5LQLSUJmF5pdXXsSmZqavq3obGo~9V2-OY-nj8SHXJDZpd6Aa5A__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705997294143-16_ik62ap.webp?Expires=1708590124&Key-Pair-Id=K2QFIALPUONXG1&Signature=WA7kFqAanHbBBUo-qaRjy2NP8r4gAUrnyRtSYJUrADrl1FbV5vvkEE8vwbKddUBZeiQoM7Ns3L~xpykyopGgKANDZiLBy5VdLy36TG8cmuqDT89Lpd7xXLc-77KZC~8IDdPYFppuEEn44Y-7D96yosvsCgrguZkSzHaaXg8ug~v86FKBl-blUDWLol0732EWcMwbZxlxFjACHbsp6x9xlFFzaxqAVW5tHUm-xBBxsEhNwnTmoN7NNfITTB-EHaBArHa2Z4qYd8RXfP2rR952eweaIid1xZDTx7dGa~APpVtRBhDA0QF6XVI8docL007ie-~4uRUvsC~eUoG5xSf3mw__",
  },
];

export const csMemories: Image[] = [
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998374032-IMG_2571_tigzqv.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=c7ArbxZN6fWun35wjQt5oM0ee5kFuCKfJ9NfhnrBdcXqwyqo1~FiOW4dYRRWJ4j1FJYle4AIPX128cgdLUcfu77qggxhVmU-3MxLloZkm30NcWpZk81tFw2okg039BrZcvtc8KkSZukiUYLmykCDZbnzBEyj1zKCT4QoQmCIgqaYjV3hZD2B7~FRZhv87cLOfZzUMWocxygw8PJLR8BADdQyPkuI8MxW3eemvnG-4ROeC3JQkesr4j51x749KIpSF8rlvPo4DKHm5t32fQcdUCoUnTOvqOrWYzdTjbvlIOkrywQARSxC47KVQqGwc9E36i6QTu2~dKJ2yghjFRwejg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998395663-IMG_2590_qzvbab.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=vjKD2u3XBAe-dCcBP3SaMgXbFdtdRgkBtCnnWQKpJkdbauwuIXZX1~e1Fo--E3VV-MxjjEy5-JgXStiNejAPqGEhFbM5QLqtRbNsPgJzMLn2j4rs2xUGmyY11NTSrHQRNndNTOe~9qhR0HSR5UPI7egLt4GZHJxZOKY--dSzn8rAvKSsSrwRR2pJ~bOC8zmXYOGt~PnSqhABzyl33Fsuf1xrOXDIlpc12t3g4JEWj9oc-aprhV6y1i3gkwfJdXexBbzX3YlyuTUhPRkN8KI~LtJVBOLxa3k32vRfkJXiYrsHaeTqjFHqaYN1dkWCyl3xBCkyoxjttaKfPBJLxn~W6g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998412847-IMG_2839_mpbutv.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=gTHz7tR2zfJM7mfF~KdnnQfUaa4aU2D~3vM6-sccXaHjdce-jBM9O8BoAIHyAuQ~ImXX9p~fmh8QESILJatnkONKnux9F5GUHXcbPY1CTqP-4dyH0iQqVpKrUNZs5zAlhsi91pHhUXBwamQyvgxVZDpH1UVKa3Tut5oFLxwaWV-EUpaq-iBLU6oCnP8r3XV5p5PU~Y3YYCUHeLdzSKhVTPNQDMy1LC01iR12Ct9kBbiRu9ZhbTRUBZMwkLRVjj8eHFNUjN5SrH~9b15N6ehpOa5jyBg28ewXa0FyNyioEF~PH-F4OpwgdrqW16N-CyDDPaGriBg1tGilo4fs1TtEIw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998426519-IMG_2779_evrkrl.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=U8cTm-q0PwBIN1DchxduON8hg8LpWKzq14Hv8pmJIvr28rlJ3SOKxBxbrSnXqYzYqAuXduxlR5NUp-hFUV2jWCKFeSvcbg~b3I19NIkoGzQ2DQT-YSugwicFonRViL-sThOeYFwB1MVyjaVNPyUE9C0sgtSc-lvx6PUuQ88nPmFsoOAf-lU5Vdww8Uk-GceByPamMK5EyFRa-UNaJ6fFguN1KKbfpKiC~~UrUaZX8td68k3zFInumkj8cDFIQUFOHtTNyAVbodgmwYDLPyMZVvX0vLYrj4VqcrjR49qhbqsjyLlP4crjh0im6qXK0bAk2FdVAwRduUZbg3GDi76xHg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998438089-IMG_2913_vwjo0m.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=NOPqCS0~h101RsduJaqnrAcxF8Uy4eYzI2DPcGG1-FRFNrYabMWuTHwJx3xe4evnolGl8sdVlaJmm55kJZpcH12YUk8mzCu5c~fQMYE9XFxTA7m8RU~DIW58zH5dwpgdSazKTisR2km9Z~qtG6hbERoki~08CJaust4D0iwozm~xXYaSkMuUDTgqEf3O5WfqOlfjbH5ifqrKscXrjL2lUu2EPU8PI8mdV6eGEZBDghIKxEkLP61ZSBsag0tMku15x~lHoe98iIvYL1Xw2YoP-UucVg~e~jxVIWuvh6eqmgzN8YCrtiLQs6-X~Zj1dUurH8JkiIGE-nkXL3CruKW5Mw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998450547-IMG_0392_zafcxk.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=JM5ve0xrccvpe985w7qWor3j806Axk0RFa2nw0gGIEg-K9K2h76~y6AZw7Mzm7BAGtpPEfHulrDwOhdCCV6a3qvHmz-ira1~0D0QOCMC9HXsjT6r1FtOuMETpfVzb2APKkby5CHuF6ZAgpPB1IJIb5vcyrtTH1xsLS80yFny5Pk8vkqscEGD5D0-nS-GEnaVyPKnEcqVAZkQMfkMLGp1t9k3N6BslhLhXkE5PSoO6tdQPUnFFSBtXsCHhZMQriGB1R2AiEktu1Sk~yf1pVvJonJzvNqfxDGDHdUjvlxecuXS7vdvwxK7lurCvNK7pfRaroa2oUIAeeSr7em7LYk97g__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998465397-DSC07463_Original_fbejx1.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=BpN0HgFJCVIJvJv826K43zb9gGEqeCXQEBHg7iSMuGYjX98stgQXXJy0veExp-ucG-qqq-AkV2x1-WA8BS48rYvunOsD9CDvMjhw6aLmAWguE9yGuhdAMiM-g4~y5jFGeH6e8LrRh~Gi~3Ql6Vr8OXltoBpxUPdcXOVmFvplTWvpD7Ki1t8Zz263a3eZaNYZVWu5hOfYgWMgdl4qJYIQZN7LvDWDt0YzGecwAqOl45nDbh2narLC4aErxuTxspFxrfowIz-apSUTz~I3XJeOCstdKFStBhFqUS79SLpqqXOq8f61IVcrAySH0PkjHdVve43w7pOYMciUE0IMXSXb6Q__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998478766-IMG_3293_hyaenw.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=kIeuNznLTS7vpeXzfF0Q1KrTlfMFz6OIHnFNU9pRSnQbHKwZR-6XQOU0nNCXGAcdTBsnh5tCpNqvRRDIOSm53pcHTX-uJjuuH87x-~sJ1DPXNIBQFaiEf5lwx6XIqMoh-lHpcVweKsGFNM4s6vMqZrN5ir0FebdT0~dBNt6yeIc7CwI2f5E9mVXVUgSvJ2lw8lyUXzt15WzXq5pb2etfDLKL55kBmW~BI4h4fx4kWDswWXuONs~a05n1hR91EAfSG943~YOvvzaNm8GxCtQlH0juo7eJWl4WouS0qPCunH1rI-6DIxDMLfs9qRGVmWnB7qKlSVnes7dK2zaQxZ77WQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998498807-FAF0E06B-AD69-4216-869C-1AEF9795E14B_hwp603.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=owcIQia1~rZEe-lChttTkZP5MOMrmn9kqJkK3RTHv-G-DO3ZcGOlNyYa6F3w95W6uvBK-rq~7fVHMpmQ0-dlMrFDBYT1rlkcLiS1PBpLJ4RqzzZ3UBEwJL1WN~hg~rzS5Z1S~3NcMkMP9K93Chf8atYVMcadJT6VJ0axxlpPxXWOmr-ff5ZCUxT1iqF8faZZiOiPJ7ajPzLaL5me5UYF6qgNUNLq6nQeVQN3j5poZCNkD3YUA0BRm~syZ2xxNKAnjRJ0~5UCFkpHsBfVHAnjr4K13I5HHtIW7WNHQY7a76cOTwc1~8VyUm35giF6wSDQs4fcaPC--Naw~igdtVGxuw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998513173-barcamp_qphuh3_i8i0n5.webp?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=PZZ1~Jgd5hDde1vRagloBAUJNAwPcWRvZGAo-yKh6uYNpnUKF5DEyfJT55Hkm04XGp2pVi~Wt2stzsLw6YsMVWC-HRc8iknsXkrtY3QfvBUtIdNYjqYYpfhI9BkOcnzsjA3Nz247BOZQwK7vvkffeaKLEwBKs0LujuqEi4uSDR0DYJLvYjIpZY8Rr5eNFyMNU1x5~ayauAjrWBNyTgufyOIpUSaiNpWAutaeTyVa0py5Qe1V2tv~Oz3FyJA-7cIUCUzqFIFRNJrbDHshVDxIu~8JkamG-AEUNR8RlMgEuJA61iDluxKlOoqND381gpuXpb6abmdZdUSfj7CMRHJI9A__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998550461-IMG_2187_vkdgoa.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=fWcGoTNP22VVxAUG3cynut7S7athJIJUCQU4OtcAT-ZGo9ZD-LlzGvBAeGlqpK9VCw7Yc27uBX5eN9gydrGUlNFmAh0uEOM0nIlOjuvPTc3GX7WLWxrwP3lV84IGEAA~d5lc0y-bCTJMG0nAV17IQu1GXnPqVNaaT5LvMSDCWwLUaUnifgG0Nz5WKyjwrRrNvU556h8WCmQteutogYGFnuaHdmHt7rDHxwatdSN6UN-gpnGgwkx881ooIhGWS6Cbb~j2f~4E16ipU7YLdA8EbqSFuiTJdm9RgV1O5Bz3fyvKTh1cG17HnI2g3sQtmU2y7biLWx0OM7iH0Z7CmRBNpQ__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998565804-IMG_3290_h4njhz.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=jyItqhNr7ABlE2c3v~nSps15hZF5ZZbPq5qR46l0c7t~rcjn~W72pN9-mq21Yx3YtPq2cTNTOwmcQ56KbHf6lxXeAMQMR0Zw~6sTdXXnONqTW7D~tHQx5C6m7ZOV4moPNaf0ZKifbL~iMpGP9B7II~6DZP9ikguXqwFoSI41TcbVX5MgHQks07Dnt02fVwg8S~dNTnPuuTMCv4JnPM303XgRqZ~m0GIt8QaxU2Z2QAqBHP~8MOAbTIVUujFKrPuRztKChA5OSZAoLZrhcsOYVQL~lGvMRdiezaWMhSNX4OIIFrpX9XioppAeUtiKdcWgtRvyDuQQJv7IQnb4Em6QXg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998586829-7_jgparz_ackqdq.webp?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=obGFccC6-m357ImN~s3-Z20lqasW5OmPf-2H5SIQz32H509lijBHKayc4uSRT7achWX~M1fK9BnqWRdNdJPVeCflX6cokMqYMInxqWW-116C0HWJhrtGu7iKjXHYbAjXBKvnf6gCAYxCfejLqdkQOWsZzyNorFFPSFj~eeEDnk1pOnebME-Sp7unppg3pa20T-F8tyIJjT9V9JkxZiSlmt5Kj6P97mywv3h1ese4lpvfq9UfBaneZjgeJH-A24T9qGJArRIQYC4N9wr7206qhsFadulfUFqrHt9sEIfEpi-gtQR~LEfG2JD~Q~rx5lz4TzGT468iBn~63Sv8NpHS4Q__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998604155-Screen_Shot_2023-12-25_at_11.33.32_PM_aflwig.png?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=NJMaKZ3PQzx~~BNVX5QCE59b7uQD43TclO1vrMN1mCzZNkBHZrmc3-PyT~E6hAiQLnjlo-IwYfgrd0aZ6FeoBoG2Cy-aleu7P6zxPPxfubkYHnqn7gEOeZGbpuGMuuQqZo00UsUQuPNQTxVNlEJBspZEmBZQcgBJh8cKuqGwXQQF0RLlKpQoIgbAqWV2KRhegfpW1ttvOjZNZ99-NTDeFbNtWhYFduW9VGdrolR3AaYrVqS9Df-oSzXXRghtF4eJ8o7ZMF0F7OpWaYrXqHwjiDa~PP~4uxXE-fTMoACiAUBbxtjZtEFlppwHhhZs7khkVTyM-XMz03qqj8ikKC9Pzg__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998626517-Screen_Shot_2023-12-25_at_11.42.25_PM_ipv0xo.png?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=xAgPzQXzMnRET5yrI2P5pd-fFBprbmNhU4KFexgEh-bmbl8gwg7yyH6de9o9K-4FbCShgH-UuFt4bhaashsJRH-F1-Ddd2rVcbns6fyN1QOYg~tAnkYNXLSy11uf447qH27aYDtScgXWLVGMDriWZhJL3PyeQ694pkDXHebU6kb~Eh-06e60s7toyYd2qmqiigFT7CBN~A1npOVdr1043gH1NM3dU5-QFMAM4miRhc7IjyL5n40-ti1xLVdEkZBQcy7ZStlJUO3pOeCmDxSWMWLlAqCQbNKqHZdI6yGh6-3O1V2Rb1RKjk-O1Ji63mxElNqGoAb2hqhDYUYBzUjWlA__",
  },
  {
    id: uuidv4(),
    image:
      "https://cdn.discordapp.com/attachments/1163717135596539914/1189112828041375774/IMG_3895.png?ex=659cfa9e&is=658a859e&hm=9798dc0702f32348dd48e4d72ba5210e0939a561402b5799887ed0d48ddcd056&",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705998640081-team-picture-af4e7deb_awa2kw.jpg?Expires=1708590654&Key-Pair-Id=K2QFIALPUONXG1&Signature=cvwAhfMvt59bTs0BrX0y1bXlRaja8lnv7qLgwCrnIKzCrAzRLxTiuIYKAWsK-~PZO4cmWOQuenttmhvLf63yfS4rQ5U5PQ~klRYg562jUgS0ZDUgPXuLZBX-YI-mrLAuzY9OiWTakek-Wemqkr67jvWIXzZuTktQamqKknrrajaV6eLNTPGO55UhHQEJL4W4TSBclFCIDv9kagqZZ91AXZQSAiooSJN9IP1AUgNr4VB6uFW59iay85Rk3T8lNEBuws0ITTuikyNvP3mFXw44la2mTQernTpe1JStn3nkoQ7s24bbdxq5mtPIx0MvW2sxhK8ORoD8g15EfexIRGYsDw__",
  },
  {
    id: uuidv4(),
    image:
      "https://d3uraa353l50l1.cloudfront.net/image-1705999140873-IMG_3170.JPG?Expires=1708591165&Key-Pair-Id=K2QFIALPUONXG1&Signature=gbmPtoF1khxHMWLiJVyqBZ0rbHixotSG~65G-aWgflwNTTnkmpYfy2vrEl7tlyfbdskpqSwIA0Hiy7hhMElaevNGMO5FxXoGQNnj5Yc9Gz6W9shbYJK-wjT4HAjGNe3qwyYw5uSfairwWIpD~U1xZxkhPFjJ101aaQHzFy1lXyQc2UaMkBrjk-OwPfDp-hjwW4fZBZTuKXpzWiGr~f9KshIdjrJLUXsqTzaT~qEFzcB~wTYC1Z31fEzc3-lQ-P9BFFQUqRzEG7G4-kRJt5JYCPxtlpOtkvCeLM35~5zZDd17LgdjscDZAOwv-GUp9R8HwSGL5gbIPrUAPtlz4CL0Xg__",
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

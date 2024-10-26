import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/og",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}

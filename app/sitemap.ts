// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://basilaslam.com",
      lastModified: new Date(),
    },
    {
      url: "https://basilaslam.com/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://basilaslam.com/#about",
      lastModified: new Date(),
    },
    {
      url: "https://basilaslam.com/#contact",
      lastModified: new Date(),
    },
  ];
}

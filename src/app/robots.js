export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"],
      },
    ],
    sitemap: "https://asianinstituteofallergy.com/sitemap.xml",
  };
}

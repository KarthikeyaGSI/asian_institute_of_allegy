export default function sitemap() {
  const baseUrl = "https://asianinstituteofallergy.com";

  const routes = [
    "",
    "/world-allergy-foundation",
    "/contribute",
    "/conditions/asthma",
    "/conditions/eczema",
    "/conditions/sinusitis",
    "/conditions/food-allergy",
    "/conditions/autoimmune",
    "/treatments",
    "/treatments/allergy-treatment-hyderabad",
    "/clinical-success",
    "/gallery",
    "/doctor",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}

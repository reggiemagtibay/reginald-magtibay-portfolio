export default function sitemap() {
  const base = "https://reginald-magtibay-portfolio.pages.dev";
  return [
    "",
    "/work/be-bitesmart",
    "/work/porter-voice-collective",
    "/work/virtual-humans",
    "/work/digital-marketing",
    "/work/macklemore-online-backlash",
  ].map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.8 : 1,
  }));
}

export const site = {
  name: "Quinn Albert",
  tagline: "Photographer & filmmaker",
  email: "quinnalbert1@gmail.com",
  socials: {
    youtube: "https://www.youtube.com/@qfavisuals",
    instagram: "https://www.instagram.com/qfavisuals/",
    linkedin: "https://www.linkedin.com/in/quinn-a-782267131/",
  },
  // To enable auto-pull from your channel:
  // Go to youtube.com/@qfavisuals → About → Share → Copy channel ID
  youtubeChannelId: "",
  // Curated videos shown by default (or as fallback when no channelId is set)
  featuredVideos: [
    { id: "g9HpdnMcBgM", title: "" },
    { id: "VfpLxP9kIWs", title: "" },
    { id: "Oh4ATQMpz7s", title: "" },
    { id: "VD9KxGOVeK8", title: "" },
  ],

  // Photo hosting via Cloudflare R2
  // Steps: cloudflare.com/dashboard → R2 → Create bucket → "quinn-albert-photos"
  //        Upload compressed photos → Settings → "Allow public access"
  //        Your public URL prefix will look like: https://pub-xxxx.r2.dev
  //        Set r2BaseUrl to that URL, then list photos below.
  r2BaseUrl: "", // e.g. "https://pub-abc123.r2.dev"

  // Add photos here once R2 is set up.
  // Each src is relative to r2BaseUrl (e.g. "/banff/DSCF1708.jpg")
  // Leave empty [] to show the "coming soon" placeholder.
  externalPhotos: [] as Array<{ src: string; alt: string }>,
};

export const site = {
  name: "Quinn Albert",
  tagline: "Photo and Video",
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
    { id: "0HKHIWvyhJo", title: "" },
    { id: "g9HpdnMcBgM", title: "" },
    { id: "VfpLxP9kIWs", title: "" },
    { id: "Oh4ATQMpz7s", title: "" },
  ],

  // Background video clips for the hero (autoplay, muted, cycles through them).
  // Use short compressed clips (30–90 s, ≤ 20 MB each) for fast load.
  // Paths are relative to /public, or use full R2 URLs once hosting is set up.
  // Leave empty to keep the plain dark hero.
  heroVideos: [
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250417_165436_8_1745190211627_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250420_144516_10_1745190577580_video.MOV',
    // dji_fly_20250427 missing from R2 — removed
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250511_121514_19_1746977472586_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250524_203656_22_1748182206063_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250602_215558_26_1748912377394_video.MP4',
    // dji_fly_20250602_221436 missing from R2 — removed
    // dji_fly_20250603 missing from R2 — removed
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250830_221016_44_1756769912802_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20250918_204844_45_1758317352341_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20251010_181700_46_1760202042180_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20260103_165738_58_1767553756037_video.MOV',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20260128_161646_64_1769635697117_video.MP4',
    // dji_fly_20260428_072012 missing from R2 — removed
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20260428_235820_85_1777452225908_video.MP4',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20260429_024730_86_1777452241811_video.MP4',
    'https://pub-4c318461fde143db9bb21750c9620aa7.r2.dev/hero-videos/dji_fly_20260505_225216_92_1778048972612_video.MOV',
  ],

  // Years for sub-section nav labels (keyed by slug)
  subSectionYears: {
    'beijing': '2026',
    'chongqing': '2026',
    'hong-kong-and-shanghai': '2026',
    'sichuan': '2026',
    'tibetan-plateau': '2026',
    'xian': '2026',
    'yunnan': '2026',
  } as Record<string, string>,

  // Print inquiry form via Formspree (formspree.io).
  // 1. Sign up at formspree.io → New Form → copy the 8-char ID (e.g. "xpzvogkb")
  // 2. Paste it here. Leave empty to hide the print inquiry button entirely.
  formspreeId: "mdajyyzz",

  // Photo hosting via Cloudflare R2
  // Steps: cloudflare.com/dashboard → R2 → Create bucket → "quinn-albert-photos"
  //        Upload compressed photos → Settings → "Allow public access"
  //        Your public URL prefix will look like: https://pub-xxxx.r2.dev
  //        Set r2BaseUrl to that URL, then list photos below.
  r2BaseUrl: "https://pub-a2b98a9f2bdf46f4842c29d457307835.r2.dev",

  // Add photos here once R2 is set up.
  // Each src is relative to r2BaseUrl (e.g. "/banff/DSCF1708.jpg")
  // Leave empty [] to show the "coming soon" placeholder.
  externalPhotos: [] as Array<{ src: string; alt: string }>,
};

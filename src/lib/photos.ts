export type PhotoEntry = { url: string };

export type SubSection = {
  name: string;
  slug: string;
  photos: PhotoEntry[];
  galleryPhotos: PhotoEntry[];
};

export type Section = {
  name: string;
  slug: string;
  photos: PhotoEntry[];        // direct photos (non-nested locations)
  subSections: SubSection[];   // China only
  total: number;
  galleryPhotos: PhotoEntry[]; // gallery-tagged across all depths
  previewUrl: string;          // best photo for location card
};

export const makeSlug = (s: string) =>
  s.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export function buildPhotoData(): { sections: Section[]; allGalleryPhotos: PhotoEntry[] } {
  // ?url → Vite copies files as-is, no Sharp processing on 335 images
  const allFiles = import.meta.glob<string>(
    '../assets/photos/Lightroom Photos/**/*.{jpg,jpeg,JPG,JPEG}',
    { eager: true, query: '?url', import: 'default' }
  );

  const sectionMap = new Map<string, Section>();

  for (const [rawPath, url] of Object.entries(allFiles)) {
    const after = rawPath.replace('../assets/photos/Lightroom Photos/', '');
    const parts = after.split('/');
    const locationName = parts[0];
    const filename = parts[parts.length - 1];
    const isGallery = /gallery/i.test(filename);

    if (!sectionMap.has(locationName)) {
      sectionMap.set(locationName, {
        name: locationName,
        slug: makeSlug(locationName),
        photos: [],
        subSections: [],
        total: 0,
        galleryPhotos: [],
        previewUrl: '',
      });
    }
    const section = sectionMap.get(locationName)!;
    section.total++;

    // gallery photos bubble up to the section regardless of depth
    if (isGallery) section.galleryPhotos.push({ url });

    if (parts.length === 2) {
      // flat location (e.g. Banff/DSCF1708.jpg)
      section.photos.push({ url });
    } else {
      // nested location (e.g. China/Beijing/DSCF1234.jpg)
      const cityName = parts[1];
      let sub = section.subSections.find(s => s.name === cityName);
      if (!sub) {
        sub = { name: cityName, slug: makeSlug(cityName), photos: [], galleryPhotos: [] };
        section.subSections.push(sub);
      }
      sub.photos.push({ url });
      if (isGallery) sub.galleryPhotos.push({ url });
    }
  }

  const sections = [...sectionMap.values()].sort((a, b) => a.name.localeCompare(b.name));

  for (const section of sections) {
    section.subSections.sort((a, b) => a.name.localeCompare(b.name));
    // preview = first gallery photo (any depth), else first available photo
    section.previewUrl =
      section.galleryPhotos[0]?.url ??
      section.photos[0]?.url ??
      section.subSections[0]?.galleryPhotos[0]?.url ??
      section.subSections[0]?.photos[0]?.url ??
      '';
  }

  const allGalleryPhotos = sections.flatMap(s => s.galleryPhotos);

  return { sections, allGalleryPhotos };
}

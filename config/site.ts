export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pramuka | Graha Pancaka",
  description:
    "Lihat kumpulan aktifitas dan galeri kami di gerakan pramuka graha pancaka. Bersatu, Berjuang, Menang!",
  navItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Kegiatan",
      href: "/kegiatan",
    },
    {
      label: "Galeri",
      href: "/galeri",
    },
    {
      label: "Tentang",
      href: "/tentang",
    },
    {
      label: "Kontak",
      href: "/kontak",
    },
  ],
  navMenuItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Kegiatan",
      href: "/kegiatan",
    },
    {
      label: "Galeri",
      href: "/galeri",
    },
    {
      label: "Tentang Kami",
      href: "/tentang",
    },
    {
      label: "Kontak",
      href: "/kontak",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/pramukasmkn2bdg/",
  },
  socials: {
    gmail: "grahapancaka@gmail.com",
    whatsapp: "6285172232696",
  },
  galeris: [
    {
      name: "First",
      image:
        "https://drive.google.com/file/d/1rvrcfbOU56PKm5ZxkW2YSxRDQ2xJ7x_v/view?usp=drive_link",
    },
    {
      name: "Second",
      image:
        "https://drive.google.com/file/d/13wA0uFpX0dzVAyDDy91Elj-HCOWRjWI6/view?usp=drive_link",
    },
    {
      name: "Third",
      image:
        "https://drive.google.com/file/d/13wvu5E85LkQvVHTGg5f00IhNvSpYmg6v/view?usp=drive_link",
    },
    {
      name: "Fourth",
      image:
        "https://drive.google.com/file/d/1407cy72KlC4mgRksfBiNToY3EYZ3A_3h/view?usp=drive_link",
    },
  ],
  redirects: {
    afterLogin: "/usr"
  },
  protectedRoutes: {
    userOnly: "/usr",
    adminOnly: "/usr/a"
  }
};

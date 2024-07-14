export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pramuka | Graha Pancaka",
  description:
    "Lihat kumpulan aktifitas dan galeri kami di gerakan pramuka graha pancaka. Bersatu, Berjuang, Menang!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
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
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/pramukasmkn2bdg/",
  },
  kegiatans: [
    {
      name: "Pelantikan",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdarunnajah.com%2Fwp-content%2Fuploads%2F2021%2F03%2FWhatsApp-Image-2021-03-25-at-20.59.31.jpeg&f=1&nofb=1&ipt=f3cf54b47307e8ab86ff31701f08fe72c7430b6d31b208c47db889de84fb8f21&ipo=images",
      link: "#",
      date: "01/02/23",
    },
    {
      name: "Lomba",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyYxK97ERAq0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=daf092652366e9a83cad64dd0f076d30e2f49c1720ee0299d84cd5080240cc65&ipo=images",
      link: "#",
      date: "02/03/24",
    },
  ],
};

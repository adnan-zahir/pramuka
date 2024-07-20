import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

import {
  GmailIcon,
  InstagramIcon,
  Logo,
  TikTokIcon,
  YoutubeIcon,
} from "../icons";
import { subtitle, title } from "../primitives";

export default function Footer() {
  return (
    <div className="bg-default-100 w-full py-6">
      <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto">
        {/* PENUTUP */}
        <div className="w-full text-center md:text-left">
          <p className={title({ size: "sm" })}>
            <Logo className="inline-block" size={56} />
            <span>Graha Pancaka</span>
          </p>
          <p className={subtitle({ size: "sm" })}>
            Ikuti terus perkembangan dan perjalanan Graha Pancaka melalui
            berbagai media sosial kami!
          </p>
          <p className={subtitle({ size: "sm" })}>Bersatu, Berjuang, Menang!</p>
        </div>
        {/* MEDIA SOSIAL */}
        <div className="flex gap-4 text-current self-start">
          <InstagramIcon size={32} />
          <GmailIcon size={32} />
          <TikTokIcon size={32} />
          <YoutubeIcon size={32} />
        </div>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ABOUT US */}
          <div>
            <span className={title({ size: "xs" })}>Tentang Kami</span>
            <div className="grid grid-cols-[1fr_0_1fr] gap-x-2">
              <p>Graha Pancaka Putra</p>
              <p>|</p>
              <p>Graha Pancaka Putri</p>
              {/* // */}
              <p>Gugus Depan 07-041</p>
              <p>|</p>
              <p>Gugus Depan 07-042</p>
              {/* // */}
              <p>Basis SMKN 2 Bandung</p>
            </div>
          </div>
          <div>
            <p className={title({ size: "xs" })}>Informasi Kontak</p>
            <p>grahapancaka@gmail.com</p>
            <p>(+62)8xx-xxxx-xxxx</p>
          </div>
        </div>
        <Divider />
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between py-3">
          <div className="flex items-center gap-1 text-current">
            <span className="text-default-600">
              &copy; 2024 Pramuka Graha Pancaka
            </span>
          </div>
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">All Rights Reserved</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

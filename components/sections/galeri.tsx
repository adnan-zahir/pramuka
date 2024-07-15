"use client";

import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion } from "framer-motion";

import { subtitle, title } from "../primitives";

import { convertDriveLink } from "@/utils";
import { siteConfig } from "@/config/site";

const positions = ["3%", "36%", "70%", "103%"];

export default function Galeri() {
  return (
    <>
      <Divider />
      <div className="w-full block max-w-xl text-center justify-center uppercase md:justify-start md:text-left">
        <h1 className={title()}>{siteConfig.navMenuItems[2].label}</h1>
      </div>
      <p className="w-full block max-w-xl mb-4 text-justify justify-center md:justify-start md:text-left">
        Sedikit cuplikan galeri kami yang menangkap semangat, kesenangan, juga
        semua perasaan kami selama berkegiatan. Ayo lihat perkembangan kami
        melalui deretan gambar ini!
      </p>

      <div className="flex gap-1 max-w-xl justify-center">
        {siteConfig.galeris.map((galeri, i) => (
          <motion.div
            key={i}
            className="relative flex-1 before:absolut before:inset-0 before:bottom-1/2 before:bg-gradient-to-b before:from-background before:via-transparent before:z-20 after:absolut after:inset-0 after:top-1/2 after:bg-gradient-to-t after:from-background after:via-transparent after:z-20"
            whileHover={{ translateY: `${i % 2 === 0 ? "-15px" : "15px"}` }}
          >
            <Link className="flex flex-col gap-4 items-center " href="#">
              <Image
                alt="Kegiatan kepramukaan"
                className="w-full object-cover aspect-[1/4] rounded-none"
                referrerPolicy="no-referrer"
                src={convertDriveLink(siteConfig.galeris[0].image)}
                style={{
                  objectPosition: positions[i],
                }}
              />
              <span
                className={subtitle({ className: "text-center !text-small" })}
              >
                Tab {i}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div>
        <Link
          className={buttonStyles({
            color: "default",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.navMenuItems[2].href}
        >
          Selengkapnya
        </Link>
      </div>
    </>
  );
}

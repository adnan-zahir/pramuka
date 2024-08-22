"use client";

import { useState, useEffect } from "react";

import { Divider } from "@nextui-org/divider";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { title } from "../primitives";

import { siteConfig } from "@/config/site";
import { DBKegiatan } from "@/types";
import clsx from "clsx";

export default function Kegiatan({ kegiatans }: { kegiatans: DBKegiatan[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_TRESHOLD = 300;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > SCROLL_TRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scoll", handleScroll);
  }, []);
  return (
    <>
      <Divider />
      <div
        className={clsx(
          "w-full block max-w-xl text-center justify-center uppercase md:justify-start md:text-left transition-colors duration-500",
          isScrolled ? "text-slate-900" : "text-slate-50",
        )}
      >
        <h1 className={title()}>{siteConfig.navMenuItems[1].label}</h1>
      </div>
      <p
        className={clsx(
          "w-full block max-w-xl mb-4 text-justify justify-center md:justify-start md:text-left",
          isScrolled ? "text-slate-900" : "text-slate-50",
        )}
      >
        Berikut beberapa kegiatan terbaru Graha Pancaka yang menarik untuk
        kakak-kakak simak. Ayo lihat keseruannya!
      </p>
      <div className="columns-2 gap-3 max-w-xl">
        {kegiatans.map((kegiatan, i) => (
          <Card
            key={i}
            isFooterBlurred
            className="border-none aspect-square group"
            radius="lg"
          >
            <Image
              alt="Kegiatan kepramukaan"
              className="w-full h-full object-cover aspect-square !transition-transform group-hover:scale-125"
              referrerPolicy="no-referrer"
              src={kegiatan.imageUrl}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-small text-white/80">{kegiatan.name}</p>
              <Link
                className={buttonStyles({
                  color: "default",
                  radius: "lg",
                  variant: "flat",
                  size: "sm",
                  className: "text-tiny text-white bg-black/20",
                })}
                href={`kegiatan/${kegiatan.id}`}
              >
                Lihat
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <Link
          className={buttonStyles({
            color: "default",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.navMenuItems[1].href}
        >
          Selengkapnya
        </Link>
      </div>{" "}
    </>
  );
}

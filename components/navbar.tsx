"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { User } from "@nextui-org/user";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { LogoutButton } from "./logoutbutton";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { InstagramIcon, SearchIcon, Logo } from "@/components/icons";
import { createClient } from "@/utils/supabase/client";
import { Profile } from "@/types";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [profile, setProfile] = useState<Profile | null>();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();

    // get user auth
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(!!user)

      // get profile from user
      if (user) {
        supabase.from("profiles")
          .select("nama_lengkap, julukan, avatar_url")
          .eq("id", user.id)
          .single()
          .then(({ data }) => {
            const profile = data as Profile;
            setProfile(profile);
            console.log(profile);

            // get avatar from profile
            supabase.storage.from("avatars")
              .download(profile.avatar_url)
              .then(({ data }) => {
                if (data) {
                  setAvatarUrl(URL.createObjectURL(data));
                }
              })
          });
      }
    });
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full overflow-x-auto" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Graha Pancaka</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex !grow-0"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Instagram"
            className="hidden lg:flex"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex md:hidden">
          {user && (
            <User as={Link} href="/usr" name="" avatarProps={{
              src: avatarUrl || ""
            }} />
          )}
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          {user && (
            <User as={Link} href="/usr" name={profile?.nama_lengkap} description={profile?.julukan} avatarProps={{
              src: avatarUrl || ""
            }} />
          )}
        </NavbarItem>
        <NavbarItem>
          {user ? (
            <LogoutButton />
          ) : (
            <Link color="success" href="/login" size="lg">
              Login
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Instagram"
          href={siteConfig.links.instagram}
        >
          <InstagramIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {user && (
          <User as={Link} href="/usr" name={profile?.nama_lengkap} description={profile?.julukan} avatarProps={{
            src: avatarUrl || ""
          }} />
        )}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 1 ? "primary" : "foreground"}
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            {user ? (
              <LogoutButton onClick={() => setIsMenuOpen(false)} />
            ) : (
              <Link
                color="success"
                href="/login"
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

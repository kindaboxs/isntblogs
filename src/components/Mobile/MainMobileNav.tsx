"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { Icons } from "../Elements/Icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { IoDocumentText } from "react-icons/io5";
import { PiBookOpenUserFill } from "react-icons/pi";
import { SiGithub, SiSpotify, SiX } from "react-icons/si";
import { siteconfig } from "@/config/site";

function MainMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLinkNav
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo className="mr-2 h-5 w-5" />
          <span className="text-xl font-bold">isntblogs</span>
        </MobileLinkNav>
        <hr className="border-border my-4 border-t" />
        <div className="mt-4 flex flex-col gap-3">
          <MobileLinkNav
            onOpenChange={setOpen}
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center space-x-2",
              pathname === "/blog"
                ? buttonVariants({ variant: "default" })
                : buttonVariants({ variant: "ghost" }),
            )}
          >
            <IoDocumentText className="h-5 w-5" />
            <span className="text-lg font-medium">Blog</span>
          </MobileLinkNav>
          <MobileLinkNav
            onOpenChange={setOpen}
            href="/about"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center space-x-2",
              pathname === "/about"
                ? buttonVariants({ variant: "default" })
                : buttonVariants({ variant: "ghost" }),
            )}
          >
            <PiBookOpenUserFill className="h-5 w-5" />
            <span className="text-lg font-medium">About</span>
          </MobileLinkNav>
          <Link href={siteconfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center space-x-2",
              )}
            >
              <SiGithub className="h-5 w-5" />
              <span className="text-lg font-medium">Github</span>
            </div>
          </Link>
          <Link
            href={siteconfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center space-x-2",
              )}
            >
              <SiX className="h-5 w-5" />
              <span className="text-lg font-medium">Twiter</span>
            </div>
          </Link>
          <Link
            href={siteconfig.links.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center space-x-2",
              )}
            >
              <SiSpotify className="h-5 w-5" />
              <span className="text-lg font-medium">Spotify</span>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MainMobileNav;

interface MobileLinkNavProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLinkNav({
  href,
  children,
  onOpenChange,
  className,
  ...props
}: MobileLinkNavProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

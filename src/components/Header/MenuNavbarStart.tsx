"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { siteconfig } from "@/config/site";
import { Icons } from "../Elements/Icons";
import { IoDocumentText } from "react-icons/io5";
import { PiBookOpenUserFill } from "react-icons/pi";

function MenuNavbarStart() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href={"/"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "flex items-center space-x-2",
        )}
      >
        <Icons.logo className="h-6 w-6 fill-current" />
        <span className="text-lg font-bold">{siteconfig.name}</span>
      </Link>
      <div className="hidden sm:inline-flex">
        <Link
          href={"/blog"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "flex items-center space-x-2",
            pathname === "/blog"
              ? buttonVariants({ variant: "default", size: "sm" })
              : buttonVariants({ variant: "ghost", size: "sm" }),
          )}
        >
          <IoDocumentText className="h-4 w-4" />
          <span className="font-md text-sm">Blog</span>
        </Link>
      </div>
      <div className="hidden sm:inline-flex">
        <Link
          href={"/about"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "flex items-center space-x-2",
            pathname === "/about"
              ? buttonVariants({ variant: "default", size: "sm" })
              : buttonVariants({ variant: "ghost", size: "sm" }),
          )}
        >
          <PiBookOpenUserFill className="h-4 w-4" />
          <span className="font-md text-sm">About</span>
        </Link>
      </div>
    </nav>
  );
}

export default MenuNavbarStart;

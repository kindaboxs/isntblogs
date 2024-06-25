import { siteconfig } from "@/config/site";
import Link from "next/link";
import { SiGithub, SiSpotify, SiX } from "react-icons/si";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

function MenuNavbarEnd() {
  return (
    <div className="flex flex-1 items-center justify-end">
      <nav className="flex items-center space-x-2">
        <Link href={siteconfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiGithub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteconfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiX className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <Link href={siteconfig.links.spotify} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "w-10 px-0",
            )}
          >
            <SiSpotify className="h-4 w-4" />
            <span className="sr-only">Spotify</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default MenuNavbarEnd;

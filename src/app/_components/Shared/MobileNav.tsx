import { FiAlignRight } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import links from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <FiAlignRight size={22} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-5">
            <Logo chat="" />
          </SheetTitle>
          <SheetDescription>
            <div className="gap-6 flex flex-col text-start">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative uppercase font-semibold transition-all duration-300 
                ${link.path === pathname ? "text-black" : "text-black/70"} 
                hover:text-black group
              `}
                >
                  {link.label}

                  <span
                    className={`absolute left-0 bottom-[-4px] ${
                      link.label.length > 5 ? "w-1/4" : "w-14"
                    } h-[2px] bg-black 
                  transition-all duration-300 ease-in-out 
                  ${link.path === pathname ? "scale-x-100" : "scale-x-0"}
                  group-hover:scale-x-100
                `}
                  ></span>
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

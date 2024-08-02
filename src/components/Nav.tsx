"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PersonIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import ModalLogin from "./ModalLogin";
import { Button } from "./ui/button";

export function Nav({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="bg-primary text-primary-foreground flex items-center justify-between px-4">
      <VercelLogoIcon className="h-8 w-auto" />
      <span className="ml-2 text-xl font-bold uppercase">T3 Template</span>
      <div className="mx-auto flex">{children}</div>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="text-primary-foreground mr-2 rounded-full bg-slate-700 hover:bg-slate-500/40 hover:text-blue-400 dark:bg-slate-600/70 dark:hover:bg-slate-900"
        size="icon"
      >
        <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      {isModalOpen && <ModalLogin onClose={() => setIsModalOpen(false)} />}
      <ModeToggle />
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground p-4",
        pathname === props.href && "bg-background text-foreground",
      )}
    />
  );
}

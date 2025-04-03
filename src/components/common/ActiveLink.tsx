"use client";
import React from "react";
import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  return (
    <Link
      href={url}
      className={`flex items-center gap-3 p-3 transition-all rounded-md ${
        isActive
          ? "bg-primary text-white svg-animate"
          : "hover:bg-primary hover:bg-opacity-10 hover:text-primary "
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

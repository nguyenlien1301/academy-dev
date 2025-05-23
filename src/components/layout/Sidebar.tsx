"use client";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import Link from "next/link";
import { IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white flex flex-col dark:bg-grayDarker dark:border-opacity-10">
      <a className="inline-block mb-5 text-3xl font-bold">FEDev</a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-5">
        <ModeToggle />
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
          >
            <IconUsers></IconUsers>
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;

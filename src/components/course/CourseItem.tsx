import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconClock, IconEye, IconStar } from "../icons";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "1000",
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: "30h25p",
      icon: (className?: string) => (
        <IconClock className={className}></IconClock>
      ),
    },
  ];
  return (
    <div className="bg-white p-4 border-gray-200 border dark:border-opacity-10 rounded-2xl dark:bg-grayDarkest">
      <Link href="#" className="block h-[180px] relative">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-orange-500 text-xs">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3">
          Xây dựng khoá học NextJs-Pro E-Leaning Systeam hoàn chỉnh
        </h3>
        <div className="flex gap-3 items-center mb-5 text-xs text-gray-500 dark:text-grayDark">
          {courseInfo.map((item, index) => {
            return (
              <div className="flex gap-1 items-center" key={index}>
                {item.icon("size-4")}
                <span>{item.title}</span>
              </div>
            );
          })}
          <span className="font-bold text-primary ml-auto text-base">
            799.000
          </span>
        </div>
        <Link
          href="#"
          className="flex items-center justify-center mt-10 w-full font-semibold text-white rounded-lg h-12 bg-primary hover:bg-opacity-20 hover:bg-primary hover:text-primary transition-all"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;

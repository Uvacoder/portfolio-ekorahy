import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ItemProject({src, alt}) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="700">
      <div class="relative group">
        <Image
          src={src}
          width={900}
          height={300}
          alt={alt} class="w-full rounded shadow-xl hover:shadow-2xl" />
        <div
          class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
          <div class="flex-row text-center">
            <h1 class="text-white font-Kanit font-bold text-2xl">Personal Notes App</h1>
            <p class="text-white/80 font-Roboto text-base">Web Application</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start mt-3">
        <Link href="https://personal-notes-app-ekorahy.vercel.app/" className="flex items-center transition duration-300 ease-in-out font-Kanit font-light text-sm text-body mr-4 hover:text-white lg:text-base"><AiOutlineLink className="mr-1" />Visit Website</Link>
        <Link href="/" className="flex items-center transition duration-300 ease-in-out font-Kanit font-light text-sm text-body hover:text-white lg:text-base"><BsCodeSlash className="mr-1" />Full Code & Detail</Link>
      </div>
    </div>
  );
}

export default ItemProject;
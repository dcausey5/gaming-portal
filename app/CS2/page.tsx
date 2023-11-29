"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../public/logos/logo_full_transparent.png";
import IGN from "../../public/logos/ign-logo-transparent.png";
import Youtube from "../../public/images/youtube.png";
import Twitch from "../../public/logos/twitch.png";
import Steam from "../../public/images/steam.png";

const CS2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="max-w-screen-xl m-auto">
          <Nav></Nav>
          <h1>Welcome to the Counter Strike 2 Page</h1>

        </div>
      </div>

      <div className="flex justify-center items-center h-full">
      <main className="flex-grow justify-center items-center pb-8 text-white">
  <div className="flex justify-center items-center space-x-4">
    
    {/* Watch Section */}
    <div className="flex flex-col items-center mt-10 text-center">
      <h1>Watch</h1>
      <Link href="https://www.twitch.tv/directory/category/counter-strike" target="_blank" rel="noopener noreferrer">
          <Image
            className='rounded-lg'
            src={Twitch}
            alt=""
            width={350}
            height={350}
          />
      </Link>
    </div>

    {/* Play Section */}
    <div className="flex flex-col items-center text-center mr-20">
      <h1>Play</h1>
      <Link href="https://store.steampowered.com/app/730/CounterStrike_2/" target="_blank" rel="noopener noreferrer">
          <Image
            className='rounded-lg mt-10'
            src={Steam}
            alt=""
            width={250}
            height={250}
          />
      </Link>
    </div>

    {/* Code Section */}
    <div className="flex flex-col items-center mt-10 text-center">
      <h1>Code</h1>
      <Link href="https://www.youtube.com/watch?v=g7yv5VOsM5A" target="_blank" rel="noopener noreferrer">
          <Image
            className='rounded-lg'
            src={Youtube}
            alt=""
            width={200}
            height={200}
          />
      </Link>
    </div>

  </div>
</main>

</div>



      <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900 min-h-screen">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Image
              src={Logo}
              alt="Flowbite Logo"
              width={100}
              height={100}
              style={{ margin: "-20px" }}
            />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Mission Statement
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com" className="hover:underline">
              Gaming Portal™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default CS2;

"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../public/logos/logo_full_transparent.png";
import Youtube from "../../public/logos/youtube-logo-png-2074.png";
import IGN from "../../public/logos/ign-logo-transparent.png";

const Sims = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="max-w-screen-xl m-auto">
          <Nav></Nav>
          <h1>Welcome to the Sims Page</h1>
          <p>This is the Sims page content.</p>
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
      <main className="flex-grow pb-16" style={{ paddingInline: '21rem' }}>
  <div className="flex space-x-4">
    <div className="flex flex-col items-center">
      <h3>Live Streams</h3>
      <Link href="https://www.youtube.com/channel/UCXzpX-rTi13etXc1UP3Cn4Q" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={Youtube}
          alt=""
          width={350}
          height={350}
        />
      </Link>
    </div>

    <div className="flex flex-col items-center">
      <h3>Reviews</h3>
      <Link href="https://www.ign.com/games/the-sims-4/user-reviews" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={IGN}
          alt=""
          width={200}
          height={200}
        />
      </Link>
    </div>

    <div className="flex flex-col items-center"><p>Learn How to Develop in C++</p>
      <Link href="https://www.youtube.com/watch?v=g7yv5VOsM5A" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={Youtube}
          alt=""
          width={250}
          height={250}
        />
      </Link>
    </div>
  </div>
</main>

</div>



      <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900">
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

export default Sims;

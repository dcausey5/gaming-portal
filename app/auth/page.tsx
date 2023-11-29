"use client";

import Image from "next/image";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react"
import Logo from '../../public/logos/logo_full_transparent.png';

export default function Home() {
    return (
        <div className="max-w-screen min-h-screen text-white p-6 text-center bg-slate-900">
            <div className = "flex justify-center items-center flex-col">
                <Image
                    src = {Logo}
                    alt = ""
                    width = {500}
                    height = {500}
                    ></Image>
                    <h1 className="text-4xl">
                        Please login using your Google account.
                    </h1>
                <GoogleButton onClick={() => signIn('google', { callbackUrl: '/portal' })} className="mx-auto mt-10">
                    Sign in using Google
                </GoogleButton>
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
    )
}
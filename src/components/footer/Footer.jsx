import React from 'react'
import nftlogo from '../../assets/stemlogo.png'
import { AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (

<footer class="bg-black">
  <div class="mx-auto grid text-gray-50 lg:grid-cols-12">
    <div class="px-5 py-8 sm:px-8 md:pt-14 lg:col-span-5 xl:pr-32 2xl:pr-40">
      <p class="font-medium text-purple-900">Inquire</p>
      <p class="mb-4 mt-4 text-2xl sm:mb-8 sm:text-5xl">Request a Info</p>
      <div class="flex max-w-lg rounded-full bg-white ring-purple-300 focus-within:ring">
        <input class="w-full rounded-full px-6 text-gray-600 outline-none md:px-10" type="email" placeholder="Enter your email" />
        <button class="rounded-full bg-purple-900 p-2 ring-purple-300 focus:ring active:scale-105 md:p-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
    <nav aria-label="Footer Navigation" class="flex flex-wrap border-t border-r border-slate-500 px-5 pb-10 sm:py-8 sm:px-8 lg:col-span-7 lg:border-t-0 xl:flex-nowrap xl:space-x-16 xl:pl-32 2xl:pl-40">
      <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
      <h4>Albashi</h4>
          <p>Explore</p>
          <p>How it Works</p>
          <p>Products</p>
          <p>Contact Us</p>
      </ul>
      <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
         <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
      </ul>
      <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
        <li><strong>Guides</strong></li>
        <li><a href=""> Why Us? </a></li>
        <li><a href=""> Blog </a></li>
        <li><a href=""> Products </a></li>
        <li><a href=""> Marketing </a></li>
        <li><a href=""> Media </a></li>
      </ul>
    </nav>
    <div class="border-t border-slate-500 py-4 lg:col-span-12">
      <p class="text-center text-sm text-gray-400">(2023)  Albashi, Co. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    
  )
}

export default Footer

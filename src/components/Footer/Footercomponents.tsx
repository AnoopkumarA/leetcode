import React from 'react';
import '../../App.css'
export default function Footer() {
  return (
    <footer className="bg-[#02020B] text-white py-12 font-pompiere">
      <div className="container mx-auto px-6">
        {/* Connect with Us Section */}
        <div className="flex justify-between items-center mb-8">
  <h2 className="text-4xl md:text-6xl font-light">Connect with Us</h2>
  <button className="relative -left-8 group bg-blue-900 hover:bg-blue-950 text-white font-normal py-1  md:py-3 md:px-6 rounded-full flex items-center transition-all duration-300 ease-in-out ">
    <span className="mr-4 transition-transform duration-300 ease-in-out group-hover:translate-x-6 md:text-xl mx-2 ">Contact Us Now</span>
    <span className="relative z-10 bg-blue-800 group-hover:bg-blue-700 p-2 rounded-full transition-all duration-300 ease-in-out transform group-hover:translate-x-8 md:group-hover:translate-x-16">
      <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </span>
  </button>
</div>



        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-3xl md:text-4xl mb-1 md:mb-4 ">LeetCode Diaries</h3>
              <p className="text-gray-100 mb-6 text-xl md:text-2xl">Empowering Developers To Code With Confidence And Creativity.</p>
              <div className="flex space-x-4">
              <a href="#" className="relative text-white hover:text-gray-400 border border-neutral-700 p-2 rounded-full flex items-center group overflow-hidden">
                <img src="/src/assets/YouTube.svg" alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
              </a>
              <a href="#" className="relative text-white hover:text-gray-400 border border-neutral-700 p-2 rounded-full flex items-center group overflow-hidden">
                <img src="/src/assets/instagram.svg" alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
              </a>
              <a href="#" className="relative text-white hover:text-gray-400 border border-neutral-700 p-2 rounded-full flex items-center group overflow-hidden">
                <img src="/src/assets/TwitterX.svg" alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
              </a>
              <a href="#" className="relative text-white hover:text-gray-400 border border-neutral-700 p-2 rounded-full flex items-center group overflow-hidden">
                <img src="/src/assets/WhatsApp.svg" alt="YouTube" className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
              </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-3xl md:text-4xl mb-4 relative left-[10rem] lg:left-[15rem] ">Navigation</h3>
              <ul className="space-y-2 relative left-[10rem] lg:left-[15.9rem]">
                <li><a href="#" className="text-gray-100 hover:text-white text-xl md:text-2xl">Home</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white text-xl md:text-2xl">Services</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white text-xl md:text-2xl">About Us</a></li>
                <li><a href="#" className="text-gray-100 hover:text-white text-xl  md:text-2xl">Projects</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-3xl md:text-4xl mb-4 relative left-[10rem] lg:left-[15rem]">Contact Us</h3>
              <p className="text-gray-100 md:text-xl relative left-[10rem] lg:left-[15rem]">+91 9392305628</p>
              <p className="text-gray-100 text-xl md:text-2xl left-[10rem] relative lg:left-[15rem]">leetcode@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t border-gray-700 pt-16 md:pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-100 text-sm">
          <p className='text-lg md:text-xl  '><span className='text-sm md:text-base'> © 2024</span> LeetCode Diaries. All rights reserved.</p>
          <div className="flex space-x-4 mt-0 md:mt-0">
            <a href="#" className="hover:text-white text-lg md:text-xl">User Terms & Conditions | Privacy Policy</a>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

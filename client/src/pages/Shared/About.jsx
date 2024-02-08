import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'

const About = () => {
    return <>
        {/* <Navbar /> */}
        <Navbar />
       
              <section class="flex items-center bg-white xl:h-screen font-poppins mb-16 text-black">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="px-4 mb-10 md:text-center md:mb-20">
            <p class="mb-2 text-lg font-semibold  text-black">
                Welcome to our Campus Recruitment
            </p>
            <h2 class="pb-2 text-2xl font-bold  md:text-4xl">
                Unlocking Your Future Career
            </h2>
            <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                <div class="flex-1 h-2 bg-blue-200"></div>
                <div class="flex-1 h-2 bg-blue-400"></div>
                <div class="flex-1 h-2 bg-blue-300"></div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <img src="https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW13b3JrfGVufDB8fDB8fHww" alt=""
                    class="relative z-40 object-cover w-full h-96 rounded-md shadow-lg" />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <h2 class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 ">
                    Empowering Your Career Growth
                </h2>
                <p class="mb-4 text-base leading-7 ">
                    Explore exciting opportunities and kickstart your career journey with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul class="mb-10">
                    <li class="flex items-center mb-4 text-base ">
                        <span class="mr-3 text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path
                                    d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                        Exciting job opportunities tailored for your skills and ambitions.
                    </li>
                    <li class="flex items-center mb-4 text-base ">
                        <span class="mr-3 text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path
                                    d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                        Personalized career development plans to help you grow.
                    </li>
                    <li class="flex items-center mb-4 text-base ">
                        <span class="mr-3 text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path
                                    d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                        Join us and be part of a vibrant and dynamic work environment.
                    </li>
                </ul>
                <button 
                    className="btn btn-lg w-full bg-blue-700 text-white hover:bg-blue-400">
                    Discover More Opportunities
                </button>
            </div>
        </div>
    </div>
</section >
<Footer />

    </>
}

export default About

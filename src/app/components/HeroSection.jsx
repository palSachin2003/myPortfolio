'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true)
  
      // Hide popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false)
      }, 2000)
    }, 3000)
  
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='lg:py-16'>
      {/* Popup Message */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className='fixed md:top-24 top-16 right-0 z-50 bg-[#420505] border border-white text-white px-4 py-3 rounded-lg shadow-lg'
        >
          🎉 I’m currently exploring new job opportunities!
        </motion.div>
      )}

      {/* Main Content */}
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Sachin Kumar Pal',
                1000,
                'MERN Stack Developer',
                1000,
                'Front-End Developer',
                1000,
                'Back-End Developer',
                1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            I am a passionate and detail-oriented MERN Stack Developer with a
            strong focus on building responsive, user-friendly web applications.
          </p>

          <div>
            <Link
              href='/#contact'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
            >
              Hire Me
            </Link>
            <Link
              href='/Sachin_Kumar_Pal@CV(Web Developer) 1_Year_Final.pdf'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/hero-image.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

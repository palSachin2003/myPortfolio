'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div>
        <h3 className='text-lg font-semibold'>Viva College, Virar</h3>
        <ul className='list-disc pl-2'>
          <li>BSc - Information Technology - 2022</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div>
        <h3 className='text-lg font-semibold'>TryCatch Training Institute</h3>
        <ul className='list-disc pl-4'>
          <li>
            MERN Stack Development <br />
            <span className='text-lg text-gray-400 font-normal'>
              (Jan-2023 to Feb-2024)
            </span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <div>
        <h3 className='text-lg font-semibold'>
          Software Associate – Convergex Digital Service Pvt Ltd <br />
          <span className='text-lg text-gray-400 font-normal'>
            (March 2024 – Present)
          </span>
        </h3>
        <ul className='list-disc pl-4'>
          <li>
            1 year of experience as a JavaScript, React.js, and Node.js full
            satck developer.
          </li>
          <li>
            Worked on a travel and tourism application using the MERN stack.
          </li>
          <li>
            Implemented payment gateway integration to supportsecure
            transactions for users.
          </li>
        </ul>
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about-image.png'
          alt='About Me'
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Next.js, Node.js, Express,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            excited to work with others to build amazing products.
          </p>
          <div className='flex flex-row flex-wrap justify-start mt-8 gap-4'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

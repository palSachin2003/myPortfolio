import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech = []
}) => {
  return (
    <div className='flex flex-col justify-between h-[460px] rounded-xl overflow-hidden bg-[#181818]'>
      {/* Image Section */}
      <div
        className='h-52 md:h-auto relative group'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '480px'
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={gitUrl}
            className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
          >
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
          </Link>
          <Link
            href={previewUrl}
            className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
          >
            <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className='text-white py-2 px-4 flex flex-col justify-between h-full'>
        <div>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE] mb-2'>{description}</p>
        </div>
        {tech.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-0'>
            {tech.map((item, index) => (
              <span
                key={index}
                className='text-sm bg-gray-700 text-white px-2 py-1 rounded-full'
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default ProjectCard

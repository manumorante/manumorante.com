import React from 'react'

export default function Description({ project }) {
  return (
    <div className='[Description] text-xl text-gray-600 dark:text-gray-300'>
      {project.description}
    </div>
  )
}

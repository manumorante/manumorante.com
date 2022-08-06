import React from 'react'

export default function Cover({ project }) {
  if (!project?.image) return null

  return <img src={project.image} alt={project?.name} loading='lazy' />
}

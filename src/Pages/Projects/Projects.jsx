import React from 'react'
import { projectList } from './projectLists'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = projectList;
  return (
    <div className=' grid grid-cols-1 md:max-w-[90%] lg:max-w-[80%] m-auto'>
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
    </div>
  )
}

export default Projects

import React from 'react'
import { workList } from './worklist'
import WorkCard from './WorkCard';

const Work = () => {
  const works = workList;
  return (
    <div className=' grid grid-cols-1 md:max-w-[90%] lg:max-w-[60%] m-auto'>
      {works.map((p, i) => <WorkCard key={i} work={p} />)}
    </div>
  )
}

export default Work

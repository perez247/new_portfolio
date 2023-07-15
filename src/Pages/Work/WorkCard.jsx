import React from 'react'
import LineSvg from '../../Components/SVG/LineSvg'

const WorkCard = props => {
  return (
    <div className="relative my-10">
        <LineSvg className={`m-auto w-[10em]`} />
        <div className='w-full flex justify-center items-center py-2'>
            <div className='w-1/3 text-right text-sm'>
                <p>{props.work.startDate}</p>
                <p>{props.work.endDate}</p>
            </div>
            <div className='w-full p-4 realtive'>
                <p className=' text-lg font-bold'>{props.work.company}</p>
                <p className='text-sm font-bold' >{props.work.position}</p>
                <p className='text-sm' >{props.work.responsibilities}</p>
                
                { props.work.skills.map((s, i) => <span key={i} className='px-2 py-1 text-white bg-appRed mr-2 my-1 inline-block text-xs' >{s}</span>) }

            </div>
        </div>
        <LineSvg className={`m-auto w-[10em] rotate-180`} />
    </div>
  )
}

export default WorkCard

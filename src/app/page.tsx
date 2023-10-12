'use client'

import { mainConstants } from '@/constants'
import { SelectCard } from './_components'

const MyStudy = () => {
  return (
    <>
      <div className="h-[92vh] overflow-y-hidden bg-primary-50 flex justify-center items-center gap-12">
        {mainConstants.description.map((info) => (
          <SelectCard mypageInfo={info} key={info.title} />
        ))}
      </div>
    </>
  )
}

export default MyStudy

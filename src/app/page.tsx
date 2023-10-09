'use client'

import { mainConstants } from '@/constants'
import { SelectCard } from './_components/SelectCard/SelectCard'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const MyStudy = () => {
  const pathName = usePathname()
  const { data: session } = useSession()

  return (
    <>
      <div className="h-screen bg-primary-50 flex justify-center items-center gap-12">
        {mainConstants.description.map((info) => (
          <SelectCard mypageInfo={info} key={info.title} />
        ))}
      </div>
    </>
  )
}

export default MyStudy

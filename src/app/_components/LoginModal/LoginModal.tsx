'use client'

import { loginConstants } from '@/constants/login.constants'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { LoginModalPageProps, NaverSignInOutButton } from '.'

export const LoginModalPage = ({ setIsModalOpen }: LoginModalPageProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 rounded-[40px] shadow-md ">
        <div className="flex justify-end">
          <span
            onClick={() => {
              setIsModalOpen(false)
            }}
            className="material-icons-outlined cursor-pointer"
          >
            close
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <Image src={loginConstants.image.mainImage} alt="beanIcon" width={35} height={35} />
          <Image src={loginConstants.image.mainLogo} alt="mainLogo" width={45} height={45} />
        </div>
        <div className="flex justify-center items-center mt-6 text-primary-black font-bold text-[18px]">
          {loginConstants.description}
        </div>
        <div className="flex justify-center items-center">
          <Image src={loginConstants.image.subImage} alt="descriptionImage" width={160} className="m-5" />
        </div>
        <div className="flex flex-col justify-center items-center m-5">
          <NaverSignInOutButton signIn={signIn} />
        </div>
      </div>
    </div>
  )
}

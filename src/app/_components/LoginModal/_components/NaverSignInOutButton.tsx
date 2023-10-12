'use client'
import { Button } from '@/components'
import Image from 'next/image'
import naverLogo from '/public/image/naver-logo.svg.png'
import { NaverSignInOutButtonProps } from '.'

export const NaverSignInOutButton = ({ signIn }: NaverSignInOutButtonProps) => {
  const onClickToMain = () => {
    signIn('naver', { callbackUrl: '/' })
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <Button
        variant={'tertiary'}
        className="w-[300px] h-[50px] rounded-[20px] text-primary-black gap-1"
        onClick={onClickToMain}
      >
        <Image src={naverLogo} alt="NaverLogo" width={80} height={80} />
        <p>로 로그인하기</p>
      </Button>
    </div>
  )
}

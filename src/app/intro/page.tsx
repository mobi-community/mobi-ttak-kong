'use client'

import { Button } from '@/components'
import { CarouselButton, IntroSectionFirst, IntroSectionSecond, IntroSectionThird } from './_components'
import { siteConfig } from '@/constants/main'
import Image from 'next/image'
import bgImage from '/public/image/intro-bg1.webp'
import { useRef } from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useRouter } from 'next/navigation'

const IntroPage = () => {
  const router = useRouter()

  const onClickToMain = () => {
    router.push('/')
  }

  // 섹션들에 대한 참조(ref) 생성
  const refFirst = useRef<HTMLDivElement>(null)
  const refSecond = useRef<HTMLDivElement>(null)
  const refThird = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // 스크롤 이동 훅
  const scrollToRef = useSmoothScroll()

  const onCarouselButtonClick = (idx: number) => {
    switch (idx) {
      case -1:
        scrollToRef(containerRef)
        break
      case 0:
        scrollToRef(refFirst)
        break
      case 1:
        scrollToRef(refSecond)
        break
      case 2:
        scrollToRef(refThird)
        break
      default:
        break
    }
  }

  return (
    <div className="relative h-screen overflow-auto">
      <div ref={containerRef} className="absolute inset-0 z-[-1]">
        <Image src={bgImage} alt="backgroundImage" layout="fill" objectFit="cover" />
      </div>
      <div className="h-screen flex flex-col items-left justify-center ">
        <div className="ml-165">
          <h1 className="font-bold text-38 mb-35">{siteConfig.description}</h1>
          <div>
            <Button onClick={onClickToMain} className="w-217 h-60 text-white rounded-[20px]" fontSize={'xl'}>
              딱콩 시작하기
            </Button>
          </div>
        </div>
        <div className="fixed left-95 top-1/2 transform -translate-y-1/2 z-20">
          <CarouselButton numButtons={4} onCarouselButtonClick={onCarouselButtonClick} />
        </div>
      </div>
      <div ref={refFirst}>
        <IntroSectionFirst />
      </div>
      <div ref={refSecond}>
        <IntroSectionSecond />
      </div>
      <div ref={refThird}>
        <IntroSectionThird onClickToMain={onClickToMain} />
      </div>
    </div>
  )
}

export default IntroPage

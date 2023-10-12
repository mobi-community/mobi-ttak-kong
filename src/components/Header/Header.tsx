'use client'

import { usePathname, useRouter } from 'next/navigation'
import mainLogo from '/public/image/logo-black.png'
import beanIcon from '/public/image/icon-beans.png'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { StudyData, userMatchingData } from '@/mocks'
import { useAtom } from 'jotai'
import { siteConfig } from '@/constants'
import { isOpenLoginModal } from '@/app/_states'
import { LoginModalPage } from '@/app/_components'
import { IntroHeader } from '../IntroHeader/IntroHeader'

export const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const isIntroPage = pathName === '/intro'
  const [isLoginModal, setIsLoginModal] = useAtom(isOpenLoginModal)
  const { data: session } = useSession()

  const onClickToHeaderLink = (href: string) => {
    if (session || href === '/') {
      router.push(`${href}`)
    } else if (!session) {
      setIsLoginModal(true)
    }
  }

  const matchedStudies = StudyData.filter((study) => {
    return userMatchingData.some((userMatch) => {
      return (
        study.field === userMatch.field &&
        study.detailField === userMatch.detailField &&
        study.level === userMatch.level &&
        study.isInPerson === userMatch.isInPerson &&
        study.location === userMatch.location
      )
    })
  })

  return (
    <div>
      {isIntroPage ? (
        <IntroHeader />
      ) : (
        <div>
          {isLoginModal ? <LoginModalPage setIsModalOpen={setIsLoginModal} /> : null}
          <div className="fixed top-0 w-full h-[auto] flex justify-between pl-10 pr-14 py-2 bg-white relative">
            <div className="flex flex-row gap-1 py-[5px]">
              <div
                onClick={() => {
                  onClickToHeaderLink('/')
                }}
                className="flex flex-row gap-1 cursor-pointer"
              >
                <Image src={beanIcon} alt="딱콩 캐릭터" width={30} height={30} />
                <Image src={mainLogo} alt="딱콩로고" width={40} height={40} />
              </div>
              <div className="ml-5 gap-5 flex flex-row">
                {siteConfig.header.map((headerlink) => (
                  <div
                    key={headerlink.title}
                    onClick={() => {
                      onClickToHeaderLink(headerlink.href)
                    }}
                    className="grid items-center font-bold text-primary-black hover:text-primary-300 cursor-pointer"
                  >
                    {headerlink.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              {!session ? (
                <div>
                  <div
                    onClick={() => {
                      setIsLoginModal(true)
                    }}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    <span className="material-icons-outlined">login</span>
                    <p className=" font-semibold ml-1 text-[14px]">로그인</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-center items-center gap-1 ">
                  <img
                    className=" w-[30px] h-[30px] rounded-[50%]"
                    src={session.user?.image || null || undefined}
                    alt="유저 이미지"
                  />
                  <p className="text-sky-600">{session.user?.name}님 반갑습니다!</p>
                  <div
                    onClick={() => {
                      onClickToHeaderLink('/matching')
                    }}
                    className=" relative flex flex-col justify-end items-center ml-4 cursor-pointer"
                  >
                    <span className="material-icons-outlined ">notifications</span>
                    <p className="text-[14px] font-semibold">알람</p>
                    <div className="flex absolute left-5 top-0 justify-center items-center text-white font-bold bg-primary rounded-[50%] text-[12px] w-5 h-5">
                      {matchedStudies.length}
                    </div>
                  </div>

                  <div
                    onClick={() => signOut()}
                    className="ml-2 flex flex-col justify-center items-center cursor-pointer"
                  >
                    <span className="material-icons-outlined mb-[1px]">logout</span>
                    <p className="text-[14px] font-semibold">로그아웃</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

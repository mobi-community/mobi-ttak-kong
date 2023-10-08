'use client'

import { Button } from '@/components'
import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import levelImage from '/public/image/level-image.png'
import { useRouter } from 'next/navigation'
import { StudyAppliedCardProps } from '..'
import { StudyAppliedEmptyDataCard } from '../StudyAppliedEmptyDataCard/StudyAppliedEmptyDataCard'

export const StudyAppliedCard = ({ studyDatas }: StudyAppliedCardProps) => {
  const router = useRouter()
  const onClickToDetailPage = (id: number) => {
    router.push(`/mystudy/applied/${studyDatas._id}?appliedDataId=${id}`)
  }

  return (
    <div className=" w-[950px] bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[30px] mb-[40px] gap-x-[40px]">
      {studyDatas.isAppliedStudy.map((studyData) => (
        <div key={studyData._id} className="w-[400px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px]">
          <div className="mb-2 font-bold text-[16px] text-primary-gray200">{studyData.field}</div>
          <div className="bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white inline-block rounded-[20px]">
            {studyData.detailField}
          </div>
          <div className="mt-[18px] flex flex-row items-center h-[35px] ">
            <Image src={defaultProfile} alt="임시 이미지" width={45} height={40} />
            <div>
              <div className="ml-[15px] text-[14px] font-bold">{studyData.title}</div>
              <div className="ml-[15px] mt-1 flex flex-row">
                <Image src={levelImage} alt="임시 이미지" width={20} height={10} />
                <div className="ml-1 flex items-center text-[13px]">{studyData.level}</div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] text-primary-gray200 text-[13px]">{studyData.content}</div>
          <div className="flex flex-row text-[13px] mt-3 font-semibold">
            <p className="">
              현재 인원 / 최소 인원 ({studyData.nowMemberCount}/ {studyData.minMemberCount})
            </p>
          </div>
          <div>
            <p className="text-[13px] mt-3 font-semibold">{studyData.isInPerson ? '대면 스터디' : '비대면 스터디'}</p>
            <p className="text-[13px] ">장소 : {studyData.location}</p>
          </div>
          <div className="flex justify-end mt-[20px]">
            <Button
              onClick={() => {
                onClickToDetailPage(studyData.id)
              }}
              variant={'secondary'}
              fontSize={'sm'}
              className="w-[120px] h-[30px] rounded-[20px]"
            >
              자세히 보러가기
            </Button>
          </div>
        </div>
      ))}
      {studyDatas.isAppliedStudy.length % 2 === 1 && <StudyAppliedEmptyDataCard />}
    </div>
  )
}

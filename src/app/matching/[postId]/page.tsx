'use client'

import { StudyDataType } from '@/types'
import { StudyMatchingDetailPageProps } from '.'
import { useStudyQuery, useUserMatchingDataQuery } from '../_states'
import levelImage from '/public/image/level-image.png'
import Image from 'next/image'

const StudyMatchingDetailPage = ({ params }: StudyMatchingDetailPageProps) => {
  const { data: studyData } = useStudyQuery()
  const { data: userData } = useUserMatchingDataQuery()

  const matchedStudies = studyData?.filter((study) => {
    return userData?.some((userMatch) => {
      return (
        study.field === userMatch.field &&
        study.detailField === userMatch.detailField &&
        study.level === userMatch.level &&
        study.isInPerson === userMatch.isInPerson &&
        study.location === userMatch.location
      )
    })
  })

  const detailInfo: StudyDataType | undefined = matchedStudies?.find((data) => data.id === params.postId)
  const isContentLong = detailInfo && detailInfo.content.length >= 250

  return (
    <div
      className={
        isContentLong
          ? 'h-auto flex justify-center items-center  bg-primary-50'
          : 'h-[92vh] flex justify-center items-center  bg-primary-50'
      }
    >
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className=" w-[1000px] bg-white rounded-[20px] p-10  mb-[40px] ">
          <div className="flex flex-row items-center mt-4 gap-1">
            <div className=" bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] inline-block shadow-md">
              <p>{detailInfo?.field}</p>
            </div>
            <div className=" bg-primary-50 px-3 py-1 text-[12px] inline-flex font-semibold text-primary-black rounded-[20px] gap-[1px] shadow-md">
              <Image src={levelImage} alt="등급 이미지" width={20} height={10} />
              <p>{detailInfo?.level}</p>
            </div>
          </div>

          <div className=" mt-5 text-primary-gray939 text-[12px] font-medium">{detailInfo?.detailField}</div>
          <div className=" text-black text-[24px] font-bold">{detailInfo?.title}</div>
          <div className=" mt-2 text-black text-[12px] font-bold">
            현재 인원 / 최소 인원 ({detailInfo?.nowMemberCount} / {detailInfo?.minMemberCount})
          </div>
          <div className=" mt-5 text-black text-[12px] font-bold">
            {detailInfo?.isInPerson ? '대면 스터디' : '비대면 스터디'}
          </div>
          <div className=" text-black text-[12px] font-medium">장소 : {detailInfo?.location}</div>
          {detailInfo ? (
            <div
              className="bg-primary-50 px-7 py-10 mt-5 text-black text-[14px] font-normal rounded-[20px] shadow-md"
              dangerouslySetInnerHTML={{ __html: detailInfo.content }}
            />
          ) : null}
          <div className="flex justify-center mt-5 "></div>
        </div>
      </div>
    </div>
  )
}

export default StudyMatchingDetailPage

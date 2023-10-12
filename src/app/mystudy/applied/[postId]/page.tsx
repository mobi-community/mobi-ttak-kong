'use client'

import { Button } from '@/components'
import levelImage from '/public/image/level-image.png'
import Image from 'next/image'
import { StudyAppliedDetailType } from '.'
import { useAppliedStudyQuery } from '../_states'

const StudyAppliedDetailPage = ({ params }: StudyAppliedDetailType) => {
  const { data: appliedStudyData } = useAppliedStudyQuery()
  const studyData = appliedStudyData?.find((data) => data.id === params.postId)

  const { field, level, detailField, title, nowMemberCount, minMemberCount, isInPerson, location, content } =
    studyData || {}

  const isContentLong = studyData && studyData.content.length >= 250

  return (
    <div className={`${isContentLong ? 'h-auto' : 'h-[92vh]'} flex justify-center items-center  bg-primary-50`}>
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className=" w-[1000px] bg-white rounded-[20px] p-10 mt-[50px]  mb-[40px] ">
          <div className="flex flex-row items-center mt-4">
            <div className=" bg-primary-300 px-3 py-1 text-[12px] font-semibold text-white rounded-[20px] inline-block">
              <p>{field}</p>
            </div>
            <div className=" bg-primary-50 px-3 py-1 text-[12px] inline-flex font-semibold text-primary-black rounded-[20px] gap-[1px]">
              <Image src={levelImage} alt="등급 이미지" width={20} height={10} />
              <p>{level}</p>
            </div>
          </div>

          <div className=" mt-5 text-primary-gray939 text-[12px] font-medium">{detailField}</div>
          <div className=" text-black text-[24px] font-bold">{title}</div>
          <div className=" mt-2 text-black text-[12px] font-bold">
            현재 인원 / 최소 인원 ({nowMemberCount} / {minMemberCount})
          </div>
          <div className=" mt-5 text-black text-[12px] font-bold">{isInPerson ? '대면 스터디' : '비대면 스터디'}</div>
          <div className=" text-black text-[12px] font-medium">장소 : {location}</div>
          {content ? (
            <div
              className="bg-primary-50 px-7 py-10 mt-5 text-black text-[14px] font-normal rounded-[20px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : null}
          <div className="flex justify-center mt-5 ">
            {/* 안내 모달 뜨기 */}
            <Button variant={'secondary'} className="w-[220px] rounded-[20px] mt-2 mb-4">
              스터디 지원 취소하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyAppliedDetailPage

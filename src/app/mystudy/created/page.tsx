'use client'

import { useRouter } from 'next/navigation'
import { useCreatedStudies } from './_states'
import { studyCreatedConstants } from '@/constants'
import { StudyCreatedCard, StudyCreatedEmptyCard } from './_components'

export default function StudyCreatedPage() {
  const router = useRouter()
  const { data, isLoading, isError } = useCreatedStudies()

  const onClickToMyCreatedStudy = () => {
    router.push('/mystudy/applied')
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  return (
    <div
      className={`flex justify-center items-center bg-primary-50 ${data.length >= 3 ? 'h-auto pt-[70px]' : 'h-[92vh]'}`}
    >
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className="flex flex-row justify-start items-center ml-10 font-semibold">
          <div className="bg-white px-7 py-3 rounded-t-[20px]">내가 만든 스터디</div>

          <div
            onClick={onClickToMyCreatedStudy}
            className="bg-primary-100 px-7 py-3 rounded-t-[20px] border border-b-0 border-primary-gray939 border-opacity-40 text-primary-gray939 transition-all duration-300 hover:bg-primary-300 hover:text-white cursor-pointer"
          >
            내가 지원한 스터디
          </div>
        </div>
        <div className=" w-[1000px] bg-white rounded-[40px] ">
          <div
            className="ml-10 mt-5 text-primary-gray939 text-[12px] font-medium"
            dangerouslySetInnerHTML={{ __html: studyCreatedConstants.description }}
          />
          <div className="flex flex-row flex-wrap justify-center items-center pb-[30px] y-10 mb-[40px] gap-x-[40px]">
            {data.map((data) => (
              <StudyCreatedCard key={data.id} studyData={data} />
            ))}
            {data.length === 0 || (data.length % 2 === 1 && <StudyCreatedEmptyCard />)}
          </div>
        </div>
      </div>
    </div>
  )
}

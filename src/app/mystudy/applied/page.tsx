'use client'
import { useRouter } from 'next/navigation'
import { StudyAppliedCard } from './_components'
import { userAppliedStudyData } from '@/mocks'
import { StudyAppliedEmptyDataCard } from './_components/StudyAppliedEmptyDataCard/StudyAppliedEmptyDataCard'

export default function StudyAppliedPage() {
  const studyData = userAppliedStudyData

  const router = useRouter()

  const onClickToMyCreatedStudy = () => {
    router.push('/mystudy/created')
  }

  return (
    <div
      className={
        studyData.length >= 3
          ? 'h-auto flex justify-center items-center pt-[70px] bg-primary-50'
          : 'h-[92vh] flex justify-center items-center bg-primary-50'
      }
    >
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <div className="flex flex-row justify-start items-center ml-10 font-semibold">
          <div
            onClick={onClickToMyCreatedStudy}
            className="bg-primary-100 px-7 py-3 rounded-t-[20px] border border-b-0 border-primary-gray939 border-opacity-40 text-primary-gray939 transition-all duration-300 hover:bg-primary-300 hover:text-white cursor-pointer"
          >
            내가 만든 스터디
          </div>

          <div className="bg-white px-7 py-3 rounded-t-[20px]">내가 지원한 스터디</div>
        </div>
        <div className=" w-[950px] bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[30px] mb-[40px] gap-x-[40px]">
          {studyData.length > 0 &&
            studyData.map((data) => (
              <StudyAppliedCard
                key={data.id}
                id={data.id}
                field={data.field}
                detailField={data.detailField}
                title={data.title}
                content={data.content}
                minMemberCount={data.minMemberCount}
                nowMemberCount={data.nowMemberCount}
                level={data.level}
                isInPerson={data.isInPerson}
                location={data.location}
                isClosed={data.isClosed}
              />
            ))}
          {studyData.length === 0 || (studyData.length % 2 === 1 && <StudyAppliedEmptyDataCard />)}
        </div>
      </div>
    </div>
  )
}

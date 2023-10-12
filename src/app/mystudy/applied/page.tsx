'use client'
import { useRouter } from 'next/navigation'
import { StudyAppliedCard, StudyAppliedEmptyDataCard } from './_components'
import { useAppliedStudyQuery } from './_states'

const StudyAppliedPage = () => {
  const router = useRouter()
  const { data: studyData } = useAppliedStudyQuery()

  const onClickToMyCreatedStudy = () => {
    router.push('/mystudy/created')
  }

  if (!studyData) return
  return (
    <div
      className={`flex justify-center items-center bg-primary-50 ${
        studyData.length >= 3 ? 'h-auto pt-[70px]' : 'h-[92vh]'
      }`}
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
          {studyData.length && studyData.map((data) => <StudyAppliedCard key={data.id} studyData={data} />)}
          {!studyData.length || (studyData.length % 2 === 1 && <StudyAppliedEmptyDataCard />)}
        </div>
      </div>
    </div>
  )
}

export default StudyAppliedPage

'use client'

import { MatchingCard, MatchingLoading, NoMatchingCard } from './_components'
import { useStudyQuery, useUserMatchingDataQuery } from './_states'

const StudyMatchingPage = () => {
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

  if (!matchedStudies) return
  return (
    <div className={`${matchedStudies.length < 3 ? 'h-[92vh]' : 'h-auto'} bg-primary-50 flex flex-col px-[100px]`}>
      {!matchedStudies ? (
        <MatchingLoading />
      ) : (
        <div>
          <div className="flex justify-start text-[26px] font-bold pt-[70px] pb-[30px]">스터디 매칭 현황</div>
          <div
            className={`${
              matchedStudies.length === 0 || matchedStudies.length === 1 ? 'h-[500px]' : 'h-auto'
            } bg-white flex flex-row flex-wrap justify-center items-center rounded-[40px] pb-[40px] mb-[40px] gap-x-[120px]`}
          >
            {matchedStudies.length > 0 &&
              matchedStudies.map((data) => <MatchingCard key={data.id} MatchingStudyData={data} />)}
            {matchedStudies.length % 2 === 1 && <NoMatchingCard />}
          </div>
        </div>
      )}
    </div>
  )
}

export default StudyMatchingPage

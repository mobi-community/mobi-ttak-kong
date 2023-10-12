import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import { Button } from '@/components'
import { MatchingCardProps } from '.'
import { useRouter } from 'next/navigation'

export const MatchingCard = ({ MatchingStudyData }: MatchingCardProps) => {
  const router = useRouter()
  const onClickToMatchingPage = () => {
    router.push(`/matching/${MatchingStudyData.id}`)
  }
  const { field, title, content } = MatchingStudyData

  return (
    <div className="w-[500px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px] shadow-md">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">{field}</div>
      <div className="flex flex-row items-center h-[35px]">
        <Image src={defaultProfile} alt="임시 이미지" width={35} height={40} />
        <div className="ml-[15px] font-bold">{title}</div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="flex justify-center mt-[20px]">
        <Button
          onClick={onClickToMatchingPage}
          variant={'secondary'}
          className="w-[140px] h-[35px] rounded-[20px] mt-10 shadow-md"
        >
          자세히 보러가기
        </Button>
      </div>
    </div>
  )
}

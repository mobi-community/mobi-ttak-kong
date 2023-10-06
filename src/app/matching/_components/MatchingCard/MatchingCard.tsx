import Image from 'next/image'
import defaultProfile from '/public/image/default-profile-image.png'
import { Button } from '@/components'
import { MatchingCardProps } from '.'

export const MatchingCard = ({ label, title, content }: MatchingCardProps) => {
  return (
    <div className="w-[500px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px]">
      <div className="mb-2 font-bold text-[16px] text-primary-gray200">{label}</div>
      <div className="flex flex-row items-center h-[35px]">
        <Image src={defaultProfile} alt="임시 이미지" width={35} height={40} />
        <div className="ml-[15px] font-bold">{title}</div>
      </div>
      <div className="mt-[20px] text-primary-gray200 text-[13px]">{content}</div>
      <div className="flex justify-between mt-[20px]">
        <Button className="w-[140px] h-[35px] rounded-[20px]">지원하기</Button>
        <Button variant={'secondary'} className="w-[140px] h-[35px] rounded-[20px]">
          자세히 보러가기
        </Button>
      </div>
    </div>
  )
}
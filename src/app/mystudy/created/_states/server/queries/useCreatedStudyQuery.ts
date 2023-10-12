import { QUERY_KEYS } from '@/constants'
import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => axios.get<StudyDataType[] | undefined>(QUERY_KEYS.getCreatedStudies).then(({ data }) => data)

export const useCreatedStudyQuery = () => {
  return useQuery([QUERY_KEYS.getCreatedStudies], fetcher)
}

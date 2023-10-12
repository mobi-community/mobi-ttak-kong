import { QUERY_KEYS } from '@/constants'
import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => axios.get<StudyDataType[] | undefined>(QUERY_KEYS.getAppliedStuies).then(({ data }) => data)

export const useAppliedStudyQuery = () => {
  return useQuery([QUERY_KEYS.getAppliedStuies], fetcher)
}

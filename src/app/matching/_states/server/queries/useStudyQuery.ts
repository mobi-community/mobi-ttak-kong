import { QUERY_KEYS } from '@/constants'
import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => axios.get<StudyDataType[] | undefined>(QUERY_KEYS.getStudies).then(({ data }) => data)

export const useStudyQuery = () => {
  return useQuery([QUERY_KEYS.getStudies], fetcher)
}

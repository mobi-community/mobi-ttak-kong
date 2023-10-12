import { QUERY_KEYS } from '@/constants'
import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => axios.get<StudyDataType[] | undefined>(QUERY_KEYS.getUserData).then(({ data }) => data)

export const useUserMatchingDataQuery = () => {
  return useQuery([QUERY_KEYS.getUserData], fetcher)
}

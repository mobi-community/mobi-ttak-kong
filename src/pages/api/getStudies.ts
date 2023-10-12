import { StudyData } from '@/mocks'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'GET') {
    response.status(200).json(StudyData)
  } else {
    response.status(405).end()
  }
}

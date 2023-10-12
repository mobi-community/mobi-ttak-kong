import { userCreatedStudyData } from '@/mocks'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'GET') {
    response.status(200).json(userCreatedStudyData)
  } else {
    response.status(405).end()
  }
}

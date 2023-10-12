import { userMatchingData } from '@/mocks'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'GET') {
    response.status(200).json(userMatchingData)
  } else {
    response.status(405).end()
  }
}

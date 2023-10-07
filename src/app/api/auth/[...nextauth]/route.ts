import NextAuth from 'next-auth'
import NaverProvider from 'next-auth/providers/naver'
import KakaoProvider from 'next-auth/providers/kakao'

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET || '',
    }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID || '',
    //   clientSecret: process.env.KAKAO_SECRET || '',
    // }),
  ],
})

export { handler as GET, handler as POST }

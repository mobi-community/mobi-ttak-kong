import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const googleClientId = process.env.GOOGLE_CLIENT_ID || ''
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || ''

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
})

export { handler as GET, handler as POST }

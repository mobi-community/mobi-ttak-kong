export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '딱콩',
  description: '딱 맞는 스터디만을 매칭해주는 딱콩!',
  header: [
    {
      title: '홈',
      href: '/',
    },
    {
      title: '내 스터디',
      href: '/mystudy/created',
    },
    {
      title: '매칭 현황',
      href: '/matching',
    },
    {
      title: '스터디 만들기',
      href: '/study/create',
    },
  ],
}

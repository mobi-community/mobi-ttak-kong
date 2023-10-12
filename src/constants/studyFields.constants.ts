import type { StudyDetailFieldsProps, StudyFieldsProps } from '@/types'

export const STUDY_FIELDS: StudyFieldsProps[] = [
  '언어/외국어',
  'IT/프로그래밍',
  '자격증/시험',
  '커리어/직무',
  '이직/면접',
  '독서/글쓰기',
  '기타',
]

export const STUDY_DETAIL_FIELDS: StudyDetailFieldsProps = {
  '언어/외국어': [
    '영어',
    '토익/토플 등 외국어 시험 준비',
    '역사/한국사 시험 준비',
    '일본어',
    '중국어',
    '스페인어',
    '프랑스어',
    '이탈리아어',
    '독일어',
    '네덜란드어',
    '덴마크어',
    '노르웨이어',
    '기타',
  ],
  'IT/프로그래밍': [
    '프론트엔드 (HTML, CSS, JavaScript)',
    '백엔드 (Java, Python, Node.js)',
    '앱 개발 (Android, iOS)',
    '데이터 사이언스, 머신러닝',
    'IT 계열 자격증 준비',
    '자료구조/알고리즘',
    '기타',
  ],
  '자격증/시험': ['공무원 시험', '금융 자격증 (FP, CFA 등)', '기타'],
  '커리어/직무': ['스타트업 창업', '마케팅, 광고', '인사, 채용, 팀 빌딩', '재무, 회계', '기타'],
  '이직/면접': ['이직/면접', '기타'],
  '독서/글쓰기': ['독서/글쓰기', '소설, 에세이 독서모임', '책 리뷰, 북클럽', '기타'],
  기타: ['기타'],
}

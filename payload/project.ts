import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '자체 스크립트 MagicScript 개발',
      startedAt: '2025-11',
      endedAt: '2025-12',
      where: '개인',
      descriptions: [
        {
          content: '스크립트의 동작 원리를 더 이해해보기 위해 시작한 프로젝트',
        },
        {
          content: 'JS와 유사하도록 렉시컬 환경을 구축하였고, 추상 구문 트리 형태로 Parsing을 진행',
        },
        {
          content: 'Github: ',
          postHref: 'https://github.com/goldfrosch/MagicScript',
        },
        {
          content: 'Blog: ',
          postHref: 'https://goldfrosch.tistory.com/132',
        },
      ],
    },
    {
      title: '언리얼 - AI 협업 컨텐츠 개발',
      startedAt: '2024-12',
      endedAt: '2025-06',
      where: '원티드 포텐업',
      descriptions: [
        {
          content: 'AI 개발자와 협업해서 만드는 컨텐츠 개발로, 다른 언어로 클라이언트를 개발 진행',
        },
        {
          content:
            '프레임워크에 의존하지 않고 핵심 시스템을 직접 구현하며, 저수준 원리 이해 중심의 개발 역량을 강화',
        },
        {
          content: 'AI를 활용한 컨텐츠 개발로 AI에 대한 이해도가 상승',
        },
        {
          content: '이후 최종 프로젝트의 내부 평가에서 우수상(2등)을 수상',
        },
        {
          content: '자료: ',
          postHref: 'https://drive.google.com/file/d/1X5VLkU0xSXiQIwEkFwoDU3pOqlKB-_tN/view',
        },
      ],
    },
    {
      title: '스트리머 컨텐츠 제작 - 트윕 연동',
      startedAt: '2022-01',
      endedAt: '2022-12',
      where: '개인',
      descriptions: [
        {
          content: '여유 시간을 활용해 게임 스트리머에게 트윕 연동 컨텐츠 제공',
        },
        {
          content: 'twip api 호출에 대한 이벤트 처리',
        },
        {
          content: '기획과 개발을 같이 수행해 방송 컨텐츠에 대한 비즈니스 이해도 증가',
        },
        {
          content: '개발 결과 영상: ',
          postHref: 'https://www.youtube.com/watch?v=YBGi_7UC2Bc',
        },
      ],
    },
  ],
};

export default project;

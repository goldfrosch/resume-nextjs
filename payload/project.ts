import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '대기, 픽업 서비스 런칭 TF',
      startedAt: '2023-01',
      endedAt: '2023-03',
      where: '캐치테이블 국내 B2C 앱',
      descriptions: [
        {
          content: '캐치테이블 B2C 대기, 픽업 런칭',
          descriptions: [
            {
              content: '"전국민 미식앱" 캐치테이블, 픽업·웨이팅 통합 솔루션 오픈',
              href: 'https://www.mt.co.kr/future/2023/03/29/2023032909433767325',
            },
          ],
        },
        {
          content:
            '비즈니스 요구 사항에 따른 픽업 서비스 전반을 개발 및 서비스 확장을 위한 매장 정보 페이지 전체 리팩토링으로 이후 서비스 확장 가능한 구조로 변경',
        },
        {
          content:
            '프로젝트 클라이언트를 리드하면서 팀원 일정 관리, 소통으로 프로젝트 전반에 대한 이해도 상승과 협업 이해도 상승',
        },
        {
          content:
            '기존에 불필요하게 전역에 전부 저장하는 구조를 바꾸기 위해 새로운 상태관리 라이브러리 Jotai 도입',
        },
      ],
    },
    {
      title: '캐치테이블 앱 메모리 부족 장애 해결',
      startedAt: '2023-01',
      endedAt: '2023-01',
      where: '캐치테이블 국내 B2C 앱',
      descriptions: [
        {
          content: '캐치테이블 앱 내에서 불규칙하게 백지화가 되는 현상 수정',
        },
        {
          content: 'OOM 이슈 메모리 디버그 분석 및 원인 해결',
        },
        {
          content: '불필요한 Memoization 최소화',
        },
        {
          content: 'Windowing 기법 제시 및 도입 시도',
        },
        {
          content: '회고글: ',
          postHref: 'https://goldfrosch.tistory.com/50',
        },
      ],
    },
    {
      title: '피트스탑: 배포 완전 자동화',
      startedAt: '2023-06',
      endedAt: '2023-06',
      where: '캐치테이블 국내 B2C 앱',
      descriptions: [
        {
          content: '배포 프로세스 중 프론트, 백엔드 구조 분리 및 배포 완전 자동화 수행',
          descriptions: [
            {
              content: '기존의 JSP 의존성 제거',
            },
          ],
        },
        {
          content: 'aws cloudfront 배포 방식 변경으로 배포 시간 대폭 감소',
          descriptions: [
            {
              content: '약 8 ~ 15분 -> 1 ~ 3분으로 개선',
            },
          ],
        },
        {
          content: 'github-action와 slack-api로 배포부터 멘션까지 완전 자동화를 구현',
        },
      ],
    },
    {
      title: '원링크, 딥링크 연동 및 광고 대응',
      startedAt: '2022-04',
      endedAt: '2023-04',
      where: '캐치테이블 국내 B2C 앱',
      descriptions: [
        {
          content: '웹사이트 및 안드로이드에 Appsflyer, Adjust 캐치테이블 웹앱 원링크 적용',
        },
        {
          content: '모바일 환경에서 웹 사이트 접속 시 바로 앱으로 이동하는 딥링크 적용',
        },
        {
          content: '마케팅 데이터를 위한 로그 데이터 설계 및 수집',
        },
      ],
    },
    {
      title: '글로벌 서비스 유지보수',
      startedAt: '2023-09',
      endedAt: '2023-12',
      where: '캐치테이블 글로벌 B2C 앱',
      descriptions: [
        {
          content: '캐치테이블 글로벌 SEO 시멘틱 마크업 개선 및 가이드라인 문서화',
        },
        {
          content:
            '큐레이션, 검색 페이지 UI/UX 개선 및 주소 변경으로 SEO 점수 100점 달성 (23.12 기준)',
        },
        {
          content: '검색 페이지 내에 카테고리 query-param 형식으로 변경해 url 공유 기능 추가',
        },
      ],
    },
    {
      title: '개인화 추천',
      startedAt: '2022-12',
      endedAt: '2022-12',
      where: '캐치테이블 국내 B2C 앱',
      descriptions: [
        {
          content: '자체 및 빅데이터 기반 매장 추천 시스템 연동',
          descriptions: [
            {
              content:
                'AB 테스트 수행으로 자체 로직 1.5%, 빅데이터 기반 로직 2.5%로 예약률 상승 지표에 기여',
            },
            { content: '자체 매장 데이터 redis 캐시 재갱신을 위한 internal-api 추가' },
          ],
        },
        { content: '매장 리스트 및 카드 컴포넌트화로 재사용성 확보' },
      ],
    },
    {
      title: 'NFT 거래 사이트 개발',
      startedAt: '2021-11',
      endedAt: '2021-12',
      where: '라온스토리',
      descriptions: [
        {
          content: 'NFT 매장 사이트 개발 및 crypto 라이브러리 연동',
        },
        { content: 'nft 이벤트 완료 시 웹 서버로 기록을 전달 하는 express 기반 브릿지 서버 구현' },
      ],
    },
    {
      title: '세탁물, 명품 관리 어드민 사이트 개발',
      startedAt: '2021-07',
      endedAt: '2021-09',
      where: '라온스토리',
      descriptions: [
        {
          content: '세탁물 처리 기록 xlsx 및 pdf 로 출력하는 기능 추가',
        },
        { content: '명품 수선 처리 현황 어드민 사이트 개발' },
      ],
    },
    {
      title: '언리얼 - AI 협업 컨텐츠 개발',
      startedAt: '2025-04',
      endedAt: '2025-06',
      where: '원티드 포텐업',
      descriptions: [
        {
          content: '농사 시뮬레이션 게임 개발에 필요한 UI, 아이템, 퀘스트 등 코어 시스템 개발',
        },
        {
          content: '클라이언트 리드를 담당해 AI 팀과의 소통 및 일정 조율을 같이 담당',
        },
        {
          content:
            'LLM 기반의 개인 활동 일기 컨텐츠 개발을 위한 행동 로그 데이터 모델 설계 및 적용',
        },
        {
          content:
            'AI를 활용한 컨텐츠 개발로 AI에 대한 이해도가 상승하고, 내부 평가에서 우수상(2등)을 수상',
        },
        {
          content: '자료: ',
          postHref:
            'https://drive.google.com/file/d/1gUoTWLiHUr0LCWwr0_-rUf5E312-aZvy/view?usp=sharing',
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

import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '캐치테이블',
      positions: [
        {
          title: '캐치테이블 글로벌 / 프론트엔드 개발자',
          startedAt: '2023-09',
          endedAt: '2024-01',
          descriptions: [
            '캐치테이블 글로벌 서비스 프론트 화면 구현',
            '캐치테이블 글로벌 SEO 점수 개선',
            '매장 검색 리스트 UI/UX 개선 및 SEO 점수 개선',
            '내부 관리 어드민 및 백오피스 관리 기능 개발',
            '레거시 코드 개선 및 성능 개선',
          ],
          skillKeywords: ['React', 'Typescript', 'Redux', 'Tanstack Query'],
        },
        {
          title: 'B2C 캐치테이블 / 프론트엔드 개발자',
          startedAt: '2023-01',
          endedAt: '2023-09',
          descriptions: [
            '대기 및 픽업 서비스 런칭',
            '회원 서비스 개발 및 유지보수',
            '결제, 예약 프론트 화면 구현 및 유지보수',
            '레거시 코드 개선 및 성능 개선',
            '배포 프로세스 개선 및 완전 자동화',
          ],
          skillKeywords: [
            'React',
            'Typescript',
            'Redux-toolkit',
            'Tanstack Query',
            'vanilla-extract',
            'Jotai',
            'AWS',
            'github-action',
          ],
        },
        {
          title: 'B2C 캐치테이블 / 소프트웨어 개발자',
          startedAt: '2022-03',
          endedAt: '2022-12',
          descriptions: [
            '회원, 커뮤니티, 리뷰 서비스 기능 추가 및 유지보수',
            '개인화 추천 매장 기능 개발',
            '유저 행동 데이터 모델 설계 및 연동',
            'AB 테스트 도입 및 연동',
            '원링크, 딥링크 기능 추가 및 유지보수',
            '서스테이닝 업무 자동화를 위한 문서화',
          ],
          skillKeywords: [
            'React',
            'Typescript',
            'Redux-toolkit',
            'Spring',
            'Java',
            'Redis',
            'RabbitMq',
            'Android Studio',
            'Google Cloud Platform',
            'Google Analytics',
            'Google Optimize',
          ],
        },
      ],
    },
    {
      title: '라온스토리',
      positions: [
        {
          title: '프론트엔드 개발자',
          startedAt: '2021-06',
          endedAt: '2022-03',
          descriptions: [
            '세탁물 관리 플랫폼 관리 엑셀 시트 출력 기능 개발',
            '명품 관리 플랫폼 어드민 툴 개발',
            '블록체인 기반 서명 기능 추가',
            'NFT 매장 사이트 및 브릿지 서버 개발',
          ],
          skillKeywords: [
            'React',
            'Typescript',
            'Redux-Saga',
            'styled-component',
            'node.js',
            'express.js',
          ],
        },
      ],
    },
  ],
};

export default experience;

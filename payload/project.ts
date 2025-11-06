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
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;

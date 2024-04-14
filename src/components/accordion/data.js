// const : 한번 정하면 못바꿈
const data =
[
  {
    id:'1',
    title:'리액트란 무엇인가?',
    content:'리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다'
  },
  {
    id:'2',
    title:'jsx란 무엇인가?',
    content:'JSX는 XML과 유사한 구문을 사용하여 문서 개체 모델 트리를 생성할 수 있는 JavaScript 확장입니다'
  },
  {
    id:'3',
    title:'리액트는 왜 사용하는가?',
    content:'웹 개발에 React.js를 사용하는 주요 이유 중 하나는 라이브러리에 최적화된 개발 인터페이스와 코딩 언어 때문입니다'
  },
  {
    id:'4',
    title:'아코디언 컴포넌트란?',
    content:'섹션의 중요한 세부 사항을 먼저 강조 표시하고 확장되면 더 많은 세부 정보를 표시하여 점진적으로 정보를 공개하는 컴포넌트'
  }
];


export  default data;   // data라는 변수를 이 파일의 기본 내보내기로 설정
// default는 한 파일에 하나만 가능

// js5
// 옛날 자바 스크립트는 <script src="자바스크립트 파일명"></script>
// 해당 자바스크립트 파일을 모두 복붙

// js6
// -> export / import
// 꼭 필요한 것만 복붙해가게 (웹성능을 위해서)
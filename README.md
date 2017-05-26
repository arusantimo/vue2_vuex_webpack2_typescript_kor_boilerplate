# vue2_vuex_webpack2_typescript_kor_boilerplate

### Base Core
- [TypeScript](https://www.typescriptlang.org/)
- [Vue](https://kr.vuejs.org/v2/api/)
- [Vuex](https://vuex.vuejs.org/kr/)

### Utilities
- [Axios](https://github.com/mzabriskie/axios)
- [ES6-Promise](https://github.com/stefanpenner/es6-promise)

### Build System
- [Webpack2](https://github.com/webpack/webpack) build를 위한 툴
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader)
  - [Ts Loader](https://github.com/TypeStrong/ts-loader)
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [SCSS Loader](https://github.com/webpack-contrib/sass-loader)
  - [PostCSS Loader](https://github.com/postcss/postcss)
  - [Sass Resources Loader](https://github.com/shakacode/sass-resources-loader)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [Vue Loader](https://github.com/vuejs/vue-loader)
  - [Vue Style Loader](https://github.com/vuejs/vue-style-loader)
  - [Vue Template Loader](https://github.com/ktsn/vue-template-loader)

#### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [Express](https://github.com/expressjs/express)
- [Compression](https://github.com/expressjs/compression)
- [Body-parser](https://github.com/expressjs/body-parser)
- [Cookie-parser](https://github.com/expressjs/cookie-parser)
- [Morgan](https://github.com/expressjs/morgan)

#### Developer Experience
- [Typings](https://github.com/typings/typings) definition(*.d.ts)파일이 없는 외부 라이브러리를 위한 definition파일을 설치
- [tslint](https://github.com/palantir/tslint)

## 디렉토리 구조
```bash
.
├── dist                        #
├── conf                        # 구성(설정)을 위한 폴더
│   ├── webpack.config          # Webpack 설정 폴더
│   └── tslint                  # 타입스크립트 lint 설정 파일
├── node_modules                # Node Packages 모듈
├── src                         # 소스폴더
│   ├── app                     #
│   │ ├── components            # Components (재사용 가능한 Components).
│   │ ├── containers            # Containers
│   │ ├── models                # interface & type 파일
│   │ ├── assets                # assets 별도 관리
│   │ ├── styles                # styles 별도 관리
│   │ ├── store                 # vues.
│   │ └── routes.tsx            # Routes 파일.
│   ├── public                  # public 파일 모음
│   ├── server                  # Express 서버
│   ├── favicon.ico             # Favicon.
│   └── index.html              # static html 파일.
├── typings                     # typings 작성한 전역 유형 정의.
├── .gitignore                  # git 무시할 파일을 선언.
├── package.json                # Package 설정파일.
├── README.md                   # This file
└── tsconfig.json               # TypeScript 설정파일.
```
## Usage

모든 명령어는 개발환경이 기본입니다. <br>
`NODE_ENV`를`production`으로 설정하거나 아래의 단축키를 사용할 수 있습니다.

```bash
# Running (개발모드)
$ npm run dev

# production (배포작업)
$ npm run build
$ npm run server

# 테스트(미완성)
$ npm test
```

## 추가할 기능
- 테스트 (e2e, unit..)

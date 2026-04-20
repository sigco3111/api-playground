# 📡 API Playground

> 실시간 공개 API 실험실 — 무료 공개 API 100+를 한 곳에서 테스트하세요.

API 키 없이, 백엔드 없이, 완전 무료로 동작하는 오픈소스 API 플레이그라운드입니다. 고양이 사진부터 날씨, 우주 사진, 환율, 코인 시세까지 — 다양한 공개 API를 브라우저에서 직접 호출하고 응답을 확인할 수 있습니다.

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| **100+ 무료 API** | API 키 없이 브라우저에서 바로 호출 가능한 공개 API |
| **29개 카테고리** | Animals, Space, Crypto, Finance, Weather 등 |
| **실시간 호출** | Send 버튼 하나로 API 요청 후 응답 즉시 확인 |
| **JSON 하이라이팅** | key / string / number / boolean 색상 구분 |
| **코드 스니펫** | cURL, JavaScript Fetch, Python 자동 생성 + 1클릭 복사 |
| **오늘의 랜덤 API** | 매일 다른 API를 추천하는 히어로 섹션 |
| **카테고리 필터** | 카테고리별 API 필터링 |
| **실시간 검색** | 이름, 설명, 카테고리로 API 검색 |
| **반응형 디자인** | 모바일 / 태블릿 / 데스크탑 지원 |
| **다크 모드** | 눈이 편안한 다크 테마 기본 |

## 🚀 데모

**Live:** [https://api-playground-five.vercel.app](https://api-playground-five.vercel.app)

## 📋 지원 API 카테고리

| 카테고리 | 예시 API | 엔드포인트 |
|----------|---------|-----------|
| 🐾 Animals | Cat Facts, Random Dog, Shiba Inu, Fox, Duck | `catfact.ninja`, `dog.ceo`, `randomfox.ca` |
| 🎬 Entertainment | Star Wars, Rick & Morty, Pokémon, Trivia | `swapi.dev`, `pokeapi.co`, `opentdb.com` |
| 🍕 Food & Drink | Random Cocktail, Random Meal, Open Food Facts | `thecocktaildb.com`, `themealdb.com` |
| 🎮 Games | Rock Paper Scissors, Random Word | `rpsls.studentukrato.ru` |
| 🌍 Geography | All Countries, IP Geolocation, Universities | `restcountries.com`, `ipapi.co` |
| 📜 History | Today in History, Public Holidays | `history.muffinlabs.com`, `date.nager.at` |
| 🔢 Math | Math Facts, Pi Digits, Number Trivia | `numbersapi.com`, `api.pi.delivery` |
| 🎵 Music | iTunes Search, Song Lyrics | `itunes.apple.com`, `api.lyrics.ovh` |
| 📰 News | Hacker News, Wikipedia | `hacker-news.firebaseio.com`, `wikipedia.org` |
| 🔬 Science | Weather, Air Quality, Name Prediction | `open-meteo.com`, `genderize.io`, `agify.io` |
| 🚀 Space | NASA APOD, ISS Location, People in Space | `api.nasa.gov`, `open-notify.org` |
| ⚽ Sports | F1 Driver Standings, Race Schedule | `ergast.com` |
| 💻 Tech | GitHub Search, NPM, HTTPBin | `api.github.com`, `httpbin.org` |
| ⛅ Weather | Current Weather, 7-Day Forecast, Marine | `open-meteo.com` |
| 🛠️ Utilities | Delay Response, Status Code, Base64 | `httpbin.org` |
| 🎨 Art & Design | Random Color, Random User, Picsum | `thecolorapi.com`, `randomuser.me` |
| 📚 Books | Project Gutenberg, Open Library | `gutendex.com`, `openlibrary.org` |
| 🏳️ Countries | Flags, Population, Currency | `restcountries.com` |
| ₿ Crypto | Bitcoin Price, Trending Coins, Markets | `api.coingecko.com` |
| 📅 Dates & Time | World Time, Time Zones | `worldtimeapi.org` |
| 💰 Finance | Exchange Rate, Currency Convert | `exchangerate-api.com` |
| 😂 Jokes & Fun | Dad Jokes, Chuck Norris, Programming Jokes | `icanhazdadjoke.com`, `chucknorris.io` |
| 💬 Quotes | Random Quote, Ron Swanson, Kanye | `dummyjson.com`, `kanye.rest` |
| 📝 Text & Language | Translation, Lorem Ipsum | `mymemory.translated.net` |
| 🚗 Transport | Flight Data (OpenSky) | `opensky-network.org` |
| 👤 User Agent | User-Agent Check, Request Headers | `httpbin.org` |
| 🎲 Numbers | Random Number | `random.org` |

## 🛠️ 기술 스택

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Static Export)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime:** React 19
- **Hosting:** [Vercel](https://vercel.com/)
- **API Keys:** **없음** — 모든 API가 프론트엔드에서 직접 호출

## 📦 설치 & 실행

### 사전 요구사항

- Node.js 18+
- npm, yarn, 또는 pnpm

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/sigco3111/api-playground.git
cd api-playground

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 🌐 배포

### Vercel (권장)

GitHub 레포지토리를 Vercel에 연결하면 자동으로 배포됩니다. 별도 설정이 필요 없습니다.

```bash
# Vercel CLI로 직접 배포
npm i -g vercel
vercel --prod
```

### 정적 호스팅

Next.js 정적 export도 지원합니다:

```bash
# next.config.ts에 output: 'export' 추가 후
npx next build
# out/ 디렉토리를任意 정적 호스팅 서비스에 배포
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 글로벌 스타일 (CSS 변수, 커스텀 스크롤바, JSON 하이라이팅)
│   ├── layout.tsx           # 루트 레이아웃 (메타데이터, 다크 모드)
│   └── page.tsx             # 메인 페이지 (상태 관리, 필터링)
├── components/
│   ├── Header.tsx           # 상단 네비게이션 + 검색바
│   ├── DailyRandom.tsx      # "오늘의 랜덤 API" 히어로 섹션
│   ├── CategoryGrid.tsx     # 카테고리 필터 탭
│   ├── ApiCard.tsx          # API 카드 컴포넌트
│   ├── ApiDetail.tsx        # API 상세 모달 (호출, 응답, 코드 스니펫)
│   └── Footer.tsx           # 푸터
└── data/
    └── apis.ts              # API 데이터 (100+ 엔트리, 카테고리, 헬퍼 함수)
```

## 🔧 API 추가 방법

`src/data/apis.ts` 파일에 새 객체를 추가하면 됩니다:

```typescript
{
  id: "my-new-api",           // 고유 ID
  name: "My New API",         // 표시 이름
  description: "설명",        // 한국어 설명
  category: "utilities",      // 카테고리 ID (categories 배열에 정의된 것)
  endpoint: "https://...",    // API 엔드포인트
  method: "GET",              // HTTP 메서드
  responseExample: {          // 응답 예시 (any 타입)
    key: "value"
  }
}
```

### 새 카테고리 추가

```typescript
// categories 배열에 추가
{ id: "my-category", name: "My Category", icon: "🏷️", color: "from-red-500 to-orange-500" }
```

## ⚠️ 참고사항

- 모든 API는 **서드파티**에서 제공하는 무료 공개 API입니다
- 일부 API는 **CORS 정책**으로 인해 브라우저에서 직접 호출이 차단될 수 있습니다
  - 이 경우 cURL / Python 탭에서 제공하는 코드로 터미널에서 테스트 가능합니다
- API 응답 형식은 원본 서비스에 의해 결정되며, 변경될 수 있습니다
- `api.nasa.gov`은 `DEMO_KEY`를 사용하며, 요청 제한이 있을 수 있습니다

## 📄 라이선스

MIT License © 2025

## 🙏 크레딧

이 프로젝트는 다음 무료 공개 API 서비스들을 활용합니다:

- [catfact.ninja](https://catfact.ninja/) · [dog.ceo](https://dog.ceo/) · [randomfox.ca](https://randomfox.ca/)
- [swapi.dev](https://swapi.dev/) · [pokeapi.co](https://pokeapi.co/) · [rickandmortyapi.com](https://rickandmortyapi.com/)
- [restcountries.com](https://restcountries.com/) · [numbersapi.com](https://numbersapi.com/)
- [open-meteo.com](https://open-meteo.com/) · [api.nasa.gov](https://api.nasa.gov/)
- [coingecko.com](https://www.coingecko.com/) · [exchangerate-api.com](https://www.exchangerate-api.com/)
- [icanhazdadjoke.com](https://icanhazdadjoke.com/) · [chucknorris.io](https://api.chucknorris.io/)
- [httpbin.org](https://httpbin.org/) · 그 외 다수

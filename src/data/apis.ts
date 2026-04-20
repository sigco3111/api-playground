export interface ApiItem {
  id: string;
  name: string;
  description: string;
  category: string;
  endpoint: string;
  method: "GET" | "POST";
  responseExample: unknown;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  { id: "all", name: "전체", icon: "🌐", color: "from-blue-500 to-purple-500" },
  { id: "animals", name: "Animals", icon: "🐾", color: "from-amber-500 to-orange-500" },
  { id: "entertainment", name: "Entertainment", icon: "🎬", color: "from-pink-500 to-rose-500" },
  { id: "food", name: "Food & Drink", icon: "🍕", color: "from-yellow-500 to-red-500" },
  { id: "games", name: "Games", icon: "🎮", color: "from-indigo-500 to-purple-500" },
  { id: "geography", name: "Geography", icon: "🌍", color: "from-emerald-500 to-teal-500" },
  { id: "history", name: "History", icon: "📜", color: "from-amber-600 to-yellow-600" },
  { id: "math", name: "Math", icon: "🔢", color: "from-blue-500 to-cyan-500" },
  { id: "music", name: "Music", icon: "🎵", color: "from-violet-500 to-purple-500" },
  { id: "news", name: "News", icon: "📰", color: "from-slate-500 to-gray-600" },
  { id: "science", name: "Science", icon: "🔬", color: "from-green-500 to-emerald-500" },
  { id: "space", name: "Space", icon: "🚀", color: "from-purple-600 to-indigo-600" },
  { id: "sports", name: "Sports", icon: "⚽", color: "from-lime-500 to-green-500" },
  { id: "technology", name: "Tech", icon: "💻", color: "from-cyan-500 to-blue-500" },
  { id: "weather", name: "Weather", icon: "⛅", color: "from-sky-400 to-blue-500" },
  { id: "utilities", name: "Utilities", icon: "🛠️", color: "from-gray-500 to-slate-500" },
  { id: "art", name: "Art & Design", icon: "🎨", color: "from-fuchsia-500 to-pink-500" },
  { id: "books", name: "Books", icon: "📚", color: "from-amber-700 to-yellow-700" },
  { id: "countries", name: "Countries", icon: "🏳️", color: "from-teal-500 to-cyan-500" },
  { id: "crypto", name: "Crypto", icon: "₿", color: "from-orange-500 to-yellow-500" },
  { id: "finance", name: "Finance", icon: "💰", color: "from-green-600 to-emerald-600" },
  { id: "images", name: "Images", icon: "🖼️", color: "from-pink-400 to-rose-400" },
  { id: "jokes", name: "Jokes & Fun", icon: "😂", color: "from-yellow-400 to-amber-400" },
  { id: "quotes", name: "Quotes", icon: "💬", color: "from-purple-400 to-violet-400" },
  { id: "text", name: "Text & Language", icon: "📝", color: "from-slate-400 to-zinc-400" },
  { id: "transport", name: "Transport", icon: "🚗", color: "from-red-400 to-orange-400" },
  { id: "user", name: "User Agent", icon: "👤", color: "from-indigo-400 to-blue-400" },
  { id: "numbers", name: "Numbers", icon: "🎲", color: "from-cyan-400 to-teal-400" },
];

export const apis: ApiItem[] = [
  // ═══ ANIMALS ═══
  { id: "cat-fact", name: "Cat Facts", description: "랜덤 고양이 사실", category: "animals", endpoint: "https://catfact.ninja/fact", method: "GET", responseExample: { fact: "Cats have five toes on their front paws.", length: 45 } },
  { id: "dog-image", name: "Random Dog", description: "랜덤 강아지 사진", category: "animals", endpoint: "https://dog.ceo/api/breeds/image/random", method: "GET", responseExample: { message: "https://images.dog.ceo/breeds/...", status: "success" } },
  { id: "fox-image", name: "Random Fox", description: "랜덤 여우 사진", category: "animals", endpoint: "https://randomfox.ca/floof/", method: "GET", responseExample: { image: "https://randomfox.ca/images/1.jpg" } },
  { id: "duck-image", name: "Random Duck", description: "랜덤 오리 사진", category: "animals", endpoint: "https://random-d.uk/api/random?type=jpg", method: "GET", responseExample: { url: "https://random-d.uk/api/randomimg/1.jpg" } },
  { id: "bored-api", name: "Bored API", description: "할 일 추천", category: "animals", endpoint: "https://bored-api.appbrewery.com/random", method: "GET", responseExample: { activity: "Learn a new language", type: "education", participants: 1 } },
  // ═══ ENTERTAINMENT ═══
  { id: "swapi-people", name: "Star Wars Character", description: "스타워즈 캐릭터", category: "entertainment", endpoint: "https://swapi.dev/api/people/1", method: "GET", responseExample: { name: "Luke Skywalker", height: "172" } },
  { id: "swapi-planets", name: "Star Wars Planets", description: "스타워즈 행성", category: "entertainment", endpoint: "https://swapi.dev/api/planets/1", method: "GET", responseExample: { name: "Tatooine", climate: "arid" } },
  { id: "rick-morty", name: "Rick & Morty", description: "릭앤모티 캐릭터", category: "entertainment", endpoint: "https://rickandmortyapi.com/api/character/1", method: "GET", responseExample: { name: "Rick Sanchez", status: "Alive", species: "Human" } },
  { id: "pokeapi", name: "Pokémon", description: "포켓몬 정보", category: "entertainment", endpoint: "https://pokeapi.co/api/v2/pokemon/25", method: "GET", responseExample: { name: "pikachu", height: 4, weight: 60 } },
  { id: "deck-of-cards", name: "Deck of Cards", description: "카드 덱 생성", category: "entertainment", endpoint: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", method: "GET", responseExample: { success: true, deck_id: "abc123", remaining: 52 } },
  { id: "trivia", name: "Trivia Question", description: "랜덤 퀴즈", category: "entertainment", endpoint: "https://opentdb.com/api.php?amount=1", method: "GET", responseExample: { response_code: 0, results: [{ category: "Science", question: "...", correct_answer: "..." }] } },
  // ═══ FOOD & DRINK ═══
  { id: "cocktail-random", name: "Random Cocktail", description: "랜덤 칵테일 레시피", category: "food", endpoint: "https://www.thecocktaildb.com/api/json/v1/1/random.php", method: "GET", responseExample: { drinks: [{ strDrink: "Margarita" }] } },
  { id: "meal-random", name: "Random Meal", description: "랜덤 음식 레시피", category: "food", endpoint: "https://www.themealdb.com/api/json/v1/1/random.php", method: "GET", responseExample: { meals: [{ strMeal: "Spicy Arrabiata Penne" }] } },
  { id: "open-food", name: "Open Food Facts", description: "식품 영양성분", category: "food", endpoint: "https://world.openfoodfacts.org/api/v0/product/5060292302201.json", method: "GET", responseExample: { product: { product_name: "Nutella" } } },
  // ═══ GAMES ═══
  { id: "rps", name: "Rock Paper Scissors", description: "가위바위보", category: "games", endpoint: "https://rpsls.studentukrato.ru/api/choice", method: "GET", responseExample: { result: "rock" } },
  { id: "wordle-word", name: "Random 5-letter Word", description: "5글자 영단어", category: "games", endpoint: "https://random-word-api.herokuapp.com/word?length=5", method: "GET", responseExample: ["apple"] },
  { id: "hangman-word", name: "Hangman Word", description: "행맨 게임 단어", category: "games", endpoint: "https://random-word-api.herokuapp.com/word?number=1", method: "GET", responseExample: ["programming"] },
  // ═══ GEOGRAPHY ═══
  { id: "countries-all", name: "All Countries", description: "전 세계 국가", category: "geography", endpoint: "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags&limit=10", method: "GET", responseExample: [{ name: { common: "South Korea" }, capital: ["Seoul"] }] },
  { id: "country-random", name: "Random Country", description: "랜덤 국가 정보", category: "geography", endpoint: "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags", method: "GET", responseExample: [{ name: { common: "Japan" }, capital: ["Tokyo"] }] },
  { id: "ip-country", name: "IP Geolocation", description: "IP로 국가 조회", category: "geography", endpoint: "https://ipapi.co/json/", method: "GET", responseExample: { ip: "1.1.1.1", city: "Seoul", country_name: "South Korea" } },
  { id: "university", name: "Universities", description: "국가별 대학교", category: "geography", endpoint: "http://universities.hipolabs.com/search?country=Korea%2C+Republic+of&limit=5", method: "GET", responseExample: [{ name: "Seoul National University" }] },
  { id: "geodb-cities", name: "City Search", description: "도서 검색", category: "geography", endpoint: "https://geocoding-api.open-meteo.com/v1/search?name=Seoul&count=5", method: "GET", responseExample: { results: [{ name: "Seoul", latitude: 37.57 }] } },
  // ═══ HISTORY ═══
  { id: "history-today", name: "Today in History", description: "오늘의 역사", category: "history", endpoint: "https://history.muffinlabs.com/date", method: "GET", responseExample: { date: "April 20", data: { Events: [{ year: "1889", text: "Adolf Hitler is born." }] } } },
  { id: "history-random", name: "Random History", description: "랜덤 역사 사건", category: "history", endpoint: "https://history.muffinlabs.com/date/6/15", method: "GET", responseExample: { date: "June 15", data: { Events: [{ year: "1947", text: "India gains independence." }] } } },
  { id: "public-holidays", name: "Public Holidays", description: "공휴일 정보", category: "history", endpoint: "https://date.nager.at/api/v3/PublicHolidays/2024/KR", method: "GET", responseExample: [{ date: "2024-01-01", localName: "신정" }] },
  // ═══ MATH ═══
  { id: "pi-digits", name: "Pi Digits", description: "원주율 자릿수", category: "math", endpoint: "https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100", method: "GET", responseExample: { content: "314159265358979..." } },
  // ═══ MUSIC ═══
  { id: "itunes-search", name: "iTunes Search", description: "음악 검색", category: "music", endpoint: "https://itunes.apple.com/search?term=bts&limit=3", method: "GET", responseExample: { results: [{ trackName: "Dynamite", artistName: "BTS" }] } },
  { id: "lyrics", name: "Song Lyrics", description: "노래 가사", category: "music", endpoint: "https://api.lyrics.ovh/v1/Imagine%20Dragons/Believer", method: "GET", responseExample: { lyrics: "First things first..." } },
  { id: "musicbrainz", name: "MusicBrainz", description: "음악 메타데이터", category: "music", endpoint: "https://musicbrainz.org/ws/2/artist/?query=Beatles&fmt=json&limit=3", method: "GET", responseExample: { artists: [{ name: "The Beatles" }] } },
  // ═══ NEWS ═══
  { id: "hn-top", name: "HN Top Stories", description: "HN 최신 스토리 ID", category: "news", endpoint: "https://hacker-news.firebaseio.com/v0/topstories.json", method: "GET", responseExample: [12345, 67890] },
  { id: "hn-item", name: "HN Story Detail", description: "HN 스토리 상세", category: "news", endpoint: "https://hacker-news.firebaseio.com/v0/item/8863.json", method: "GET", responseExample: { id: 8863, title: "My YC app", by: "dhouston" } },
  { id: "hn-search", name: "HN Search", description: "HN 스토리 검색", category: "news", endpoint: "https://hn.algolia.com/api/v1/search?query=react&tags=story&hitsPerPage=5", method: "GET", responseExample: { hits: [{ title: "...", points: 100 }] } },
  { id: "wiki-summary", name: "Wikipedia Summary", description: "위키백과 요약", category: "news", endpoint: "https://en.wikipedia.org/api/rest_v1/page/summary/Korea", method: "GET", responseExample: { title: "Korea", extract: "Korea is a region in East Asia." } },
  { id: "wiki-random", name: "Random Wikipedia", description: "랜덤 위키 문서", category: "news", endpoint: "https://en.wikipedia.org/api/rest_v1/page/random/summary", method: "GET", responseExample: { title: "Random Article", extract: "..." } },
  // ═══ SCIENCE ═══
  { id: "open-meteo", name: "Weather Forecast", description: "날씨 예보 (서울)", category: "science", endpoint: "https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current_weather=true", method: "GET", responseExample: { current_weather: { temperature: 15.2, windspeed: 10.5 } } },
  { id: "air-quality", name: "Air Quality", description: "공기질 지수", category: "science", endpoint: "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=37.57&longitude=126.98&current=pm10,pm2_5", method: "GET", responseExample: { current: { pm10: 45.2, pm2_5: 23.1 } } },
  { id: "genderize", name: "Gender by Name", description: "이름으로 성별 예측", category: "science", endpoint: "https://api.genderize.io/?name=hyejin", method: "GET", responseExample: { name: "hyejin", gender: "female", probability: 0.98 } },
  { id: "agify", name: "Age by Name", description: "이름으로 나이 예측", category: "science", endpoint: "https://api.agify.io/?name=michael", method: "GET", responseExample: { name: "michael", age: 62 } },
  { id: "nationalize", name: "Nationality by Name", description: "이름으로 국적 예측", category: "science", endpoint: "https://api.nationalize.io/?name=kim", method: "GET", responseExample: { name: "kim", country: [{ country_id: "KR", probability: 0.85 }] } },
  // ═══ SPACE ═══
  { id: "nasa-apod", name: "NASA APOD", description: "오늘의 우주 사진", category: "space", endpoint: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", method: "GET", responseExample: { title: "Galaxy NGC 1300", url: "https://..." } },
  { id: "mars-photos", name: "Mars Rover Photos", description: "화성 탐사선 사진", category: "space", endpoint: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&per_page=3", method: "GET", responseExample: { photos: [{ img_src: "https://..." }] } },
  { id: "iss-location", name: "ISS Location", description: "국제우주정거장 위치", category: "space", endpoint: "http://api.open-notify.org/iss-now.json", method: "GET", responseExample: { iss_position: { latitude: "37.5", longitude: "127.0" } } },
  { id: "people-space", name: "People in Space", description: "우주에 있는 사람 수", category: "space", endpoint: "http://api.open-notify.org/astros.json", method: "GET", responseExample: { number: 10, people: [{ name: "John", craft: "ISS" }] } },
  // ═══ SPORTS ═══
  { id: "f1-drivers", name: "F1 Driver Standings", description: "F1 드라이버 순위", category: "sports", endpoint: "https://ergast.com/api/f1/current/driverStandings.json", method: "GET", responseExample: { MRData: { StandingsTable: { StandingsLists: [] } } } },
  { id: "f1-races", name: "F1 Race Schedule", description: "F1 시즌 레이스", category: "sports", endpoint: "https://ergast.com/api/f1/current.json", method: "GET", responseExample: { MRData: { RaceTable: { Races: [] } } } },
  // ═══ TECHNOLOGY ═══
  { id: "github-search", name: "GitHub Repos", description: "GitHub 저장소 검색", category: "technology", endpoint: "https://api.github.com/search/repositories?q=stars:>10000&sort=stars&per_page=5", method: "GET", responseExample: { total_count: 1000, items: [{ full_name: "facebook/react" }] } },
  { id: "github-user", name: "GitHub User", description: "GitHub 유저 정보", category: "technology", endpoint: "https://api.github.com/users/octocat", method: "GET", responseExample: { login: "octocat", public_repos: 50, followers: 10000 } },
  { id: "npm-package", name: "NPM Package", description: "NPM 패키지 정보", category: "technology", endpoint: "https://registry.npmjs.org/react/latest", method: "GET", responseExample: { name: "react", version: "18.2.0" } },
  { id: "httpbin-get", name: "HTTPBin GET", description: "HTTP 요청/응답 테스트", category: "technology", endpoint: "https://httpbin.org/get", method: "GET", responseExample: { args: {}, headers: {}, origin: "1.1.1.1" } },
  { id: "httpbin-headers", name: "HTTPBin Headers", description: "요청 헤더 확인", category: "technology", endpoint: "https://httpbin.org/headers", method: "GET", responseExample: { headers: { "Accept": "text/html" } } },
  { id: "httpbin-ip", name: "HTTPBin IP", description: "IP 주소 확인", category: "technology", endpoint: "https://httpbin.org/ip", method: "GET", responseExample: { origin: "1.1.1.1" } },
  { id: "httpbin-uuid", name: "HTTPBin UUID", description: "랜덤 UUID", category: "technology", endpoint: "https://httpbin.org/uuid", method: "GET", responseExample: { uuid: "550e8400-e29b-41d4-a716-446655440000" } },
  { id: "httpbin-user-agent", name: "HTTPBin User-Agent", description: "User-Agent 확인", category: "technology", endpoint: "https://httpbin.org/user-agent", method: "GET", responseExample: { "user-agent": "Mozilla/5.0..." } },
  // ═══ WEATHER ═══
  { id: "weather-current", name: "Current Weather", description: "현재 날씨 (서울)", category: "weather", endpoint: "https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current=temperature_2m,relative_humidity_2m,wind_speed_10m", method: "GET", responseExample: { current: { temperature_2m: 15.2 } } },
  { id: "weather-7day", name: "7-Day Forecast", description: "7일 예보", category: "weather", endpoint: "https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Seoul", method: "GET", responseExample: { daily: { time: [] } } },
  { id: "weather-marine", name: "Marine Weather", description: "해양 날씨", category: "weather", endpoint: "https://marine-api.open-meteo.com/v1/marine?latitude=37.57&longitude=126.98&current=wave_height,swell_wave_height", method: "GET", responseExample: { current: { wave_height: 1.2 } } },
  // ═══ UTILITIES ═══
  { id: "httpbin-delay", name: "Delay Response", description: "지연 응답 테스트", category: "utilities", endpoint: "https://httpbin.org/delay/1", method: "GET", responseExample: { args: {}, headers: {} } },
  { id: "httpbin-status", name: "Status Code Test", description: "HTTP 상태코드 테스트", category: "utilities", endpoint: "https://httpbin.org/status/200", method: "GET", responseExample: {} },
  { id: "httpbin-base64", name: "Base64 Encode", description: "Base64 인코딩", category: "utilities", endpoint: "https://httpbin.org/base64/SGVsbG8gV29ybGQ=", method: "GET", responseExample: {} },
  // ═══ ART & DESIGN ═══
  { id: "picsum", name: "Lorem Picsum", description: "랜덤 플레이스홀더 이미지", category: "art", endpoint: "https://picsum.photos/800/600", method: "GET", responseExample: {} },
  { id: "picsum-info", name: "Picsum Image Info", description: "이미지 정보", category: "art", endpoint: "https://picsum.photos/id/0/info", method: "GET", responseExample: { id: 0, author: "Alejandro Escamilla", width: 5000 } },
  { id: "color-api", name: "Random Color", description: "랜덤 색상", category: "art", endpoint: "https://www.thecolorapi.com/random?format=json", method: "GET", responseExample: { hex: { value: "#FF5733" }, rgb: { r: 255, g: 87, b: 51 } } },
  { id: "random-user", name: "Random User", description: "랜덤 사용자 프로필", category: "art", endpoint: "https://randomuser.me/api/", method: "GET", responseExample: { results: [{ name: { first: "John", last: "Doe" } }] } },
  // ═══ BOOKS ═══
  { id: "gutendex", name: "Project Gutenberg", description: "무료 전자책 검색", category: "books", endpoint: "https://gutendex.com/books/?page=1", method: "GET", responseExample: { results: [{ title: "Pride and Prejudice" }] } },
  { id: "gutendex-search", name: "Book Search", description: "전자책 검색", category: "books", endpoint: "https://gutendex.com/books?search=alice", method: "GET", responseExample: { results: [{ title: "Alice in Wonderland" }] } },
  { id: "open-library", name: "Open Library", description: "도서관 도서 검색", category: "books", endpoint: "https://openlibrary.org/search.json?q=harry+potter&limit=3", method: "GET", responseExample: { numFound: 100, docs: [{ title: "Harry Potter" }] } },
  // ═══ COUNTRIES ═══
  { id: "country-flag", name: "Country Flags", description: "국가 깃발", category: "countries", endpoint: "https://restcountries.com/v3.1/name/japan?fields=name,flags", method: "GET", responseExample: [{ name: { common: "Japan" }, flags: { png: "https://..." } }] },
  { id: "country-population", name: "Population Data", description: "인구 데이터", category: "countries", endpoint: "https://restcountries.com/v3.1/all?fields=name,population&sort=-population&limit=10", method: "GET", responseExample: [{ name: { common: "China" }, population: 1400000000 }] },
  { id: "country-currency", name: "Country Currency", description: "국가 통화", category: "countries", endpoint: "https://restcountries.com/v3.1/name/korea?fields=name,currencies", method: "GET", responseExample: [{ name: { common: "South Korea" }, currencies: { KRW: { name: "Won" } } }] },
  // ═══ CRYPTO ═══
  { id: "coingecko-btc", name: "Bitcoin Price", description: "비트코인 시세", category: "crypto", endpoint: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=krw,usd&include_24hr_change=true", method: "GET", responseExample: { bitcoin: { krw: 80000000, usd: 60000 } } },
  { id: "coingecko-trending", name: "Trending Coins", description: "트렌딩 코인", category: "crypto", endpoint: "https://api.coingecko.com/api/v3/search/trending", method: "GET", responseExample: { coins: [{ item: { id: "bitcoin", name: "Bitcoin" } }] } },
  { id: "coingecko-markets", name: "Coin Markets", description: "코인 시장", category: "crypto", endpoint: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5", method: "GET", responseExample: [{ id: "bitcoin", current_price: 60000 }] },
  // ═══ FINANCE ═══
  { id: "exchange-rate", name: "Exchange Rate", description: "환율 정보", category: "finance", endpoint: "https://api.exchangerate-api.com/v4/latest/USD", method: "GET", responseExample: { base: "USD", rates: { KRW: 1350, JPY: 150 } } },
  { id: "exchange-convert", name: "Currency Convert", description: "환율 변환 (USD→KRW)", category: "finance", endpoint: "https://api.exchangerate-api.com/v4/latest/USD", method: "GET", responseExample: { base: "USD", rates: { KRW: 1470 } } },
  // ═══ IMAGES ═══
  { id: "dog-breeds", name: "Dog Breeds", description: "강아지 품종 목록", category: "images", endpoint: "https://dog.ceo/api/breeds/list/all", method: "GET", responseExample: { message: { affenpinscher: [] }, status: "success" } },
  { id: "dog-by-breed", name: "Dog by Breed", description: "품종별 강아지", category: "images", endpoint: "https://dog.ceo/api/breed/shiba/images/random", method: "GET", responseExample: { message: "https://images.dog.ceo/breeds/shiba/..." } },
  // ═══ JOKES & FUN ═══
  { id: "dad-joke", name: "Dad Joke", description: "아재개그", category: "jokes", endpoint: "https://icanhazdadjoke.com/", method: "GET", responseExample: { id: "abc", joke: "Why don't scientists trust atoms?", status: 200 } },
  { id: "chuck-norris", name: "Chuck Norris", description: "척 노리스 농담", category: "jokes", endpoint: "https://api.chucknorris.io/jokes/random", method: "GET", responseExample: { value: "Chuck Norris can divide by zero." } },
  { id: "random-joke", name: "Random Joke", description: "랜덤 농담", category: "jokes", endpoint: "https://official-joke-api.appspot.com/random_joke", method: "GET", responseExample: { setup: "Why did the scarecrow win?", punchline: "Outstanding in his field." } },
  { id: "programming-joke", name: "Programming Joke", description: "프로그래밍 농담", category: "jokes", endpoint: "https://official-joke-api.appspot.com/random_joke?category=programming", method: "GET", responseExample: { setup: "Why prefer dark mode?", punchline: "Light attracts bugs." } },
  { id: "random-advice", name: "Random Advice", description: "랜덤 조언", category: "jokes", endpoint: "https://api.adviceslip.com/advice", method: "GET", responseExample: { slip: { id: 1, advice: "Every expert was once a beginner." } } },
  { id: "kanye-quote", name: "Kanye Quotes", description: "카니예 명언", category: "jokes", endpoint: "https://api.kanye.rest/", method: "GET", responseExample: { quote: "I am God's vessel." } },
  // ═══ QUOTES ═══
  { id: "dummy-quote", name: "Random Quote", description: "랜덤 명언", category: "quotes", endpoint: "https://dummyjson.com/quotes/random", method: "GET", responseExample: { id: 1, quote: "Life is about giving.", author: "Kevin Kruse" } },
  { id: "ron-swanson", name: "Ron Swanson", description: "론 스완슨 명언", category: "quotes", endpoint: "https://ron-swanson-quotes.herokuapp.com/v2/quotes", method: "GET", responseExample: [{ quote: "I have a joke about chemistry." }] },
  // ═══ TEXT & LANGUAGE ═══
  { id: "translate", name: "MyMemory Translate", description: "무료 번역", category: "text", endpoint: "https://api.mymemory.translated.net/get?q=Hello&langpair=en|ko", method: "GET", responseExample: { responseData: { translatedText: "안녕하세요" } } },
  { id: "lorem-ipsum", name: "Lorem Ipsum", description: "더미 텍스트", category: "text", endpoint: "https://baconipsum.com/api/?type=all-meat&sentences=3", method: "GET", responseExample: ["Lorem ipsum dolor sit amet..."] },
  // ═══ TRANSPORT ═══
  { id: "flight-data", name: "Flight Data", description: "비행 데이터", category: "transport", endpoint: "https://opensky-network.org/api/states/all?limit=3", method: "GET", responseExample: { states: [[]], time: 1234567890 } },
  // ═══ USER AGENT ═══
  { id: "httpbin-ua", name: "User-Agent Check", description: "User-Agent 확인", category: "user", endpoint: "https://httpbin.org/user-agent", method: "GET", responseExample: { "user-agent": "Mozilla/5.0..." } },
  { id: "httpbin-req-headers", name: "Request Headers", description: "요청 헤더 반환", category: "user", endpoint: "https://httpbin.org/headers", method: "GET", responseExample: { headers: { "Accept-Encoding": "gzip" } } },
  // ═══ NUMBERS ═══
  { id: "random-number", name: "Random Number", description: "랜덤 숫자 (1-100)", category: "numbers", endpoint: "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain", method: "GET", responseExample: "42" },
];

export function getApisByCategory(category: string): ApiItem[] {
  if (category === "all") return apis;
  return apis.filter((api) => api.category === category);
}

export function getRandomApi(): ApiItem {
  return apis[Math.floor(Math.random() * apis.length)];
}

export function getDailyRandomApi(): ApiItem {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return apis[seed % apis.length];
}

export function searchApis(query: string): ApiItem[] {
  const q = query.toLowerCase();
  return apis.filter(
    (api) =>
      api.name.toLowerCase().includes(q) ||
      api.description.toLowerCase().includes(q) ||
      api.category.toLowerCase().includes(q)
  );
}

export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}

export function getApiCount(): number {
  return apis.length;
}

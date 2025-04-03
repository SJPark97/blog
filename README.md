# 📝 SJ의 Notion 기반 블로그

> **Next.js App Router + Notion + react-notion-x** 기반 블로그 프로젝트입니다.  
> Notion을 CMS처럼 활용해 블로그 포스트를 작성하고, SEO 최적화 및 SSR 기반으로 렌더링됩니다.

---

## 🚀 데모

🔗 [https://sjpark-blog.vercel.app](https://sjpark-blog.vercel.app)

---

## 🧰 사용 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **react-notion-x**
- **@notionhq/client**
- **Vercel** (배포)
- **Open Graph / Twitter Meta** 설정
- **Notion DB 기반 포스트 관리**

---

## 📁 주요 기능

| 기능 | 설명 |
|------|------|
| 📄 포스트 렌더링 | Notion 페이지를 SSR로 렌더링 (react-notion-x) |
| 📚 블로그 목록 | Notion DB에서 slug, title, summary, date 불러옴 |
| 🔍 SEO 최적화 | title, description, og:image 등 메타태그 자동 생성 |
| 🕒 ISR 적용 | `revalidate = 300` → 5분 간격으로 최신화 (예정) |
| ✅ 검색엔진 등록 | Google Search Console 인증 메타 태그 포함 |

---

## 📦 설치 및 실행

### 1. 클론 후 의존성 설치

```bash
git clone https://github.com/your-repo/my-notion-blog.git
cd my-notion-blog
npm install
```

### 2. 환경변수 설정

`.env.local` 파일을 생성하고 다음 값 입력:

```env
NOTION_SECRET=your_integration_token
NOTION_DATABASE_ID=your_database_id
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

### 3. 개발 서버 실행

```bash
npm run dev
```

---

## 🧠 폴더 구조

```
.
├── app/
│   ├── layout.tsx         # 전역 레이아웃 및 메타 설정
│   ├── page.tsx           # 홈 (목록 페이지)
│   └── blog/[slug]/       # 블로그 상세 페이지
├── components/
│   └── NotionPage.tsx     # Notion 렌더링 컴포넌트
├── lib/
│   ├── page.ts            # 개별 Notion 페이지 fetch
│   └── db.ts              # Notion DB (목록) fetch
├── public/
│   ├── favicon.ico
│   └── og.png             # OG 이미지
```

---

## ✅ 작업 이력 (간략)

- Next.js App Router 기반 프로젝트 생성
- Tailwind, Geist 폰트, 글로벌 CSS 세팅
- Notion DB 연동
- react-notion-x로 SSR Notion 렌더링
- SEO 메타태그, OG 이미지 설정
- Google Search Console 인증

---

## 📬 향후 개선 예정

- Notion DB 자동 슬러그 추출 → Static Params 자동화
- 댓글 기능 추가 (utterances or giscus)
- 태그 기반 필터링 및 검색 기능

---

## 🧑‍💻 개발자

**SJ Park**  
[https://sjpark-blog.vercel.app](https://sjpark-blog.vercel.app)

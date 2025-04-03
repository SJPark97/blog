export default function Head() {
    return (
      <>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        {/* Open Graph */}
        <meta property="og:image" content="/og.png" />
        <meta property="og:title" content="SJ의 개발 블로그" />
        <meta property="og:description" content="프론트엔드 기술과 실전 경험을 기록합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SJ Dev Blog" />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og.png" />
      </>
    )
  }
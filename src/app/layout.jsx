import "@/styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <head>
        <meta
          name="naver-site-verification"
          content="c51f4cbf1d086158b6a1751c56d9483d32efb231"
        />
      </head>
      <body className="layout-flex">{children}</body>
    </html>
  );
}

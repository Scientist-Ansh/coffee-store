import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content="Coffee Shop in Barcelona" />
          <meta
            property="og:url"
            content="https://coffee-store-zeta.vercel.app/"
          />
          <meta
            property="og:image"
            content="	https://media.graphassets.com/output=format:webp/aJ5lcAT9TXSHfWIgNjkq"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Get best coffee in barcelona. Come visit our caef and enjoy your coffee."
          />
          <meta
            name="description"
            content="Get best coffee in barcelona. Come visit our caef and enjoy your coffee."
          />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-BX6EJDBQC7"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
         window.dataLayer = window.dataLayer || []; function gtag()
         {dataLayer.push(arguments)}
         gtag('js', new Date()); gtag('config', 'G-BX6EJDBQC7');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

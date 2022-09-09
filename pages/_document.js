import Document, { Html, Head, Main, NextScript } from 'next/document';

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

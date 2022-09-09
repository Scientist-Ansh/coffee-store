import '../styles/globals.css';
import 'animate.css/animate.min.css';

import { CartContextProvider } from '../utils/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;

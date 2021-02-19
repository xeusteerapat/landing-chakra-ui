import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import customTheme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

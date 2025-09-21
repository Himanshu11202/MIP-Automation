// pages/_app.js
import '../src/styles/globals.css'; 
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

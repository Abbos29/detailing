import "@/styles/reset.css";
import "@/styles/globals.css";
import TopBar from "@/components/ui/TopBar/TopBar";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { CartProvider } from "react-use-cart";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#fff"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <CartProvider>
        <TopBar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}

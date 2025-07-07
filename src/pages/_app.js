import "@/styles/reset.css";
import "@/styles/globals.css";
import TopBar from "@/components/ui/TopBar/TopBar";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { CartProvider } from "react-use-cart";
import { AppContextProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <ProgressBar
          height="3px"
          color="#fff"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <CartProvider>
          {/* <TopBar />
          <Header />
          <Component {...pageProps} />
          <Footer /> */}
          <h2 style={{ color: "red" , padding: "100px 0", textAlign: "center", textTransform: "uppercase", fontSize: "44px"}}>don't work</h2>
        </CartProvider>
      </AppContextProvider>
    </>
  );
}

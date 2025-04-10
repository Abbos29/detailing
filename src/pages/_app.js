import "@/styles/reset.css";
import "@/styles/globals.css";
import TopBar from "@/components/ui/TopBar/TopBar";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

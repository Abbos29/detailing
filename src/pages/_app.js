import "@/styles/reset.css";
import "@/styles/globals.css";
import TopBar from "@/components/ui/TopBar/TopBar";
import Header from "@/components/layout/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

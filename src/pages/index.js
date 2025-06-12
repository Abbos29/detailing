import Benefits from "@/components/layout/Benefits/Benefits";
import Faq from "@/components/layout/FAQ/Faq";
import Hero from "@/components/layout/Hero/Hero";
import RandomCards from "@/components/layout/RandomCards/RandomCards";
import Reviews from "@/components/layout/Reviews/Reviews";
import Seo from "@/components/ui/Seo/Seo";
import { axiosInstanceProducts } from "@/utils/axios_products";
import { axiosInstanceShared } from "@/utils/axios_shared";

export const getServerSideProps = async () => {
  const { data: products } = await axiosInstanceProducts.get("/products/")
  const { data: main_points } = await axiosInstanceShared.get("/main-points/")
  const { data: points } = await axiosInstanceShared.get("/points/")
  const { data: faqs } = await axiosInstanceShared.get("/faqs/")
  return {
    props: {
      products,
      main_points,
      points,
      faqs
    }
  }
}

export default function Home({ products, main_points, points, faqs }) {
  return (
    <>
      <Seo />
      <Hero />
      <RandomCards products={products} />
      <Benefits main_points={main_points} points={points} />
      <Faq faqs={faqs} />
      {/* <Reviews /> */}
    </>
  );
}

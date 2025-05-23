import Benefits from "@/components/layout/Benefits/Benefits";
import Faq from "@/components/layout/FAQ/Faq";
import Hero from "@/components/layout/Hero/Hero";
import RandomCards from "@/components/layout/RandomCards/RandomCards";
import Reviews from "@/components/layout/Reviews/Reviews";
import Seo from "@/components/ui/Seo/Seo";
import { axiosInstanceProducts } from "@/utils/axios_products";

export const getServerSideProps = async () => {
  const { data: products } = await axiosInstanceProducts.get("/products")
  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {
  return (
    <>

      <Seo />

      <Hero />
      <Benefits />
      <RandomCards products={products} />
      <Faq />
      <Reviews />
    </>
  );
}

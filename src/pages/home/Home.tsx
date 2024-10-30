import Header from "../../components/header/Header";
import Hero from "../../components/home/hero/Hero";
import Logos from "../../components/home/logos/Logos";
import Carousel from "../../components/home/popular-venues/Carousel";
import Features from "../../components/home/features/Features";
import Stats from "../../components/home/stats/Stats";
import Reviews from "../../components/home/reviews/Reviews";
import FAQ from "../../components/home/faq/FAQ";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Carousel />
        <Features />
        <Stats />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;

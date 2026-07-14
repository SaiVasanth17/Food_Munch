import Hero from "../../components/Hero/Hero";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import HealthyFood from "../../components/HealthyFood/HealthyFood";
import DeliverySection from "../../components/DeliverySection/DeliverySection";
import GiftSection from "../../components/GiftSection/GiftSection";
import FollowUs from "../../components/FollowUs/FollowUs";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ExploreMenu />
      <HealthyFood />
      <DeliverySection />
      <GiftSection />
      <FollowUs />
    </>
  );
}

export default Home;
import Layout from "../layout/Layout";
import HeroSection from "../home/HeroSection";
import CategoriesSection from "../home/CategoriesSection";
import AboutSection from "../home/AboutSection";
import WhyChooseSection from "../home/WhyChooseSection";
import FeaturedBooks from "../home/FeaturedBooks";
import CTASection from "../home/CTASection";
import Message from "../home/Message";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseSection />
      <FeaturedBooks />
      <Message />
      <CTASection />
    </Layout>
  );
};

export default Index;

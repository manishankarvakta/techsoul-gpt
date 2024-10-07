import CTA from "./_components/home/CTA";
import Features from "./_components/home/Features";
import Banner from "./_components/home/Header/Banner";
import Footer from "./_components/Shared/Footer";
import UseCases from "./_components/home/UseCases";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <UseCases />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
    </div>
  );
}

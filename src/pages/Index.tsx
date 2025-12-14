import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Feature />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

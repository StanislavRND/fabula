import { useEffect, useState } from 'react';
import { Advantages, Footer, Header, Intro, Nav, Price, Support, Workers } from '../components';

export const Home = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <Nav isFixed={isFixed} scrollToSection={scrollToSection} />
      <main className="main">
        <Intro />
        <Advantages />
        <Price />
        <Workers />
        <Support />
        <Footer />
      </main>
    </>
  );
};

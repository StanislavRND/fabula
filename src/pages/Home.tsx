import { useEffect, useState } from 'react';
import {
  Advantages,
  Footer,
  Header,
  Intro,
  Nav,
  Price,
  Reviews,
  Support,
  Workers,
} from '../components';

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
        <Reviews />
        <Workers />
        <section id="workers" className="workers">
          <div className="container">
            <div className="workers__title">Успешные судебные практики</div>
            <div className="practice">
              <div>
                <a
                  target="_blank"
                  href="https://sudact.ru/arbitral/doc/O3r8ZiChtIVv/?ysclid=m52plt5czz762256087">
                  Решение от 10 февраля 2023 г. по делу № А55-21943/2022
                </a>
              </div>

              <div>
                <a
                  target="_blank"
                  href="https://sudact.ru/arbitral/doc/9FBgN3uxpHYh/?ysclid=m52pywtpwl770682875">
                  Решение от 12 апреля 2023 г. по делу № А40-244407/2022
                </a>
              </div>

              <div>
                <a
                  target="_blank"
                  href="https://sudact.ru/arbitral/doc/PSBCdNYDKzYt/?ysclid=m52q2lqaov699618921">
                  Решение от 14 июня 2023 г. по делу № А40-23074/2023
                </a>
              </div>

              <div>
                <a
                  target="_blank"
                  href="https://sudact.ru/arbitral/doc/1WawrDFWS1gW/?ysclid=m52q4f3z1h765489060">
                  Решение от 6 июня 2022 г. по делу № А60-2622/2022
                </a>
              </div>
            </div>
          </div>
        </section>
        <Support />
        <Footer />
      </main>
    </>
  );
};

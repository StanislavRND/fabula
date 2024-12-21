import { useState } from 'react';

type Props = {
  isFixed: boolean;
  scrollToSection: (id: string) => void;
};

export const Nav = ({ scrollToSection, isFixed }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления открытием меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };

  return (
    <nav className={`nav ${isFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        <div className={`nav__items ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav__item" onClick={() => scrollToSection('home')}>
            Главная
          </div>
          <div className="nav__item" onClick={() => scrollToSection('advantages')}>
            Преимущества
          </div>
          <div className="nav__item" onClick={() => scrollToSection('price')}>
            Прайс-лист
          </div>
          <div className="nav__item" onClick={() => scrollToSection('workers')}>
            Наша команда
          </div>
          <div className="nav__item" onClick={() => scrollToSection('contacts')}>
            Контакты
          </div>
        </div>
      </div>
    </nav>
  );
};

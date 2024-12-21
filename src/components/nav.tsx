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

  const handleItemClick = (id: string) => {
    scrollToSection(id); // Прокрутка к секции
    setIsMenuOpen(false); // Закрываем меню
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
          <div className="nav__item" onClick={() => handleItemClick('home')}>
            Главная
          </div>
          <div className="nav__item" onClick={() => handleItemClick('advantages')}>
            Преимущества
          </div>
          <div className="nav__item" onClick={() => handleItemClick('price')}>
            Прайс-лист
          </div>
          <div className="nav__item" onClick={() => handleItemClick('workers')}>
            Наша команда
          </div>
          <div className="nav__item" onClick={() => handleItemClick('contacts')}>
            Контакты
          </div>
        </div>
      </div>
    </nav>
  );
};

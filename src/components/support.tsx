import { useState } from 'react';
import background from '../assets/support.png';

export const Support = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    if (!isFocused) {
      setValue('+7');
      setIsFocused(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <section id="support" className="support">
      <img className="support__img" src={background} alt="" />

      <form className="support__form">
        <div className="support__title">Остались вопросы?</div>
        <div className="support__form-flex">
          <input type="text" className="support__input" placeholder="Ваше имя" />
          <input
            type="text"
            className="support__input"
            placeholder="+7 (999) 999-99-99"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            maxLength={12}
          />
          <button className="support__button">Оставить заявку</button>
        </div>
      </form>
    </section>
  );
};

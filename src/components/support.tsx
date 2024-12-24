import { useState } from 'react';
import background from '../assets/support.png';

export const Support = () => {
  const [name, setName] = useState(''); // Состояние для имени
  const [phone, setPhone] = useState(''); // Состояние для номера телефона
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false); // Состояние фокуса

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFocus = () => {
    if (!isFocused) {
      setPhone('+7'); // Устанавливаем префикс +7 при фокусе
      setIsFocused(true);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    if (isChecked) {
      setShowAlert(true);
      // Очищаем поля ввода и снимаем галочку после показа алерта
      setTimeout(() => {
        setShowAlert(false);
        setName(''); // Очищаем поле имени
        setPhone(''); // Очищаем поле телефона
        setIsChecked(false); // Снимаем галочку
        setIsFocused(false); // Сбрасываем состояние фокуса
      }, 2000); // Время показа алерта
    }
  };

  return (
    <section id="support" className="support">
      <img className="support__img" src={background} alt="" />

      <form className="support__form" onSubmit={handleSubmit}>
        <div className="support__title">Остались вопросы?</div>
        <div className="support__form-flex">
          <input
            type="text"
            className="support__input"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            className="support__input"
            placeholder="+7 (999) 999-99-99"
            value={phone}
            onChange={handlePhoneChange}
            onFocus={handleFocus} // Добавляем обработчик фокуса
            maxLength={12}
          />

          <button className="support__button" disabled={!isChecked}>
            Оставить заявку
          </button>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginTop: '25px', color: 'white' }}>
          <div className="support__checkbox-container">
            <input
              type="checkbox"
              id="dataProcessing"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ display: 'none' }} // Скрываем стандартный чекбокс
            />
            <label
              htmlFor="dataProcessing"
              className={`support__checkbox ${isChecked ? 'checked' : ''}`}>
              {isChecked && (
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path d="M1 8l4 4L15 2" strokeWidth="2" stroke="#fff" fill="none" />
                </svg>
              )}
            </label>
          </div>
          <div> Я даю согласие на обработку моих персональных данных</div>
        </div>
      </form>

      {showAlert && <div className="custom-alert">С вами свяжутся в ближайшее время.</div>}
    </section>
  );
};

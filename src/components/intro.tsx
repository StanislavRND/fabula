import img from '../assets/wrapper.jpg';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__image">
        <img src={img} alt="Описание изображения" />
      </div>
      <div className="intro__info">
        {' '}
        <div className="intro__info-subtitle">
          Комплексное юридическое сопровождение вашего бизнеса
        </div>
        <div className="intro__info-title">Юридическая поддержка вашего бизнеса</div>
      </div>
      <div className="intro__plus">
        <div className="container">
          <div className="intro__plus-item">
            <div className="intro__plus-item-title"> Поддержка высокого уровня</div>
            <div className="intro__plus-item-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2C9F4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase-business">
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
          </div>
          <div className="intro__plus-item">
            <div className="intro__plus-item-title">
              Защита от <br /> коллекторов{' '}
            </div>
            <div className="intro__plus-item-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2C9F4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </div>
          <div className="intro__plus-item">
            <div className="intro__plus-item-title">
              Своевременное <br /> информирование
            </div>
            <div className="intro__plus-item-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2C9F4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-timer">
                <line x1="10" x2="14" y1="2" y2="2" />
                <line x1="12" x2="15" y1="14" y2="11" />
                <circle cx="12" cy="14" r="8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextWorker = () => {
    if (currentIndex < workersData.length - 1) {
      setDirection(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevWorker = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const workersData = [
    {
      name: 'Елена П.',
      review:
        "Хочу выразить огромную благодарность команде юридической компании 'Фабула'. Обратилась к ним в сложный момент, когда возникли проблемы с налоговыми органами. Юристы быстро разобрались в ситуации, предложили грамотное решение и взяли все на себя. Теперь я сплю спокойно, зная, что мои интересы защищены. Рекомендую всем!",
      rating: 5,
    },
    {
      name: 'Александр Т.',
      review:
        "Работа с 'Фабула' была настоящим спасением для моей компании. Мы столкнулись с серьезными правовыми вопросами, и я не знал, как их решить. Специалисты компании не только помогли разобраться с документами, но и провели успешные переговоры с контрагентами. Огромное спасибо за профессионализм и поддержку!",
      rating: 5,
    },
    {
      name: 'Мария С.',
      review:
        "Я обратилась в 'Фабула' по рекомендации друга и не пожалела! Они помогли мне оформить все необходимые документы для открытия бизнеса. Каждый шаг был понятен благодаря их профессионализму. Теперь я уверена в своем деле и готова к новым вызовам!",
      rating: 5,
    },
    {
      name: 'Иван К.',
      review:
        "Сотрудничество с 'Фабула' стало для меня настоящим открытием! Они профессионально подошли к решению моего вопроса по банкротству компании. Все этапы были четко объяснены, а результаты превзошли мои ожидания. Спасибо за вашу работу!",
      rating: 5,
    },
    {
      name: 'Ольга Н.',
      review:
        "Обращалась в 'Фабула' для получения консультации по вопросам защиты интеллектуальной собственности. Специалисты компании оказались настоящими профессионалами своего дела! Они помогли мне зарегистрировать товарный знак и объяснили все нюансы процесса. Я очень довольна результатом и буду рекомендовать вас своим знакомым!",
      rating: 5,
    },
  ];

  return (
    <section id="workers" className="workers">
      <div className="container">
        <div className="workers__title">Отзывы клиентов</div>
        <div
          className={`workers__items ${
            direction === 1 ? 'slide-right' : direction === -1 ? 'slide-left' : ''
          }`}>
          <div className="workers__item rewiew__item">
            <div className="workers__item-block rewiew__block">
              <div className="workers__item-fio rewiew__item-name">
                {workersData[currentIndex].name}
              </div>
              <div className="rating">
                {/* Отображение звезд */}
                {'★'.repeat(workersData[currentIndex].rating)}
                {'☆'.repeat(5 - workersData[currentIndex].rating)}
              </div>
            </div>
            <div className="workers__item-post rewiew__item-rewiew">
              {workersData[currentIndex].review}
            </div>
            <div className="workers__buttons rewiew__button">
              <button
                className="workers__btn rewiew__btn"
                onClick={prevWorker}
                disabled={currentIndex === 0} // Блокировка кнопки при первом отзыве
              >
                {'<'}
              </button>
              <button
                className="workers__btn rewiew__btn"
                onClick={nextWorker}
                disabled={currentIndex === workersData.length - 1} // Блокировка кнопки при последнем отзыве
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

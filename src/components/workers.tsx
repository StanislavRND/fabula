import Slider from 'rc-slider';
import { useState } from 'react';

export const Workers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextWorker = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workersData.length);
  };

  const prevWorker = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workersData.length) % workersData.length);
  };

  const workersData = [
    { img: 'М', fio: 'Маматкова Виктория Олеговна', post: 'Должность' },
    { img: 'П', fio: 'Пожидаева Анастасия Александрона', post: 'Должность' },
    { img: 'З', fio: 'Зинченко Дарья Алексеевна', post: 'Должность' },
    { img: 'Г', fio: 'Гергерт Ульяна Викторовна', post: 'Должность' },
    { img: 'М', fio: 'Малыгина София Алексеевна', post: 'Должность' },
    { img: 'М', fio: 'Матвиенко Виктор Николаевич', post: 'Должность' },
    { img: 'К', fio: 'Куприй К. В', post: 'Должность' },
    { img: 'А', fio: 'Ануфриев А. Б', post: 'Должность' },
    { img: 'Р', fio: 'Робакидзе А. А', post: 'Должность' },
    { img: 'Ф', fio: 'Фещенко Б. Б', post: 'Должность' },
  ];
  return (
    <section id="workers" className="workers">
      <div className="container">
        <div className="workers__title">Наша команда</div>
        <div
          className={`workers__items ${
            direction === 1 ? 'slide-right' : direction === -1 ? 'slide-left' : ''
          }`}>
          <div className="workers__item">
            <div className="workers__item-block">
              {' '}
              <div className="workers__item-img">{workersData[currentIndex].img}</div>
              <div className="workers__item-fio">{workersData[currentIndex].fio}</div>
            </div>

            <div className="workers__item-post">{workersData[currentIndex].post}</div>
          </div>
        </div>
        <div className="workers__buttons">
          {' '}
          <button className="workers__btn" onClick={prevWorker} disabled={currentIndex === 0}>
            {'<<'}
          </button>
          <button
            className="workers__btn"
            onClick={nextWorker}
            disabled={currentIndex === workersData.length - 1}>
            {'>>'}
          </button>
        </div>

        <Slider
          min={0}
          max={workersData.length - 1}
          value={currentIndex}
          onChange={(value) => setCurrentIndex(value as number)}
          dots
        />
      </div>
    </section>
  );
};

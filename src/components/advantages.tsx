import badgeRubles from '../assets/badge-russian-ruble.svg';
import circleCheck from '../assets/circle-check.svg';
import handCoins from '../assets/hand-coins.svg';
import shieldCheck from '../assets/shield-check.svg';
import userCheck from '../assets/user-check.svg';
import usersCheck from '../assets/users-round.svg';

export const Advantages = () => {
  return (
    <section id="advantages" className="edge">
      <div className="container">
        <div className="edge__title">Наши преимущества</div>
        <div className="edge__items">
          <div className="edge__item">
            <img src={badgeRubles} alt="" />
            <div className="edge__item-title">
              Гибкая система <br /> оплаты
            </div>
          </div>
          <div className="edge__item">
            <img src={handCoins} alt="" />
            <div className="edge__item-title">
              Фиксированная <br /> стоимость услуг
            </div>
          </div>
          <div className="edge__item">
            <img src={shieldCheck} alt="" />
            <div className="edge__item-title">
              Гарантия положительного <br /> результата
            </div>
          </div>
          <div className="edge__item">
            <img src={userCheck} alt="" />
            <div className="edge__item-title">
              Индвивидуальный <br />
              подход
            </div>
          </div>
          <div className="edge__item">
            <img src={usersCheck} alt="" />
            <div className="edge__item-title">Опытная команда</div>
          </div>
          <div className="edge__item">
            <img src={circleCheck} alt="" />
            <div className="edge__item-title">
              Комплексное <br />
              сопровождение
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

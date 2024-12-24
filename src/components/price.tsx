import { useNavigate } from 'react-router-dom';
import bankruptcy from '../assets/bankruptcy.png';
import businessMeeting from '../assets/businessmenMeeting.jpg';
import consultation from '../assets/consultation.jpg';
import contract from '../assets/contract.jpg';
import disputes from '../assets/disputes.jpg';
import documents from '../assets/documents.jpg';
import restructuring from '../assets/restructuring.jpg';
import uristBankrotstvu from '../assets/uristBankrotstvu.jpg';

export const Price = () => {
  const navigate = useNavigate();

  return (
    <section id="price" className="price">
      <div className="container">
        <div className="price__title">Прайс-лист</div>
        <div className="price__items">
          <div className="price__item">
            <img className="price__item-img" src={consultation} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Первичная консультация юриста</div>
              <div className="price__item-info-price">3 000 ₽</div>
              <button onClick={() => navigate('/service/1')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={bankruptcy} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Банкротсво</div>
              <div className="price__item-info-price">30 000 ₽</div>
              <button onClick={() => navigate('/service/2')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={uristBankrotstvu} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Юридическая поддержка при банкростве</div>
              <div className="price__item-info-price">20 000 ₽</div>
              <button onClick={() => navigate('/service/3')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={restructuring} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Реструктуризация задолженности</div>
              <div className="price__item-info-price">10 000 ₽</div>
              <button onClick={() => navigate('/service/4')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={contract} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">
                Подготовка и ведение договоров юридических лиц
              </div>
              <div className="price__item-info-price">3 000 ₽</div>
              <button onClick={() => navigate('/service/5')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={documents} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Подготовка изменения уставных документов</div>
              <div className="price__item-info-price">2 500 ₽</div>
              <button onClick={() => navigate('/service/6')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={businessMeeting} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Подготовка котировочных заявок</div>
              <div className="price__item-info-price">2 000 ₽</div>
              <button onClick={() => navigate('/service/7')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
          <div className="price__item">
            <img className="price__item-img" src={disputes} alt="" />
            <div className="price__item-info">
              <div className="price__item-info-title">Арбитражные налоговые споры</div>
              <div className="price__item-info-price">20 000 ₽</div>
              <button onClick={() => navigate('/service/8')} className="price__item-info-btn">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

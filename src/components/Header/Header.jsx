
import '/SpecialOffer.css'; // Стили для компонента

export default function SpecialOffer() {
  return (
    <section className="special-offer">
      <div className="offer-content">
        <h2>Специальное предложение!</h2>
        <p className="highlight">Только этой неделей скидка 30% на все услуги</p>
        <p>Успейте воспользоваться выгодным предложением до конца месяца</p>
        <button className="offer-button">Оставить заявку</button>
      </div>
    </section>
  );
}
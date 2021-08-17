
const PizzaBlock = ({ name, price, imageUrl }) => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от <span className="pizza-block__color">{price}</span> uah
        </div>
        <div className="button button--outline button--add">
          <i className="fas fa-plus" />
          <span className="title">Добавить</span>
          <span className="number">2</span>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock;
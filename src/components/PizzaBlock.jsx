import { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

const PizzaBlock = ({ name, price, imageUrl, types, sizes }) => {
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(sizes[0])

  const typeNames = ['тонкое', 'традиционное']
  const availableSizes = [20, 30, 40]

  const onSelectType = index => setActiveType(index)
  const onSelectSize = index => setActiveSize(index)

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
          {typeNames.map((type, index) => (
            <li
              key={type}
              className={classNames({
                'active': activeType === index,
                'disabled': !types.includes(index),
              })}
              onClick={() => onSelectType(index)}
            >
              {type}
            </li>)
          )}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              className={classNames({
                'active': activeSize === index,
                'disabled': !sizes.includes(size),
              })}
              onClick={() => onSelectSize(index)}
            >
              {size} см.
            </li>)
          )}
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

PizzaBlock.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number)
}

PizzaBlock.defaultProps = {
  name: 'Название-пиццы',
  price: 0,
  imageUrl: '',
  types: [],
  sizes: []
}

export default PizzaBlock;
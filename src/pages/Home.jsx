import { PizzaBlock, Categories, SortPopup, Carousels } from '../components'

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortNames = ['популярные', 'цена', 'алфавит']

const Home = ({ pizzas }) => {
  return (
    <div className="custom-container">
      <Carousels />
      <div className="wrapper">
        <div className="content__top">
          <Categories categoryNames={categoryNames} />
          <SortPopup sortNames={sortNames} />
        </div >
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas &&
            pizzas.map(pizza => (
              <PizzaBlock
                key={pizza.id}
                {...pizza}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
import { PizzaBlock, Categories, SortPopup, Carousels, Loader } from '../components'

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortNames = [
  { id: 1, label: 'популярные', type: 'popular' },
  { id: 2, label: 'цена', type: 'price' },
  { id: 3, label: 'алфавит', type: 'alphabet' }
]

const Home = ({ pizzas, loader }) => {
  console.log(pizzas)
  return (
    <div className="custom-container">
      <Carousels />
      <div className="wrapper">
        <div className="content__top">
          <Categories categoryNames={categoryNames} />
          <SortPopup sortNames={sortNames} />
        </div >
        <h2 className="content__title">Все пиццы</h2>
        {loader || !pizzas
          ? <Loader />
          : <div className="content__items">
            {pizzas &&
              pizzas.map(pizza => (
                <PizzaBlock
                  key={pizza.id}
                  {...pizza}
                />
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Home;
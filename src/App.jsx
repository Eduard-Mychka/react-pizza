import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { Header, Footer, CartButton } from './components'
import { Home, Cart } from './pages'

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas)
      })
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="containerr">
            <Header />
            <div className="header__cart">
              <Link to="/cart">
                <CartButton />
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          <Route path="/" render={() => <Home pizzas={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;

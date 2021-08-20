import { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Header, Footer, CartButton } from './components'
import { Home, Cart } from './pages'

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/react-pizza/db.json')
      .then((resp) => resp.json())
      .then((json) => setPizzas(json.pizzas))
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="custom-container">
          <Header />
          <div className="header__cart">
            <Link to="/cart">
              <CartButton />
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <Switch>
          <Route path="/cart" component={Cart} exact />
          <Route exact path="/react-pizza" render={() => <Home pizzas={pizzas} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App;

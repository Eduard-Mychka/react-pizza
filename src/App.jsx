import { useState, useEffect } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Header, Footer, CartButton } from './components'
import { Home, Cart } from './pages'
import { pizzasData } from './db'

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    new Promise(resolve => {
      setLoader(true)
      setTimeout(() => {
        resolve(pizzasData)
        setLoader(false)
      }, 1000);
    })
      .then((pizzas) => setPizzas(pizzas))
      .catch((error) => console.log('Error', error))
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
          <Route exact path="/" render={() => <Home pizzas={pizzas} loader={loader} />} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App;

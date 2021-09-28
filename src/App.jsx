import { useEffect } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Header, Footer, CartButton } from './components'
import { Home, Cart } from './pages'
import { pizzasData } from './db'
import { setPizzas } from './redux/actions/pizzas'
import { useSelector, useDispatch } from 'react-redux'
console.log(setPizzas)

const App = () => {
  const dispatch = useDispatch();
  const { setPizzas } = useSelector(({ setPizzas, filters }) => {
    return {
      setPizzas,
      sortBy: filters.sortBy
    }
  })
  //   useEffect(() => {
  //     new Promise(resolve => {
  //       setLoader(true)
  //       setTimeout(() => {
  //         resolve(pizzasData)
  //         setLoader(false)
  //   }, 1000);
  // })
  //       .then((pizzas) => setPizzas(pizzas)
  //   // .catch((error) => console.log('Error', error))
  // )
  //   }, []);


  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(pizzasData)
      }, 1000);
    })
      .then((setPizzas) => { dispatch(setPizzas(setPizzas)) }
        // .catch((error) => console.log('Error', error))
      )
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
          <Route exact path="/" render={() => <Home pizzas={setPizzas} />} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

// const mapStateToProps = (state) => {
//   console.log(state.pizzas, 'State')
//   return {
//     pizzas: state.pizzas,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch, 'Dispatch')
//   return {
//     setPizzas
//   }
// }

export default App;

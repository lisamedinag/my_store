import './App.css';
import {Dashboard, Navigation, AllProducts, SingleProduct} from "./exportedComponents";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Navigation />

      <main>
          <Switch>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/products" exact component={AllProducts}/>
              <Route path="/products/details" exact component={SingleProduct}/>
          </Switch>
      </main>
    </div>
  );
}

export default App;

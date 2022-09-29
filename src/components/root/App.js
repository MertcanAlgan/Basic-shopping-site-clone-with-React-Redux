import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/products" exact component={Dashboard}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
        <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct}></Route>
        <Route path="/saveproduct" exact component={AddOrUpdateProduct}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;

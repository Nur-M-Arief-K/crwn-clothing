import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

class Shop extends Component {
  render() {
    return (
      <div>
        <h1>SHOP PAGE</h1>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>} />
        </Route>
      </Routes>
    )
  }
}

export default App;

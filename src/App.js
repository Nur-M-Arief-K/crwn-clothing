import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

class Shop extends Component {
  render() {
    return (
      <div>
        <h1>SHOP PAGE</h1>
      </div>
    )
  }
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  )
}

export default App;

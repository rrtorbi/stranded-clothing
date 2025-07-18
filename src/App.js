import { Routes,Route } from "react-router-dom"
import Home from "./components/routes/home/home.component"
import NavigationBar from "./components/routes/navigation/navigation.component"
import SignIn from "./components/routes/sign-In/sign-in.component"

const App = () => {
  const Shop = () => {
    return(
      <h1>This is my fucken Shop</h1>
    )
  }
  return(
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
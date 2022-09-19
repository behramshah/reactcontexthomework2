import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/navbar/Navbar'
import List from './components/list/List';
import Details from './components/list/Details';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DrawerAppBar/>}>
        <Route path='/List' element={<List/>}/>
        <Route path='List/:id' element={<Details/>}/>
        <Route index path='Cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
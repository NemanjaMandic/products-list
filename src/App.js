import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from './widgets/ProductList';
import {
  getProducts,
  getProductGroups,
  getShelfs,
} from './state/products/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductGroups());
    dispatch(getShelfs());
  }, []);
  return (
    <div className='App'>
      <ProductList />
    </div>
  );
}

export default App;

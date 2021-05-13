import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import Header from '../Header';
import Row from '../../components/Row';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <Header />
      <List
        height={900}
        itemCount={products?.length}
        itemSize={42}
        width={'100%'}
        itemData={products}
      >
        {Row}
      </List>
    </>
  );
};

export default ProductList;

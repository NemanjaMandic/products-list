import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../state/products/actions';
import TitleBar from '../../components/TitleBar';
import Filter from '../../components/Filter';
import ColumnHeaderList from '../../components/ColumnHeaderList';
import useDebounce from '../../hooks/useDebounce';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    dispatch(filterProducts(debouncedValue));
  }, [debouncedValue]);

  return (
    <div>
      <TitleBar />
      <Filter value={value} setValue={setValue} />
      <ColumnHeaderList />
    </div>
  );
};

export default Header;

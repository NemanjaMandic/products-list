import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ListItem, Cell } from './Row.styled';
import Select from '../Select';

const Row = ({ data, index, style }) => {
  const [shelf, setShelf] = useState(data[index]?.shelf);
  const [productGroup, setProductGroup] = useState(data[index]?.productGroup);

  const handleShelfSelect = (e) => {
    setShelf(e.target.value);
  };
  const handleProductGroupSelect = (e) => {
    setProductGroup(e.target.value);
  };
  const { shelfs, productGroups } = useSelector((state) => state.products);

  return (
    <ListItem style={style}>
      <Cell>{data[index]?.ean_plu}</Cell>
      <Cell>{data[index]?.name}</Cell>
      <Cell>{data[index]?.producer}</Cell>
      <Cell>{data[index]?.wt_vol_pce}</Cell>
      <Select values={shelfs} value={shelf} onChange={handleShelfSelect} />
      <Select
        values={productGroups}
        value={productGroup}
        onChange={handleProductGroupSelect}
      />
    </ListItem>
  );
};

Row.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  index: PropTypes.number,
};
export default Row;

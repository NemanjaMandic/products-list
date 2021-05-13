import PropTypes from 'prop-types';

import { SelectStyled, Option } from './Select.styled';

const Select = ({ values, value, onChange }) => {
  return (
    <SelectStyled value={value} onChange={onChange}>
      {values.map((val) => (
        <Option value={val.name} key={val.id}>
          {val.name}
        </Option>
      ))}
    </SelectStyled>
  );
};

Select.propTypes = {
  values: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Select;

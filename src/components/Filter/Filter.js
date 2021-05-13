import PropTypes from 'prop-types';
import filter from '../../assets/images/filter.svg';
import { FilterWrapper, Icon, StyledInput } from './Filter.styled';

const Filter = ({ value, setValue }) => {
  return (
    <FilterWrapper>
      <Icon src={filter} alt='filter icon' />
      <StyledInput
        type='text'
        placeholder='Filter by name'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};
export default Filter;

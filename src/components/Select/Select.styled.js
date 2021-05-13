import styled from 'styled-components';
import dropDown from '../../assets/images/drop-down.svg';

export const SelectStyled = styled.select`
  flex: 1;
  border: none;
  outline: none;
  height: 41px;
  cursor: pointer;
  color: #333;
  font-size: 13px;
  appearance: none;
  background: url(${dropDown}) 0 0 no-repeat;
  background-position: 75%;
`;

export const Option = styled.option`
  background: #f1f2f2;
`;

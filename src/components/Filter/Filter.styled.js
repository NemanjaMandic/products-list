import styled from 'styled-components';

export const StyledInput = styled.input`
  flex: 1;
  background: #ffffff;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 32px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  background: #60a5ea;
  padding: 5px 6px 7px 6px;
`;

export const Icon = styled.img`
  background: #fff;
  padding-right: 9px;
  padding-left: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

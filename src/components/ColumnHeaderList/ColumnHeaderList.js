import { ColumnHeader, ColumnTitle } from './ColumnHeaderList.styled';
const ColumnHeaderList = () => {
  return (
    <ColumnHeader>
      <ColumnTitle>EAN/PLU</ColumnTitle>
      <ColumnTitle>NAME</ColumnTitle>
      <ColumnTitle>PRODUCER</ColumnTitle>
      <ColumnTitle>SIZE</ColumnTitle>
      <ColumnTitle>SHELF</ColumnTitle>
      <ColumnTitle>PRODUCT GROUP</ColumnTitle>
    </ColumnHeader>
  );
};
export default ColumnHeaderList;

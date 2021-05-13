import products from '../../assets/data/products.json';
import product_groups from '../../assets/data/product_groups.json';
import shelfs from '../../assets/data/shelfs.json';
import {
  GET_PRODUCTS,
  GET_FILTERED_PRODUCTS,
  GET_PRODUCT_GROUPS,
  GET_SHELFS,
} from './types';

const shelfsData = shelfs.reduce((acc, shelf) => {
  return {
    ...acc,
    [shelf.id]: shelf.name,
  };
}, {});

const productGroups = product_groups.reduce((acc, group) => {
  return {
    ...acc,
    [group.id]: group.name,
  };
}, {});

const productsData = products.map((product) => {
  return {
    ...product,
    shelf: shelfsData[product.shelf_id],
    productGroup: productGroups[product.product_group_id],
  };
});

export const getProducts = () => (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS, payload: productsData });
  } catch (error) {
    console.error(error);
  }
};

export const getProductGroups = () => (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_GROUPS, payload: product_groups });
  } catch (error) {
    console.error(error);
  }
};

export const filterProducts = (searchTerm) => (dispatch) => {
  const filteredProducts = productsData.filter((product) => {
    const normalizedProductName = product.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return normalizedProductName.startsWith(normalizedSearchTerm);
  });

  dispatch({ type: GET_FILTERED_PRODUCTS, payload: filteredProducts });
};

export const getShelfs = () => (dispatch) => {
  try {
    dispatch({ type: GET_SHELFS, payload: shelfs });
  } catch (err) {
    console.error(err);
  }
};

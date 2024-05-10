

import * as actionTypes from './Type';

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const updateItem = (item) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    payload: item
  };
};

export const deleteItem = (itemId) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: itemId
  };
};

export const fetchItems = () => {
  return {
    type: actionTypes.FETCH_ITEMS
  };
};

export const fetchItemById = (itemId) => {
  return {
    type: actionTypes.FETCH_ITEM_BY_ID,
    payload: itemId
  };
};

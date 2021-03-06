import * as types from '../constants';

export const fetchSalesSuccess = products => ({
  type: types.FETCH_SALES_SUCCESS,
  payload: { products }
});

export const fetchSalesFailure = error => ({
  type: types.FETCH_SALES_FAILURE,
  payload: { error }
});

export const fetchSales = () => async dispatch => {
  await fetch('/salesdata')
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchSalesSuccess(json));
      return json;
    });
  // .catch(error => dispatch(fetchSalesFailure(error)));
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

import { fetchLineFoods } from 'apis/line_foods';
import { Fragment, useEffect, useReducer } from 'react';
// reducers
import { initialState, lineFoodsActionTypes, lineFoodsReducer } from 'reducers/lineFood';

export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);

  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTypes.FETCH_SUCCESS,
          payload: {
            linFoodSummary: data,
          },
        })
      )
      .catch((e) => console.error(e));
  }, []);
  return <Fragment>注文画面</Fragment>;
};

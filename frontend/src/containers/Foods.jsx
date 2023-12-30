import { Fragment, useEffect } from 'react';

// apis
import { fetchFoods } from 'apis/foods';

export const Foods = ({ match }) => {
  useEffect(() => {
    fetchFoods(match.params.restaurantsId).then((data) => console.log(data));
  }, [match.params.restaurantsId]);
  return (
    <Fragment>
      フード一覧
      <p>restaurantsIdは {match.params.restaurantsId} です</p>
    </Fragment>
  );
};

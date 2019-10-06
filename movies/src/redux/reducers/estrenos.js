import tipo from '../actions/types';

const init = {
  data: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo._FULFILLED:
      const { results } = action.payload.data;
      const random = results[ Math.floor(Math.random() * results.length) ];
      return Object.assign( {},state,
        {
          data: results,
          random
        })
    default:
      return state
  }
}
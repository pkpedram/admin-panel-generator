
const initialState = {
  
};

export default function customState(state = initialState, action) {
  let { type, payload, params } = action;
  switch (type) {
    


    default:
      return state;
  }
}

export default function reducer(state, action) {
  if (state === undefined) {
    return { values: [] };
  }
  const values = state.values;
  switch (action.type) {
    case "add":
	 	return { values: [...values, action.value]};
    case "remove":
    	const index = action.index
	    const newVals = values.slice(0, index).concat(values.slice(index + 1, values.length));
    	return { values: newVals };    
    default:
      return state;
  }
}
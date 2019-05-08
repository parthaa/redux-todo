// Action

const addAction = (value) => { 
	return { type: "add", value: value }
};
const removeAction = (index) => {
	return { type: "remove", index: index }
};

export {
  addAction,
  removeAction
}
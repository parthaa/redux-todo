import {connect} from "react-redux";
import Body from "../presentation/Body";
import { removeAction} from "../../actions";

function mapStateToProps(state) {
  return {
    values: state.values,
    index: state.index
  };
}
 
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    remove: function(index) {
      return dispatch(removeAction(index));
    }
  };
}
 
// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
 
export default connectedComponent;
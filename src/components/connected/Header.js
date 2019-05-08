import {connect} from "react-redux";
import Header from "../presentation/Header";
import {addAction} from "../../actions";

function mapStateToProps(state) {
  return {
    values: state.values
  };
}
 
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function(value) {
      return dispatch(addAction(value));
    }
  };
}
 
// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
 
export default connectedComponent;
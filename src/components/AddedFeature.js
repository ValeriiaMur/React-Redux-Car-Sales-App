import React from 'react';
import {connect} from "react-redux";
import {removeFeature} from "../reducers/priceActions"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = { () => props.removeFeature(props.feature)} 
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};


// export default AddedFeature;

const mapStateToProps = (state)=> {
  return {} 
}

export default connect (mapStateToProps, {removeFeature})(AddedFeature);

// export default connect ( {})(AddedFeature);



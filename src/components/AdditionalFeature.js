import React from 'react';
import {connect} from "react-redux";
import {priceReducer} from "../reducers/priceReducer"
import {addPrice} from "../reducers/priceActions"


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.addPrice(props.feature)}
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
    
  );
};

// export default AdditionalFeature;

const mapStateToProps = (state)=> {
  return {
    additionalPrice: state.additionalPrice,
  } 
}

export default connect(mapStateToProps,{addPrice})(AdditionalFeature);

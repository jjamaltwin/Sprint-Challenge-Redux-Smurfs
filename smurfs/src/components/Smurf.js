import React from 'react';

import { connect } from 'react-redux';



const Smurf = props => {
   

    return (
        <div>
            <p>{props.smurf.name} is {props.smurf.age} years old and is {props.smurf.height} tall.</p>
          
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Smurf);
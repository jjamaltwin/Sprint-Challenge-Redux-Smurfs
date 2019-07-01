import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions/index.js';

class UpdateSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: '',
            name: '',
            height: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.updateSmurf(this.props.smurf.id, this.state);
        this.setState({
            age: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='age'
                    value={this.state.age}
                    onChange={this.inputHandler}
                    placeholder='New Smurf age'
                />
                 <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.inputHandler}
                    placeholder='New Smurf name'
                />
                 <input
                    type='text'
                    name='height'
                    value={this.state.height}
                    onChange={this.inputHandler}
                    placeholder='New Smurf height'
                />
                <button type='submit'>Update Smurf info</button>
            </form>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {updateSmurf})(UpdateSmurf);
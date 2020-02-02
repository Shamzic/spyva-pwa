import React, { Component } from 'react';

class Elem extends Component {

    constructor(props){
        super(props);
        this.state = {
            elem: props.elem
        };
    }

    render() {
        return (
            <div>
                {this.state.elem}      
            </div>
        );
    }
}

export default Elem;
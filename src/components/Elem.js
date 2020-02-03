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
            <li> TOTO {this.state.elem.text}</li>
        );
    }
}

export default Elem;
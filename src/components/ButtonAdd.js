import React from 'react';
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

const ButtonAdd = function(props) {

    function handlerClick() {
        var elems = props.elems;
        console.log("clic");
        props.add_elem("Element " + (elems.length + 1));
    }

    return (
            <button onClick={handlerClick.bind(this)}>{props.text}</button>      
    );
}

function mapStateToProps(state) {
    return {
        elems: state.reducers.elems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add_elem: function(txt) {
            var action = ACTIONS.add_elem(txt);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd);
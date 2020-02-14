import React from 'react'
import * as ACTIONS from '../store/actions/actions'
import {connect} from 'react-redux'

const  ButtonRevert = function(props) {
        
    function handlerClick() {
        props.revert_list();
    }

    return (
        <button onClick={handlerClick}> {props.text}
        </button>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        revert_list: function() {
            var action = ACTIONS.revert_list();
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ButtonRevert);
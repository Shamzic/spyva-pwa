import React from 'react';
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'


const ButtonRemove = props => {
    
    const { ukey, style, text } = props;

    function handlerClick() {
        props.remove_elem(ukey);
    }

    return (
        <button style={style} onClick={handlerClick}>{text}</button>    
    );
};



function mapDispatchToProps(dispatch) {
    return {
        remove_elem: function(txt) {
            var action = ACTIONS.remove_elem(txt);
            dispatch(action);
        }
    }
}


export default connect(null, mapDispatchToProps)(ButtonRemove);
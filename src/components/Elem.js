import React from 'react';
import ButtonRemove from './ButtonRemove';
import * as ACTIONS from '../store/actions/actions'
import {connect} from 'react-redux'

class Elem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modifyOn: false,
            value: props.text
        }
    }

    handlerDoubleclick() {
        this.setState({modifyOn: true});
    }

    handlerChange(event) {
        var value = event.target.value;
        this.setState({value: value});
    }

    handlerBlur() {
        this.setState({modifyOn: false});
        var value = this.state.value;
        const { ukey } = this.props;   
        this.props.modify_elem(ukey, value);
    }

    render() {
        
        const {store, ukey, text } = this.props;

        return (
            <div>
            { this.state.modifyOn ?
                <input 
                    onChange={this.handlerChange.bind(this)} 
                    onBlur={this.handlerBlur.bind(this)}
                    autoFocus={true} 
                    value={this.state.value}>
                </input> 
                :
                <span onDoubleClick={this.handlerDoubleclick.bind(this)}>{text}</span>
            }
                <ButtonRemove style={{margin: "10px", fontSize: "10px"}} ukey={ukey} text="Supprimer" store={store}></ButtonRemove>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return  {
        modify_elem: function(ukey, value) {
            var action = ACTIONS.modify_elem(ukey, value);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Elem);
import React, { Component } from 'react';
import ListeElement from './ListeElement'
import * as ACTIONS from "../store/actions/actions"

class ConnectedListeElements extends Component {

    constructor(props) {
        super(props);
        this.state = props.store.getState();
    }

    componentDidMount() {
        const { store } = this.props;
        
        this.unsubscribe = store.subscribe(() => {
            this.setState({...store.getState() });
        });

        this.props.elems.forEach(function(txt) {
            store.dispatch(ACTIONS.add_elem(txt));
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <ListeElement elems={this.state.elems} store={this.props.store}/>
        );
    }
}

export default ConnectedListeElements;
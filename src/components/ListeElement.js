import React from 'react'
import Elem from './Elem'
import {connect} from 'react-redux'

const ListeElement= function(props) {

  console.log(props)
  var { elems } = props;
  if (elems == null) {
    // elems = [{txt: "1"}];
  }
  return (
    <ul> {
      elems.map(function(elem) {
        return <li key={elem.ukey}> 
            <Elem ukey={elem.ukey} text={elem.txt}/>
          </li>
    })
    } </ul>
  )
}

function mapStateToProps(state) {
  return {
    elems: state.reducers.elems
  }
}

export default connect(mapStateToProps)(ListeElement);

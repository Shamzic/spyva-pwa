import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
import { connect } from 'react-redux'
import '../../css/NavBar.css'


const NavBar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">Sypva</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar)

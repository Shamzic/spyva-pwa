import React from 'react'
import '../css/SignIn.css'
import * as firebase from 'firebase/app';
import 'firebase/auth';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Inscription effectuée ' + this.state.value);
    event.preventDefault();
    this.signInWithEmail();
  }

  signInWithEmail()  {
    alert("GO");
    // Sign in with email and pass.
    // [START createwithemail]
    var email = this.state.mail;
    var password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
  }


  render() {
    return (
      <div className="sign-in">
        <section className="container section scrollspy" id="signin">
          <h3> Inscription </h3>
          <form>
            <label> Mail :
              <input type="text" name="mail" />
            </label>
            <label> Password :
              <input type="text" name="mail" />
            </label>
            <input type="submit" value="S'inscrire" />
          </form>
        </section>
      </div>
    )
  }
}
export default SignIn

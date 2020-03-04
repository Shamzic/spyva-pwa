import React, { Component } from 'react';
import { createShift } from '../../store/actions/shiftActions'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

class CreateShift extends Component {


    state = {
        availability_max: '',
        availability_min: '',
        date_start: '',
        date_end: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createShift(this.state);
    }

    render() {
        const { auth } = this.props;
        if(!auth.uid)
          return <Redirect to='/signin'/>
        else
        return (
            <div className="">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">New Shift</h5>
              <div className="input-field">
                <label htmlFor="availability_max">Maximum participants</label>
                <input type="number" id="availability_max" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="availability_min">Minimum participants</label>
                <input type="number" id="availability_min" onChange={this.handleChange}/>
              </div>

              <div className="input-field">
                <label htmlFor="date_start">Start</label>
                <input type="datetime-local" id="date_start" onChange={this.handleChange}/>
              </div>

              <div className="input-field">
                <label htmlFor="date_end">Start</label>
                <input type="datetime-local" id="date_end" onChange={this.handleChange}/>
              </div> 

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
              </div>
            </form>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        createShift: (project) => dispatch(createShift(project))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateShift);
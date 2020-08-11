import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div id='register'>
        <h2>Register:</h2>
        {this.props.info.map(reservation => (
          <div>
            {reservation.day} {reservation.time} | {reservation.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Register

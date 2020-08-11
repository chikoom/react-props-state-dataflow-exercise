import React, { Component } from 'react'

class Calendar extends Component {
  render() {
    return (
      <div id='calendar'>
        <h2>Calendar:</h2>
        {this.props.info.map(reservation => (
          <div>
            {reservation.day} {reservation.time} | {reservation.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Calendar

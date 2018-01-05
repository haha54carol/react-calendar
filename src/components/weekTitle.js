import React, { Component } from 'react'

let style = {
    textAlign: 'center',
    height: 30
}

export default class WeekTitle extends Component {
    render() {
        return (
            <div className="row text" style={style}>
                <div className="col">Sun</div>
                <div className="col">Mon</div>
                <div className="col">Tue</div>
                <div className="col">Wed</div>
                <div className="col">Thu</div>
                <div className="col">Fri</div>
                <div className="col">Sat</div>
            </div>
        )
    }
}

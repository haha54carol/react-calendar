import React, { Component } from 'react'
import WeekTitle from './weekTitle'

let style = {
    height: 60,
    fontWeight: 'bold'
}

let yearStyle = {
    paddingRight: 20,
    paddingTop: 20,
    fontSize: 14
}


export default class Header extends Component {
    render() {
        const {year, month} = this.props
        return (
            <div>
            <div className="row justify-content-center text" style={style}>
                <div className="col-12 text-theme " style={yearStyle}>
                    {year}
                </div>
                <div className="offset-11 col" >
                    {month}
                </div>    
            </div>
            <WeekTitle />
            </div>
        )
    }
}

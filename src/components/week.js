import React, { Component } from 'react'

let dateStyle = {
    height:30,
    color: 'gray',
    textAlign: 'center',
}

const Date = ({date}) => (
    <div className={`col`} style={dateStyle}>
        {date.split('-')[2]}
    </div>
)

const emptyDate = (count, key) =>{
    
    let result = []

    for(let i=0; i < count; i ++) {
        result.push( <Date key={`${key}_${i}`} date={' '} />)
    }

    return result
} 


export default class Week extends Component {
    render() {
        const {date, arr} = this.props
        console.log('Week arr:' + arr)
        const emptyHead = date[arr[0]].dayOfWeek 
        const emptyTail = 6 - date[arr[arr.length -1]].dayOfWeek
        const emptyH = emptyDate(emptyHead, arr[0]), emptyT = emptyDate(emptyTail, arr[arr.length -1])
        console.log('Week date:' + JSON.stringify(date))

        return (
            <div className="row text">
                {
                    emptyH.map(d => d)
                }
                {
                     arr.map(d => <Date key={d} date={d} />)
                }
                {
                    emptyT.map(d => d)
                }
            </div>
        )
    }
}

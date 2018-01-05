import React, {Component} from 'react';
import {genCalendarObj} from 'calendar-generator'
import './less/main.css'
import Header from './components/header'
import Week from './components/week'

const yearWeek = (dateArr) => {
    let w = new Set()
    let y = new Set()

    for (let i = 0; i < dateArr.length; i++) {
        if (!y.has(dateArr[i].year))
            y.add(dateArr[i].year)

        if (!w.has(dateArr[i].week))
            w.add(dateArr[i].week)
    }

    return {w, y}

}

class App extends Component {

    render() {
        const obj = genCalendarObj('2017-12-01', '2018-01-30')
        const {monthWeekDate, date} = obj
        const tmpM = Object.keys(monthWeekDate)

        const dateArr = Object.keys(date)
        const weeks = yearWeek(dateArr)

        const crossYear = date[dateArr[0]].year !== date[dateArr[dateArr.length - 1]].year

        const months = crossYear ? tmpM.slice(0).reverse() : tmpM

        console.log('obj: ' + JSON.stringify(obj))
        return (
            <div className="container">
                {
                    months.map(m => {
                        const tmpWeeks = Object.keys(monthWeekDate[m])
                        const weeks = crossYear ? tmpWeeks.slice(0) : tmpWeeks


                        return (
                            <div key={`month_${m}`}>
                                <Header month={m}/>
                                {

                                    weeks.map(w => (
                                        <Week date={date} key={`week_${w}`} arr={monthWeekDate[m][w]}/>
                                    ))

                                }
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default App;

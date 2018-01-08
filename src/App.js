import React, {Component} from 'react';
import {genCalendarObj} from 'calendar-generator'
import './less/main.css'
import Header from './components/header'
import Week from './components/week'

const yearWeek = (date, dateArr) => {
    let w = new Set()
    let m = new Set()
    let y = new Set()

    for (let i = 0; i < dateArr.length; i++) {
        if (!y.has(date[dateArr[i]].year))
            y.add(date[dateArr[i]].year)

        if (!m.has(date[dateArr[i]].month))
            m.add(date[dateArr[i]].month)

        if (!w.has(date[dateArr[i]].week))
            w.add(date[dateArr[i]].week)
    }

    return {weeks: [...w], months: [...m],years: [...y]}

}

class App extends Component {

    render() {
        const obj = genCalendarObj('2017-12-01', '2018-01-30')
        const {monthWeekDate, date} = obj

        const dateArr = Object.keys(date)
        const {months, weeks} = yearWeek(date, dateArr)

        console.log('obj: ' + JSON.stringify(obj))
        console.log('weeks: ' + JSON.stringify(weeks))

        return (
            <div className="container">
                {
                    months.map(m => {
                        console.log('m:' + m)
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

export const genCalendarObj = (from, to) => {
    let calendar = { date: {}, start: '', end: '', weeksByMonths: {} }
    const fromWd = moment(from).day()
    const toWd = moment(to).day()
    const fMonth = moment(from).month()
    const tMonth = moment(to).month()
    const endFrom = moment(from).subtract(fromWd, 'days').toObject()
    const endTo = moment(to).add(6 - toWd, 'days').toObject()

    let dateOfMonth = {}

    //define date range
    const start = fromWd === 0
        ? moment(from).toObject()
        : (endFrom.months !== fMonth ? moment(from).startOf('month').toObject() : endFrom)

    const end = toWd === 6
        ? moment(to).toObject()
        : (endTo.months !== tMonth ? moment(to).endOf('month').toObject() : endTo)

    const days = moment(end).diff(start, 'days')


    for (let j = 0; j <= days; j++) {
        let tmpDay = moment(start).add(j, 'days').toObject()
        if (moment(tmpDay).isSameOrBefore(end)) {

            let dateStr = moment(tmpDay).format('YYYY-MM-DD')
            let month = moment(tmpDay).month() + 1
            let dayOfWeek = moment(tmpDay).day()

            if (!dateOfMonth.hasOwnProperty(month)) {
                dateOfMonth[month] = []
            }
            dateOfMonth[month].push(dateStr)

            if (!calendar.weeksByMonths.hasOwnProperty(month)) {
                calendar.weeksByMonths[month] = []
            }


            calendar.date[dateStr] = {
                isDisable: moment(tmpDay).isBefore(from) || moment(tmpDay).isAfter(to),
                year: tmpDay.years,
                month,
                day: tmpDay.date,
                dayOfWeek,
            }
        }
    }

    calendar.weeksByMonths = getWeeksByMonths(dateOfMonth, calendar.date)

    return calendar
}

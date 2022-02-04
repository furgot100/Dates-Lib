const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


class GetDate {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return parseInt(this._date.getFullYear().toString().slice(2))
    }

    get month() {
        return months[this._date.getMonth()]
    }
    get mon() {
        return mon[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }
    get dy() {
        return dy[this._date.getDay()]
    }

    get hours() {
        return this._date.getHours()
    }

    get min() {
        return this._date.getMinutes()
    }   

    get secs() {
        return this._date.getSeconds()
    }
}

const today = new GetDate()
// const randomDate = new D('1965','9','26') 
console.log(today._date)
console.log(today.year)
console.log(today.day)
console.log(today.date)
console.log(today.month)
console.log(today.hours)
console.log(today.min)
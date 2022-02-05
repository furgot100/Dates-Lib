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
        return this.year % 100
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

    format = (mask) => {
        const fobj = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': this.day,
            'd': this.dy
        }

        if(!mask) {
            return `${this.day} ${this.mon}, ${this.year}`
        }

        const newArr = []
        const maskArr = mask.split('')
        for(let i = 0; i<maskArr.length; i+=1) {
            if (fobj[maskArr[i]]) {
                newArr.push(fobj[maskArr[i]])
            } else {
                newArr.push(maskArr[i])
            }
        }
        return newArr.join('')
    }
}

const today = new GetDate()
// const randomDate = new D('1965','9','26') 
console.log(today._date)
console.log(today.format('Y m, d' ))
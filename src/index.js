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

    when() {
        const now = new Date();
        const dy = this._date.getFullYear() - now.getFullYear();
        const dm = this._date.getMonth() - now.getMonth();
        const totalMonths = dy * 12 + dm;
        const dd = Math.ceil((this._date - now) / 86400 / 1000);
    
        if (Math.abs(dd) < 7) {
          return `${Math.abs(dd)} day${Math.abs(dd) > 1 ? 's' : ''} ${dd < 0 ? 'ago' : 'from now'}`;
        } if (Math.abs(totalMonths) < 12) {
          return `${Math.abs(dm)} month${Math.abs(dm) > 1 ? 's' : ''} ${dm < 0 ? 'ago' : 'from now'}`;
        } if (Math.abs(dy) >= 1) {
          return `${Math.abs(dy)} year${Math.abs(dy) > 1 ? 's' : ''} ${dy < 0 ? 'ago' : 'from now'}`;
        }
    }
}

const today = new GetDate()
// const randomDate = new D('1965','9','26') 
console.log(today._date)
console.log(today.format('Y m, d' ))

const d = new GetDate(2019, 0, 2, 3, 4, 5)
console.log(d.when())
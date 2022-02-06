const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


class GetDate {
    constructor(...args) {
        this._date = new Date(...args)
    }

    /** 
    * get year returns full year of the date obj
    * @param {} input none
    * @returns {number} the full year 
    */
    get year() {
        return this._date.getFullYear()
    }

    /** 
    * get yr returns shortned year of the date obj
    * @param {} input none
    * @returns {number} the short year 
    */
    get yr() {
        return this.year % 100
    }


    /** 
    * get month returns the month(string) of the dateobj
    * @param {} input none
    * @returns {string} the month of the dateobj
    */
    get month() {
        return months[this._date.getMonth()]
    }

    /** 
    * get mon returns the month(short string) of the dateobj
    * @param {} input none
    * @returns {string} the short month
    */
    get mon() {
        return mon[this._date.getMonth()]
    }

    /** 
    * get day returns the day of the dateobj
    * @param {} input none
    * @returns {string} the day of the week of the dateobj
    */
    get day() {
        return days[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    /** 
    * get dy returns the day(shortened string) of the dateobj
    * @param {} input none
    * @returns {string} the short day (first three letters) of the week of the dateobj
    */
    get dy() {
        return dy[this._date.getDay()]
    }


    /** 
    * get hours returns the hour of the dateobj
    * @param {} input none
    * @returns {string} the hour of the dateobj occurence
    */
    get hours() {
        return this._date.getHours()
    }


    /** 
    * get min returns the minutes of the dateobj
    * @param {} input none
    * @returns {string} the minutes of the dateobj occurence
    */
    get min() {
        return this._date.getMinutes()
    }   

    /** 
    * get secs returns the seconds of the dateobj
    * @param {} input none
    * @returns {string} the seconds of the dateobj occurence
    */
    get secs() {
        return this._date.getSeconds()
    }

    /** 
    * function format returns a formatted date
    * @param {string} input string
    * @returns {string} the format of the date
    */
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

    /** 
    * function returns when a date occured compared to the current time
    * @param {} input none
    * @returns {string} how long before or after the current date
    */
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
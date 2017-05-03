let Dateim = function() {
	this.evt = "load"
	this.sel = window
	this.func;
	this.dates = ""
	this.formats = ""
	this.day = ""
	this.month = ""
	this.year = ""
	this.parsed = ""
	this.lang = {
		month: [
			'January', 'February', 'March', 'April', 'May',
			'June', 'July', 'August', 'September', 'October',
			'November', 'December'
		]
	}
	this.monthName = ""
}

Dateim.prototype.InvalidDateFormatException = function(message) {
	this.message = "InvalidDateFormatException: " + message
	this.name = "InvalidDateFormatException"
	this.stack = (new Error()).stack;
}

Dateim.prototype.InvalidDateFormatException.prototype = Error.prototype;

Dateim.prototype.when = function(data) {
	this.evt = data.evt
	this.sel = data.sel
	this.method = data.method;
	return this
}

Dateim.prototype.run = function() {
	this.sel.addEventListener(this.evt, this.method)

	return this
}

Dateim.prototype.date = function(dates) {
	this.dates = dates
	return this
}

Dateim.prototype.format = function(formats) {
	this.formats = formats
	let dateSplitted = this.dates.split(/[.,-/]+/)

	for(let date of dateSplitted) {
		switch(true) {
			case date >= 32:
				this.year = date
				dateSplitted.filter(item => !dateSplitted.includes(item))
				break;
			case date >= 01 && date <= 12 && this.month == "":
				this.month = date
				dateSplitted.filter(item => !dateSplitted.includes(item))
				break;
			case date >= 01 && date <= 31 && this.day == "":
				this.day = date
				dateSplitted.filter(item => !dateSplitted.includes(item))
				break;
			default:
				//
				break;
		}
	}

	if(this.year != "" && this.month != "" && this.day != "") {
		this.parsed = this.formats
					  		.replace('yyyy', this.year)
					  		.replace('mm', this.month)
					  		.replace('dd', this.day)
	} else {
		throw new this.InvalidDateFormatException("Wrong date format!")
	}

	return this
}

Dateim.prototype.settings = function(data){
	let monthNumber = this.month - 1

	if(data.lang.month) {
		this.lang.month = data.lang.month
	}
	this.monthName = this.lang.month[monthNumber]
	return this
}

Dateim.prototype.getDayNumber = function() {
	return this.day
}

Dateim.prototype.getMonthNumber = function() {
	return this.month
}

Dateim.prototype.getYear = function() {
	return this.year
}
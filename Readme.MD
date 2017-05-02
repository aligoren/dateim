# Dateim, Date Format Library

Dateim experimental and small date format library.

You shouldn't use on critical projects

# Usage

**Current Formats:**

	- yyyy-mm-dd
	- yyyy.mm.dd
	- yyyy/mm/dd

Firstly, check dateim_example.js file

# Get Single Dates

**Day, Month and Year Number**

```javascript
var dateim = new Dateim()

/* Day Number */
var day = dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')
	.getDayNumber()

/* Month Number */
var month = dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')
	.getMonthNumber()

/* Year Number */
var month = dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')
	.getMonthNumber()

```

**Access object variables**

```javascript
var dates = dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')

console.log("Day: " +dates.day)
console.log("Month: " +dates.month)
console.log("Year: " +dates.year)
```

**Use with Events**

```javascript
dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')
	.when({
		evt: 'click',
		sel: document.querySelector("#btnSetDate"),
		method: function() {
			let dateText = document.querySelector("#dateText")
			dateText.innerText = dateim.parsed
		}
	})
 .run()
```


# ToDo

- [ ] Parse hours
- [ ] Extract day and month names
- [ ] Find day of week
- [ ] Find week number
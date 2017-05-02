let date = document.querySelector("#date")
let dateSet = document.querySelector("#dateSet")

var dateim = new Dateim()

dateim
	.date('31/12/2017')
	.format('dd/mm/yyyy')
	.when({
		evt: 'click',
		sel: dateSet,
		method: function() {
			date.innerText = dateim.parsed
		}
	})
	.run()
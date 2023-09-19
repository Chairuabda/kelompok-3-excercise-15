// no 1
function checkDate(dateChoice) {
	let datee = new Date(dateChoice);
	let day = datee.getDay();
	if (day == 0 || day == 6) {
		return "Weekend";
	} else {
		return "Work Day";
	}
}

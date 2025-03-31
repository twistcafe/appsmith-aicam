export default {
	init() {
		setInterval(
			get_results.run(),
			60000
		)
		
		// fire once
		setTimeout(get_results.run(), 1000)
		return true
	}
}
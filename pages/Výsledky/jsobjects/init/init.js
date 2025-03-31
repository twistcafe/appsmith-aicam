export default {
	init() {
		setInterval(
			get_results.run(),
			60000
		)
		
		setTimeout(get_results.run(), 200)
	}
}
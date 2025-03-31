export default {
	init() {
		setInterval(
			get_results.run(),
			60000
		)
	}
}
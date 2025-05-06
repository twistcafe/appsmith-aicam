export default {
	init() {
		setInterval(
			get_results.run(),
			60000
		)
		
		if (filter_branches.isValid) {
			setTimeout(() => {get_results.run()}, 300)
		}
	}
}
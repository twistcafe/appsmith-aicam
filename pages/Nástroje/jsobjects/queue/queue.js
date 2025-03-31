export default {
	pageLoad () {
		setInterval(() => {
			queue_state.run()
		}, 60000)
	}
}
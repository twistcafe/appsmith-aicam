export default {
	pageLoad () {
		setInterval(() => {
			healthcheck.run()
		}, 60000)
	}
}
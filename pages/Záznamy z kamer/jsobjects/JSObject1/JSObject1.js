export default {
	onload () {
		if (appsmith.URL.queryParams.branch) {
			setTimeout(() => {
				branch.setSelectedOption(parseInt(appsmith.URL.queryParams.branch))
				get_screenshots_per_branch.run()
			}, 200)
		}
		
		setInterval(() => get_screenshots_per_branch.run(), 60000)
	}
}
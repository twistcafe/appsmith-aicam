export default {
	convertToLi (data) {
		let table = '<table border="1" cellpadding="5" cellspacing="0">';
		table += '<tbody>';

		for (const key in data) {
			table += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
		}

		table += '</tbody></table>';
		return table;
	},
	prefill () {
		if (appsmith.URL.queryParams.prompt) {
			prompt.setValue(appsmith.URL.queryParams.prompt)
		}
	}
}
export default {
	data() {
		return {
			// Create unique ID so clicking the label also (un)checks the box
			uniqueId:
				'_' +
				Math.random()
					.toString(36)
					.substr(2, 9)
		}
	}
}

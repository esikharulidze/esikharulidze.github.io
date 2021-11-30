const groupTherapy = [
	{
		slug: 'emotional-intelligence-course-express',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	}
]

module.exports.getGroupTherapyBySlug = slug => groupTherapy.filter(therapy => therapy.slug === slug)[0]

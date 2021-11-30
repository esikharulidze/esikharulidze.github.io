const educational = [
	{
		slug: 'emotional-intelligence-course-express',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	}
]

module.exports.getEducationalBySlug = slug => educational.filter(therapy => therapy.slug === slug)[0]

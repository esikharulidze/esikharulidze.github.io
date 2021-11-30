const team = [
	{
		slug: 'esikharulidze',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'kbelkania',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'echikovani',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	}
]

module.exports.getTeamBySlug = slug => team.filter(t => t.slug === slug)[0]

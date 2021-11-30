const posts = [
	{
		slug: 'what-is-eq',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'group-meetings',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'what-depression-brings',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'learn-how-to-teach',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: 'healthy-upbringing',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	},
	{
		slug: '5-emotions-of-human',
		title: 'What is This',
		description: 'Descrription',
		image: 'image'
	}
]

module.exports.getPostBySlug = slug => posts.filter(post => post.slug === slug)[0]

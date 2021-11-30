const express = require('express')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')
const { getPostBySlug } = require('./post')
const { getSurveyBySlug } = require('./survey')
const { getGroupTherapyBySlug } = require('./groupTherapy')
const { getEducationalBySlug } = require('./educational')
const { getTeamBySlug } = require('./team')

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html')

app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))

app.get('/team/*', (req, res) => {
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const team = getTeamBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (team) {
			data = data
				.replace(/\$OG_TITLE/g, team.title)
				.replace(/\$OG_DESCRIPTION/g, team.description)
				.replace(/\$OG_IMAGE/g, team.image)
		} else {
			data = data
				.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
				.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
				.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		}
		return res.send(data)
	})
})

app.get('/grouptherapy/*', (req, res) => {
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const therapy = getGroupTherapyBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (therapy) {
			data = data
				.replace(/\$OG_TITLE/g, therapy.title)
				.replace(/\$OG_DESCRIPTION/g, therapy.description)
				.replace(/\$OG_IMAGE/g, therapy.image)
		} else {
			data = data
				.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
				.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
				.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		}
		return res.send(data)
	})
})

app.get('/educational/*', (req, res) => {
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const therapy = getEducationalBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (therapy) {
			data = data
				.replace(/\$OG_TITLE/g, therapy.title)
				.replace(/\$OG_DESCRIPTION/g, therapy.description)
				.replace(/\$OG_IMAGE/g, therapy.image)
		} else {
			data = data
				.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
				.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
				.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		}
		return res.send(data)
	})
})

app.get('/post/*', (req, res, next) => {
	console.log('post')
	console.log(req.params[0])
	console.log(req.query)
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const post = getPostBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (post) {
			data = data
				.replace(/\$OG_TITLE/g, post.title)
				.replace(/\$OG_DESCRIPTION/g, post.description)
				.replace(/\$OG_IMAGE/g, post.image)
		} else {
			data = data
				.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
				.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
				.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		}
		return res.send(data)
	})
})

app.get('/survey/*', (req, res, next) => {
	console.log(req.params)
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const survey = getSurveyBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (survey) {
			data = data
				.replace(/\$OG_TITLE/g, survey.title)
				.replace(/\$OG_DESCRIPTION/g, survey.description)
				.replace(/\$OG_IMAGE/g, survey.image)
		} else {
			data = data
				.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
				.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
				.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		}
		return res.send(data)
	})
})

app.get('/*', (req, res, next) => {
	console.log('other')
	console.log(req.params)
	fs.readFile(indexPath, 'utf8', function (error, data) {
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (req.params[0] === 'post') {
			console.log('post')
		}
		data = data
			.replace(/\$OG_TITLE/g, 'WWW.ANIMUS.GE')
			.replace(/\$OG_DESCRIPTION/g, 'ფსიქოთერაპიული და საგანამანათლებლო ცენტრი')
			.replace(/\$OG_IMAGE/g, 'https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png')
		return res.send(data)
	})
})

app.listen(PORT, error => {
	if (error) {
		return console.log('Error', error)
	}
	console.log('listening on ' + PORT)
})

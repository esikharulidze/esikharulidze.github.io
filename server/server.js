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

app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html')

app.get('/team/*', (req, res) => {
	fs.readFile(indexPath, 'utf8', function (error, data) {
		const team = getTeamBySlug(req.params[0])
		if (error) {
			console.log(error)
			return res.status(404).end()
		}
		if (team) {
			data = data
				.replace('WWW.ANIMUS.GE', team.title)
				.replace('ფსიქოთერაპიული და საგანამანათლებლო სივრცე', team.description)
				.replace('https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png', team.image)
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
				.replace('WWW.ANIMUS.GE', therapy.title)
				.replace('ფსიქოთერაპიული და საგანამანათლებლო სივრცე', therapy.description)
				.replace('https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png', therapy.image)
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
				.replace('WWW.ANIMUS.GE', therapy.title)
				.replace('ფსიქოთერაპიული და საგანამანათლებლო სივრცე', therapy.description)
				.replace('https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png', therapy.image)
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
				.replace('WWW.ANIMUS.GE', post.title)
				.replace('ფსიქოთერაპიული და საგანამანათლებლო სივრცე', post.description)
				.replace('https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png', post.image)
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
				.replace('WWW.ANIMUS.GE', survey.title)
				.replace('ფსიქოთერაპიული და საგანამანათლებლო სივრცე', survey.description)
				.replace('https://animuscontent.s3.eu-central-1.amazonaws.com/Animus-OG.png', survey.image)
		}
		return res.send(data)
	})
})

app.get(['/index.html', '/'], (req, res) => {
	fs.readFile(indexPath, 'utf8', function (error, data) {
		if (error) {
			console.log(error)
			return res.status(404).end()
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
		return res.send(data)
	})
})

app.listen(PORT, error => {
	if (error) {
		return console.log('Error', error)
	}
	console.log('listening on ' + PORT)
})

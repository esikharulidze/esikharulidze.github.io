export type WeekDays = 'ორშაბათი' | 'სამშაბათი' | 'ოთხშაბათი' | 'ხუთშაბათი' | 'პარასკევი' | 'შაბათი' | 'კვირა'
type TherapistHours = '10:00' | '12:00' | '14:00' | '16:00' | '18:00'

export interface BackendPost {
	id: string
	slug: string
	title: string
	author: BackendUser
	categories: BackendCategory[]
	comments: BackendComment[]
	likes: number
	content?: string
	avatar?: string
	cover?: string
	readingTime: string
	updatedAt: string
}

export interface BackendUser {
	_id: string
	id: string
	firstName: string
	lastName: string
	email: string
	username: string
	age: number
	phone: string
	gender: string
	about: string
	jobTitle: string
	slug: string
	posts: BackendPost[]
	avatar?: string
	calendar: TherapistCalendar
}

export interface TherapistCalendar {
	days: WeekDays[]
	hours: TherapistHours[]
	reserved: {
		appointment: string
		date: string
		time: string
	}[]
}

export interface BackendCategory {
	id: string
	title: string
	slug: string
	posts: BackendPost[]
	avatar?: string
	cover?: string
}

export interface BackendComment {
	id: string
	author: string
	parent?: BackendComment
	replies: BackendComment[]
	likes: number
	abuse: boolean
	content: string
	updatedAt: string
}

export interface BackendCourse {
	_id: string
	title: string
	description: string
	slug: string
	content?: string
	cost?: number
	period?: string
	avatar?: string
	cover?: string
	service: BackendService
}

export interface BackendService {
	id: string
	title: string
	slug: 'individual' | 'teens' | 'adults' | 'kids'
	description: string
	courses: BackendCourse[]
}

enum Type {
	individual = 'individual',
	adults = 'adults',
	teens = 'teens',
	kids = 'kids',
	groups = 'groups'
}

export interface CustomerInput {
	name: string
	email: string
	phone: string
	age: number
	type: Type
	problem?: string
	parent?: string
	course?: string
}

export interface TrainingInput {
	name: string
	email: string
	phone: string
	age: number
}

export interface Answer {
	id: number
	answer: string
}

export interface Quizz {
	id: number
	slug: string
	question: string
	answers: Answer[]
}

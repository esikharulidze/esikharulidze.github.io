import __aboutCourses from './jsons/aboutcourses.json'

import {Course} from './types'

const DEMO_COURSES: Course[] = __aboutCourses.map(item => item)

export {DEMO_COURSES}
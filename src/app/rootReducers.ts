import bookmarkReducer from './bookmarks/bookmarksSlice'
import postLikesReducer from './postLikes/postLikes'
import commentLikesReducer from './commentLikes/commentLikes'
import darkmodeReducer from './darkmode/darkmode'
import pagesReducer from './pages/pages'
import mediaRunningReducer from './mediaRunning/mediaRunning'
import authSlice from './auth/authSlice'
import postSlice from './post/postSlice'

const rootReducers = {
	auth: authSlice,
	post: postSlice,
	bookmark: bookmarkReducer,
	postLike: postLikesReducer,
	darkmode: darkmodeReducer,
	commentLikes: commentLikesReducer,
	pages: pagesReducer,
	mediaRunning: mediaRunningReducer
}

export default rootReducers

import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import PostsReducer from './posts_reducer'
// import { reducer as postsReducer}  from "./posts";
import { userReducer } from './userReducer';

const rootReducer= combineReducers({
    user:userReducer,
});

export default rootReducer;

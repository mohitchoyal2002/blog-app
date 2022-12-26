import { createSlice } from '@reduxjs/toolkit'

const allblogs =  JSON.parse(localStorage.getItem('blogs'))


let initialState = {};
if(allblogs == null){
  initialState = {
    blog: null
  }
}
else{
  initialState = {
    blog: allblogs
  }
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState: initialState,
  reducers: {
    postBlog: (state, action)=>{
      if(state.blog === null){
        state.blog = [action.payload]
      }
      else{
        state.blog.push(action.payload);
      }
      localStorage.setItem('blogs',JSON.stringify(state.blog))
    }
  }
});

export const {postBlog} = blogSlice.actions
export const allBlogs = state=>state.blogs.blog;

export default blogSlice.reducer
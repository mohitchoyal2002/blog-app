import './App.css';
import Login from './Login';
import { useSelector } from 'react-redux';
import  { userSelector } from './features/userSlice'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateBlog from './CreateBlog'
import BlogPage from './BlogPage';

function App() {
  const user =  useSelector(userSelector)
  return (
    <div>
      <Header/>
      {/* {user ? <Home/> : <Login/>} */}
      <BrowserRouter>
        <Routes>
          <Route path='' element={user ? <Home/> : <Login/>} />
          <Route path='/create-blog' element={user ? <CreateBlog/> : <Login/>} />
          <Route path='/read-blog' element={user ? <BlogPage/> : <Login/>}/> 
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

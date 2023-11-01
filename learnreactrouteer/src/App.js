import {Routes,Route} from 'react-router-dom'
import { Home } from './component/Home';
import React from 'react';
import { Navbar } from './component/Navbar';
import {Ordersummary} from './component/Ordersummary'
import { Nomatch } from './component/Nomatch';
import { Product } from './component/Product';
import { Featured } from './component/Featured';
import { New } from './component/New';
import { User } from './component/User';
import { UserDetails } from './component/UserDetails';
import { Admin } from './component/Admin';
import { Profile } from './component/Profile';
import { AuthProvider } from './component/auth';
import { loginogin } from './component/login';
const LazyAbout=React.lazy(()=>import('./component/About'))
function App() {
  return (
   <AuthProvider>
   <Navbar/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
   <Route path='about' element={<React.Suspense fallback='Loading...'>
    
   
   <LazyAbout/>
   </React.Suspense>
   
  }/>
    <Route path='/order' element={<Ordersummary/>}/>
    <Route path='*' element={<Nomatch/>}/>
    <Route path='product' element={<Product/>}>
    <Route path='Featured' element={<Featured/>}/>
    <Route path='new' element={<New/>}/>
    </Route>
    <Route path='user' element={<User/>}>
    <Route path=':userId' element={<UserDetails/>}/>
  <Route path='admin' element={<Admin/>}/>
  </Route>
  <Route path='profile' element={<Profile/>}></Route>
  <Route path='login' element={<login/>}></Route>
   </Routes>
   
   </AuthProvider>
  );
}

export default App;

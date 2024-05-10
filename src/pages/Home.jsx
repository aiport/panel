import React,{useEffect} from 'react'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom';
export default function Home() {
  useEffect(() => {
    const cookieValue = Cookies.get('token');
    const path = window.location.pathname;
  console.log(path)
    if(!cookieValue){
      window.location.href = '/login'
    }
    console.log('User logged in!')
  }, []);
  return (
    <>

    </>
  )
}

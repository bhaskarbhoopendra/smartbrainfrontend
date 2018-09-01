import React from 'react';

const Navigation =({onRouteChange,isSignedIn})=>{
  if(isSignedIn){
    return(
      <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p onClick={()=>onRouteChange('signout')} className='f3 dim underline link black pa3 pointer'>Signout</p>
      </nav>
    )
  }else{
    return (
      <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p onClick={()=>onRouteChange('sigin')} className='f3 dim underline link black pa3 pointer'>SignIn</p>
        <p onClick={()=>onRouteChange('register')} className='f3 dim underline link black pa3 pointer'>Register</p>
      </nav>
    )
  }

}

export default Navigation;

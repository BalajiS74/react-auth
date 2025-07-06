import React from 'react'
import Authentication from '../components/Authentication'
function Home() {
  return (
    <div>
        <div className="container" style={{ display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',backgroundImage: 'url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' ,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',flexDirection:'column',color:'white'}}>
            <Authentication />
        </div>
    </div>
  )
}

export default Home
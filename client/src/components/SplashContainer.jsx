import React from 'react'
import '../assets/css/SplashContainer.css'
import { Link } from 'react-router-dom'

function SplashContainer() {
  return (
    <>
      <div className="head__info1__box">
            <p>
          Fast, slow, big, small we love them ALL!! Come and join like-minded car lovers and give us insight on a vehicle that's on your dream list or a vehicle you just love!
        </p>
        
        <Link to='/cars'>
        <h4>Click Here to Get Started 💫  🏎💨  😈</h4>
        </Link>
      </div>
    </>
  )
}

export default SplashContainer

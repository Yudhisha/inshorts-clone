import React from 'react'
import "./FooterInshorts.css"

const FooterInshorts = () => {
  return (
    <div className='footer'>
      <span>
        Inshorts Clone Made by - <a href="">Yudhisha S.J</a>
      </span>
      <hr style={{width:"90%"}}/>
      <div className="iconContainer">
        <a href="https://www.instagram.com/itz_me_yudhisha._john/" alt="insta" target="__blank"><i className="fab fa-instagram-square fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/yudhisha-s-j/" alt="linkedin" target="__blank"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/Yudhisha" alt="facebook" target="__blank"><i className="fab fa-facebook fa-2x"></i></a>
      </div>
    </div>
  )
}

export default FooterInshorts


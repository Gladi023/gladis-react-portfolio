import React from 'react';
import avatar from '../images/avatar.png'

const UserDash = () => {
    return (
        <div>
            <div className='tc grow br2 pa4 dib'>
                <img alt='avatar' src={avatar} class="o-60 br-100 h5 w5 dib" />
            </div>
               <p className='f2 white'>
                {'Welcome to my React Portfolio'}
            </p>
              <div className='white f2' id="about-me" >
                {'About Me:'}
            </div>
            <br></br>
            <div className='white f3'>
                {'Hello, my Name I Gladimar Villamil, I work in entertainment, in legal and development'}
            </div>
            <div className='white f3'>
                {'and I am passionate about producing quality entertainment for online platforms and creating beautiful and innovatine user interfaces.'}
            </div>
            <br></br>
            <br></br>
            <div className='white f2'>
                {'Find some of my web applications below.'}
            </div>
        </div>
    );
}

export default UserDash;
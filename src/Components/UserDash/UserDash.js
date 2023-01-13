import React from 'react';
import avatar from '../images/avatar.png'

const UserDash = () => {
    return (
        <div>
            <div className='tc grow br2 pa4 dib'>
                <img alt='avatar' src={avatar} class="o-60 br-100 h5 w5 dib" />
            </div>
               <p className='f2 black underline'>
                {'Gladimar Villamil react portfolio'}
            </p>
              <div className='black f2 underline' id="about-me" >
                {'About Me:'}
            </div>
            <br></br>
            <div className='black f3'>
                {'Hello, my Name I Gladimar Villamil, I work in entertainment, in legal and development'}
            </div>
            <div className='black f3'>
                {'and I am passionate about producing quality entertainment for online platforms and creating beautiful and innovatine user interfaces.'}
            </div>
            <br></br>
            <br></br>
            <div className='black f3 underline'>
                {'Find some of my web applications below.'}
            </div>
        </div>
    );
}

export default UserDash;
import React from 'react';
import avatar from '../images/avatar.png'

const UserDash = () => {
    return (
        <div>
               <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-20'>
      <img alt='avatar' src={avatar} class="o-80 " />
      <div>
        <h2>{''}</h2>
      </div>
    </div>
               <p className='f2 white'>
                {'Welcome to my React Portfolio'}
            </p>
              <div className='white f2' >
                {'About Me:'}
            </div>
            <br></br>
            <br></br>
            <div className='white f3'>
                {'Hello, my Name I Gladimar Villamil, I work in entertainment, in legal and development'}
            </div>
            <div className='white f3'>
                {'and I am passionate about producing quality and trasnparent entertainment for online platforms.'}
            </div>
        </div>
    );
}

export default UserDash;
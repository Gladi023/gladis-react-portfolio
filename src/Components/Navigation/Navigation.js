import React from 'react';

const Navigation = () => {
    return (
        <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

     <p className='f3 link dim white underline pa3 pointer'>
        <a href='#about-me'>About Me</a>
        </p>
        <p className='f3 link dim white underline pa3 pointer'>
        <a href='#my-work'>My Work</a>
        </p>
        <p className='f3 link dim white underline pa3 pointer'>
        <a href='https://docs.google.com/document/d/1LDEhNjSa_CoCGwZdnfvUGe0di8Ik_9t7XFyBk2lbvvI/edit?usp=sharing'>Resume</a>
        </p>
        <p className='f3 link dim white underline pa3 pointer'>
        <a href='https://www.linkedin.com/in/gladimar-villamil-7229a81b5/'>LinkedIn</a>
        </p>
        <p className='f3 link dim white underline pa3 pointer'>
        <a href='https://www.youtube.com/channel/UCieZM8eQTE9n5QQk8N_h4dA'>YouTube</a>
        </p>
        <p className='f3 link dim white underline pa3 pointer'>
        <a href='https://www.instagram.com/gladimarv/?hl=en'>Instagram</a>
        </p>
        </nav>
        </div>
    );
}

export default Navigation;
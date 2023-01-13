import React from 'react';
import movieapp from '../images/movieapp.png';
import pawpls from '../images/pawpls.png';
import run from '../images/run.png';
import hor from '../images/hor.png';
import em from '../images/em.png';
import quiz from '../images/quiz.png';

const ProductCard = ({ name, id }) => {
  return (
    <div style={{display: 'block'}} id="my-work" >
            <a href="https://github.com/kwalexander/explore-market" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='Explore Marketplace Website' src={em} class="o-80" />
      <div>
        <h2>{'Explore Marketplace'}</h2>
      </div>
    </div>
</a>
    <a href="https://gladi023.github.io/Coding_Quiz/" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='Coding Quiz Website' src={quiz} class="o-80" />
      <div>
        <h2>{'Coding Quiz'}</h2>
      </div>
    </div>
</a>
        
        <a href="https://bettinastaartjes.github.io/Movie-App/" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='Movie App Website' src={[movieapp]} class="o-80" />
      <div>
        <h2>{'MovieApp'}</h2>
      </div>
    </div>
</a>
    <a href="https://pawpals22.herokuapp.com" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='PawPals Website' src={[pawpls]} class="o-80" />
      <div>
        <h2>{'PawPals'}</h2>
      </div>
    </div>
</a>
    <a href="https://gladi023.github.io/RunBuddy/" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='Run Buddy Website' src={run} class="o-80" />
      <div>
        <h2>{'Run Buddy'}</h2>
      </div>
    </div>
</a>
    <a href="https://gladi023.github.io/Week1-Homework/" target="_blank">
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-40'>
      <img alt='Horiseon Website' src={hor} class="o-80" />
      <div>
        <h2>{'Horiseon'}</h2>
      </div>
    </div>
</a>

 

    </div>
    
  );
}

export default ProductCard;
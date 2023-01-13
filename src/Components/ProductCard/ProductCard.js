import React from 'react';
import movieapp from '../images/movieapp.png';
import pawpls from '../images/pawpls.png';
import run from '../images/run.png';

const ProductCard = ({ name, id }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={movieapp} class="o-60 " />
      <div>
        <h2>{'MovieApp'}</h2>
      </div>
    </div>
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={pawpls} class="o-60 " />
      <div>
        <h2>{'Pawpals'}</h2>
      </div>
    </div>
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={run} class="o-60 " />
      <div>
        <h2>{'RunBuddy'}</h2>
      </div>
    </div>
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={movieapp} class="o-60 " />
      <div>
        <h2>{'Hat'}</h2>
      </div>
    </div>
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={movieapp} class="o-60" />
      <div>
        <h2>{'Hat'}</h2>
      </div>
    </div>
    <div className='tc grow bg-light-white br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={movieapp} class="o-60" />
      <div>
        <h2>{'Hat'}</h2>
      </div>
    </div>
 

    </div>
    
  );
}

export default ProductCard;
import React from 'react';

const SearchForm = () => {
    return (
        <div>
            <div className='form pa4 br3 shadow-5' >
                <input className='f3 pa2 w-50 center' type='text' />
                <button className='w-10 grow f4 link ph3 pv2 dib white bg-black' >Search</button>
            </div>
        </div>
    );
}

export default SearchForm;
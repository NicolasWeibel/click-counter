import React from 'react';

function Counter({ clicksNumber }) {
  return (
    <div className='counter'>
      {clicksNumber}
    </div>
  )
}

export default Counter;
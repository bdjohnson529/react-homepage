import React from 'react';

import Cloud from './cloud.svg';


function Scene() {

  return (

    <div>
      <img
        src={Cloud}
        style={{ display: 'block', width: '20%', marginLeft: '55%' }}
      />
      <img
        src={Cloud}
        style={{ display: 'block', width: '10%', marginLeft: '15%' }}
      />
    </div>

  );
}


export default Scene;
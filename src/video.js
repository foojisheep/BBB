import React, { useEffect, useState } from 'react';
// import logoBig from './resource/bbb_loading/output001.png';
import glassBBB from  './resource/bbb_loading2.mp4';

const AnimationPlayer = () => {
  return (
    <div>
      <video autoPlay loop muted>
          <source src={glassBBB} type="video/mp4"></source>
        </video>
    </div>
  );
};

export default AnimationPlayer;

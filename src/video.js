import React, { useEffect, useState } from 'react';
// import logoBig from './resource/bbb_loading/output001.png';
// import glassBBB from  './resource/bbb_loading.mov';

const AnimationPlayer = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const totalFrames = 146; // Total number of frames in the sequence
  const frameInterval = 100; // Time (in milliseconds) between frames

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Update the current frame
      setCurrentFrame((prevFrame) => (prevFrame < totalFrames ? prevFrame + 1 : 1));
    }, frameInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(animationInterval);
  }, []);

  // Generate the image file path for the current frame
  const frameImagePath = `./resource/bbb_loading/output${String(currentFrame).padStart(3, '0')}.png`;
  console.log(frameImagePath);
  console.log(currentFrame);
  // Replace '3' with the number of digits your frame numbers have (e.g., '001' for three digits).

  // const logos = [logoBig];
  // const logo = logos.map((logo, index) => (
  //   <LazyLoadImage key={index} className='loadingImage' src={logo} alt={logo.toString()} />
  // ));

  return (
    <div>
      {/* <img src={logoBig} alt={`Frame ${currentFrame}`} /> */}
      {/* <video width="400" controls autoplay>
        <source src="./resource/bbb_loading.mov" type="video/mp4">
      </video> */}
      <video controls autoPlay loop muted>
          {/* <source src={glassBBB} type="video/mp4"></source> */}
        </video>
    </div>
  );
};

export default AnimationPlayer;

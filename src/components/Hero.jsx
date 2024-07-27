import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../public/Animation.json';

const Hero = () => {
  return (
    <div style={styles.container} className='bg-slate-500'>
      <div style={styles.content}>
        <div className=" lg:w-full px-14">
          <h1 className="text-4xl text-cyan-800 md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Fostering Growth with Seamless Technical Solutions
          </h1>
          <p className="text-lg text-cyan-800 md:text-xl mb-6">
            Your Trusted Partner for Maximizing Impact and Results
          </p>
          <Link to="/get-started" className="bg-red-600 text-white py-3 px-6 rounded-md inline-block font-bold hover:bg-red-700">
            GET STARTED
          </Link>
        </div>
      </div>
      <div style={styles.animationContainer}>
        <Lottie animationData={animationData} style={styles.animation} loop={true} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh',
    backgroundColor: '#F0F8FF',
    overflow: 'hidden',
    padding: '0 20px',
  },
  content: {
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    color: 'black',
  },
  animationContainer: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
  },
  animation: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};

export default Hero;
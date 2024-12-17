import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url('https://cdn.jhmrad.com/wp-content/uploads/beautiful-houses-world-home-design-top-most_498290.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#fff', // Set text color to bright white
      padding: '50px'
    }}>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>About <span className="highlight text-blue-600"> Home Hub</span></h1>
        <p className='mb-4'> <span className="highlight text-blue-600 font-bold"> Home Hub </span> is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
        <p className='mb-4'>
          Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </p>
        <p className='mb-4'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
      </div>
    </div>
  );
}

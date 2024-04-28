import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-10 p-4 bg-slate-200 dark:bg-slate-400'>
        <h1 className='text-3xl font-bold mb-5'>About Us</h1>
        <div className='mb-5'>
          <p>
            Welcome to our website! We are a dedicated team passionate about
            [your business/organization's mission or purpose].
          </p>
          <p>
            Our journey began [insert founding date or starting point], and
            since then, we have been committed to [describe your journey,
            growth, or achievements].
          </p>
          <p>
            At [your business/organization's name], we believe in [core values
            or principles]. Our goal is to [describe your main objective or
            purpose].
          </p>
        </div>
        <h2 className='text-xl font-bold mb-3'>Our Team</h2>
        <div className='mb-5'>
          <p>
            Meet the faces behind [your business/organization's name]. Our team
            consists of passionate individuals dedicated to [describe their
            roles or contributions].
          </p>
          <ul className='list-disc pl-5'>
            <li>[Team Member 1]</li>
            <li>[Team Member 2]</li>
            <li>[Team Member 3]</li>
            {/* Add more team members as needed */}
          </ul>
        </div>
        <h2 className='text-xl font-bold mb-3'>Contact Us</h2>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          collaboration inquiries, feel free to reach out to us at [your
          contact email or phone number].
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

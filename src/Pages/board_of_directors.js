import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Ceo from  '../assets/atj.jpg'
import TeamCard from './team-card';

import './ngsoftglance.css'
// import SectionHeader from '../components/section-header';
import Review from '../components/review/review';


import '../components/review/review.css'


const data = [
  {
    id: 1,
    imgSrc: Ceo,
    altText: 'Mr. Danied Ishaya Dabo',
    title: 'Mr. Danied Ishaya Dabo',
    designation: 'Director',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Ceo,
    altText: 'Ahmad Tafida Jalinga',
    title: 'A J Tafida ',
    designation: 'Lead Consultan',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Ceo,
    altText: 'Alh. Ibrahim Sadoh',
    title: 'Alh. Ibrahim Sadoh',
    designation: 'Chife Operations Officer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

const BoardMembers = () => {
	return (
    <section>
      <div claasName="board__header">
        <div className="board__members">
        <h1 className="members">Board Members</h1>
        <span className="board__team">Our Team of Talent Individuals</span>
        </div>
        <div className="grid">
          {data.map((item) => (
           <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </div>
      </div>
     <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
    </section>
	)
}

export default BoardMembers

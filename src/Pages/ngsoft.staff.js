import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/team/member-2.png';
import Member3 from '../assets/team/member-3.png';
import Member4 from '../assets/team/member-4.png';
import Member5 from '../assets/team/member-5.png';
import Member6 from '../assets/team/member-6.png';

import TeamCard from './team-card';

import "../components/home.css"

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
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
    imgSrc: Member2,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Founder',
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
    imgSrc: Member3,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
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
    id: 4,
    imgSrc: Member4,
    altText: 'Lina Jutila',
    title: 'Lina Jutila',
    designation: 'Web Developer',
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
    id: 5,
    imgSrc: Member5,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
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
    id: 6,
    imgSrc: Member6,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
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

const NgsoftStaff = () => {
	return (
    <section>
    <article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://www.zerox24.com/wp-content/uploads/2020/07/Technology-related-business-ideas.png) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ng">NG<span className="soft">Soft</span><span className="rmt">Staff</span></h3>
        <h4 className="f3 fw4 i lh-title mt0">We Believe in Having the Best in order to render the best!</h4>
      </header>
      <section className="pt5 pb4">
        	<p className="times lh-copy measure f4 mt0">
						Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
						north to south lining the eastern side of royal square in Angkor Thom,
						near the town of Siem Reap, Cambodia. The towers are made from rugged
						laterite and sandstone. The towers are located right in front of
						Terrace of the Elephants and Terrace of the Leper King, flanking the
						start of the road leading east to the Victory Gate, on either side of
						which they are symmetrically arranged. Their function remains unknown.
        	</p>
      	</section>
    	</div>
  	</div>
	</article>
      <br />
      <br />
      <div  sx={{ marginTop: "70px"}}>
        <h1 className="staff_title">Ngsoft's Staff</h1>
        <span className="staff_qoute">Our Most Dedicated Staff and team Members</span>
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
    </section>
	)
};


export default NgsoftStaff

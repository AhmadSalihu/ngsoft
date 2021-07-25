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
    altText: 'Olusegun Johnson Awonuga',
    title: 'Olusegun Johnson Awonuga',
    designation: 'Management Team',
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
    altText: 'Hajiya Maimuna Ibrahim',
    title: 'Hajiya Maimuna Ibrahim',
    designation: 'Managemnt Team',
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
    altText: 'Miss Zainab Mai',
    title: 'Miss Zainab Mai',
    designation: 'Officer',
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
    altText: 'Kabiru Tafida',
    title: 'Kabiru Tafida',
    designation: 'Officer',
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
    altText: 'Hauwa Hayat',
    title: 'Miss Hauwa Hayat',
    designation: 'Officer',
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
    imgSrc: Member1,
    altText: 'Faruk Kinafa',
    title: 'Faruk Kinafa',
    designation: 'Officer',
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
    id: 7,
    imgSrc: Member6,
    altText: 'Salim Tafida',
    title: 'Salim Tafida',
    designation: 'Client Support Staff',
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
    id: 8,
    imgSrc: Member1,
    altText: 'Miss Murna John',
    title: 'Miss Murna John',
    designation: 'Client Support Staff',
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
    id: 9,
    imgSrc: Member2,
    altText: 'James Gabriel  Dauji',
    title: 'Mr. James Gabriel  Dauji',
    designation: 'Client Support Staff',
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
    id: 10,
    imgSrc: Member3,
    altText: 'Cyrus Goni',
    title: 'Mr. Cyrus Goni',
    designation: 'Client Support Staff',
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
    id: 11,
    imgSrc: Member4,
    altText: 'Hajiya Amina Ibrahim',
    title: 'Hajiya Amina Ibrahim',
    designation: 'Client Support Staff',
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
    id: 12,
    imgSrc: Member5,
    altText: 'Aminu Lawal Abdulkarim',
    title: 'Mal. Aminu Lawal Abdulkarim',
    designation: 'Client Support Staff',
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
    id: 13,
    imgSrc: Member3,
    altText: 'Sadiq Usman Mamuda',
    title: 'Sadiq Usman Mamuda',
    designation: 'Dev Team',
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
    id: 14,
    imgSrc: Member6,
    altText: 'Jamilu Jibrin',
    title: 'Jamilu Jibrin',
    designation: 'Dev Team',
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
    id: 15,
    imgSrc: Member5,
    altText: 'Abdulhafiz Abdullahi',
    title: 'Abdulhafiz Abdullahi',
    designation: 'Dev Team',
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
    id: 16,
    imgSrc: Member1,
    altText: "Ahmad Salla'u Gude",
    title: "Ahmad Salla'u Jr.",
    designation: 'Dev Team',
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
  <div className="cf" style={{ background: "url(https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="b--black-70 pv4">
        <h3 className="f2 fw7 tracked lh-title mt0 mb3 avenir ng">NG<span className="soft">Soft </span>Staff</h3>
      </header>
    	</div>
  	</div>
	</article>
      <br />
      <br />
      <div  sx={{ marginTop: "70px"}}>
        {/* <h1 className="staff_title"><span className="ng">NG</span><span className="soft">Soft's  </span> Staff</h1><br /> */}
        <h4 className="f3 fw4 i lh-title mt0 tm tc">Our belove team members</h4>
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

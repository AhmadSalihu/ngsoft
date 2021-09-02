import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Kabirutafida from '../assets/NGSoft-staff-images/kabiru-tafida.jpg';
import Salimtafida from '../assets/NGSoft-staff-images/salim-Tafida.jpg';
import Hauwahayat from '../assets/NGSoft-staff-images/hauwa-hayat.jpg';
import Davidruwan from '../assets/NGSoft-staff-images/david-ruwan.jpg';
import Davidjames from '../assets/NGSoft-staff-images/david-james.jpg';
import Murnajohn from '../assets/NGSoft-staff-images/murna-john.jpg';
import AminaIbrahim from '../assets/NGSoft-staff-images/amina-Ib.jpg';

import TeamCard from './team-card';



import "../components/home.css"


const data = [
  // {
  //   id: 1,
  //   imgSrc: Member1,
  //   altText: 'Olusegun Johnson Awonuga',
  //   title: 'Olusegun Johnson Awonuga',
  //   designation: 'Management Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
   {
    id: 1,
    imgSrc: Davidjames,
    altText: 'David James',
    title: 'David James',
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
    id: 1,
    imgSrc: Davidruwan,
    altText: 'Miss David Ruwan',
    title: 'David Ruwan',
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
  // {
  //   id: 2,
  //   imgSrc: Member2,
  //   altText: 'Hajiya Maimuna Ibrahim',
  //   title: 'Hajiya Maimuna Ibrahim',
  //   designation: 'Managemnt Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   imgSrc: Member3,
  //   altText: 'Miss Zainab Mai',
  //   title: 'Miss Zainab Mai',
  //   designation: 'Officer',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  {
    id: 4,
    imgSrc: Kabirutafida,
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
    imgSrc: Hauwahayat,
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
  // {
  //   id: 6,
  //   imgSrc: Member1,
  //   altText: 'Faruk Kinafa',
  //   title: 'Faruk Kinafa',
  //   designation: 'Officer',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  {
    id: 7,
    imgSrc: Salimtafida,
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
    imgSrc: Murnajohn,
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
    imgSrc: Murnajohn,
    altText: 'Murna John',
    title: 'Miss. Murna John',
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
  // {
  //   id: 10,
  //   imgSrc: Member3,
  //   altText: 'Cyrus Goni',
  //   title: 'Mr. Cyrus Goni',
  //   designation: 'Client Support Staff',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  {
    id: 11,
    imgSrc: AminaIbrahim,
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
  // {
  //   id: 12,
  //   imgSrc: Member5,
  //   altText: 'Aminu Lawal Abdulkarim',
  //   title: 'Mal. Aminu Lawal Abdulkarim',
  //   designation: 'Client Support Staff',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   imgSrc: Member3,
  //   altText: 'Sadiq Usman Mamuda',
  //   title: 'Sadiq Usman Mamuda',
  //   designation: 'Dev Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   imgSrc: Member6,
  //   altText: 'Jamilu Jibrin',
  //   title: 'Jamilu Jibrin',
  //   designation: 'Dev Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  // {
  //   id: 15,
  //   imgSrc: Member5,
  //   altText: 'Abdulhafiz Abdullahi',
  //   title: 'Abdulhafiz Abdullahi',
  //   designation: 'Dev Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
  // {
  //   id: 16,
  //   imgSrc: Member1,
  //   altText: "Ahmad Salla'u Gude",
  //   title: "Ahmad Salla'u Jr.",
  //   designation: 'Dev Team',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
];

const NgsoftStaff = () => {
	return (
    <section>
    <div className="flex pa3 pa4-ns black-70 f3 bgclr top times">
      <header className="b--black-70 pv4">
        <h3 className="f2 fw7 tracked lh-title mt0 mb3 avenir ng">NG<span className="soft">Soft </span>Staff</h3>
      </header>
    	</div>
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

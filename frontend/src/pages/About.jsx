import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className=' w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptate. Perspiciatis minima dolorem fugiat cum expedita consequuntur quos error, saepe molestiae tempore magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium iste, reprehenderit quos numquam dolores aut nesciunt!</p>
            <b className=' text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque, quidem cupiditate, unde itaque consectetur eius et voluptatem atque alias, non veniam nemo.</p>
        </div>
      </div>
      <div className=' text-2xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
       
        <div className=' border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className=' text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate nihil facilis corrupti accusantium, fugit laborum, rerum repellendus quibusdam voluptate nemo minus ad!</p>
        </div>
        
        <div className=' border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveniience</b>
          <p className=' text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate nihil facilis corrupti accusantium, fugit laborum, rerum repellendus quibusdam voluptate nemo minus ad!</p>
        </div>

        <div className=' border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className=' text-gray-600'>Lorem, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, modi. ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate nihil facilis corrupti accusantium, fugit laborum, rerum repellendus quibusdam voluptate nemo minus ad!</p>
        </div>

      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About

import Image from 'next/image'
import React from 'react'
import facebook from '../../../public/assets/social media icons/facebook.svg'
import instagram from '../../../public/assets/social media icons/instagram.svg'
import twitter from '../../../public/assets/social media icons/twitter.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-950 text-white p-4">
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <p>&copy; 2024 supcars. All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        {/* Replace the URLs with your actual social media profiles */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src={facebook} alt='facebook' width={19} height={26}></Image>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
        <Image src={instagram} alt='instagram' width={19} height={26}></Image>

        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
        <Image src={twitter} alt='twitter' width={19} height={26}></Image>

        </a>
        {/* Add more social media icons as needed */}
      </div>
    </div>
  </footer>
  )
}

export default Footer
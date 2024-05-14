import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between px-32 text-[#758399] text-sm">
        <div>
            <p className="cursor-pointer">@ 2024,  ProfileScreener.com</p>
        </div>
        <div className="flex gap-4">
            <p className="cursor-pointer">@Yash Patel</p>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Terms </p>
        </div>
    </div>
  )
}

export default Footer
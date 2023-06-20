import React from 'react'
import Emailing from '../components/Emailing'
import { FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='mt-[10rem]'>
        <Emailing />
        <div id="footer-bar" className="text-center h-16 pt-6 text-sm text-white bg-slate-800">
        <FA icon={faCopyright} /> &nbsp;Harshit Shukla{" "}
        <span className="min-w-[16rem] pl-10 text-xs">last updated: x/y/z</span>
      </div>
    </div>
  )
}

export default Contact

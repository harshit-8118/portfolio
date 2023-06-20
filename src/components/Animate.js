import React from 'react'

function Animate({Name, jump, offset, duration}) {
  const name = Array.from(Name);
  return (
    <>
      {
        name && name.map((spell, ind) => (
            <li key={ind} className='list-none inline' data-aos="fade-in" data-aos-delay={`${ind*jump}`} data-aos-offset={offset} data-aos-duration={duration}>{spell}</li>
        ))
      }
    </>
  )
}

export default Animate

import React from 'react'
import {Data} from '../../utils/constants'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Data.CV} download className='btn'>Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'
import {Data} from '../../utils/constants'
import Blob from './Blob'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Navneet Bahuguna</h1>
        <h4 className="text-light">
          <Typical loop={Infinity} wrapper="b" steps={Data.stepsArr} />
        </h4>
        <CTA />
        <HeaderSocials />

        <div className="blob">
          <Blob />
        </div>

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header
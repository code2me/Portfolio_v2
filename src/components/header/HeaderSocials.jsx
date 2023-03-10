import {Data} from '../../utils/constants'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub, FaTwitterSquare } from "react-icons/fa";
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href={Data.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href={Data.GITHUB} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href={Data.LEETCODE} target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
      <a href={Data.TWITTER} target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
    </div>
  );
}

export default HeaderSocials
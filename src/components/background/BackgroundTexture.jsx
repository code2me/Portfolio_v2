import Particles from "react-tsparticles";
import particleConfig from './config/particles-config'
const BackgroundTexture = () => {
  return <Particles params={particleConfig}></Particles>;
};

export default BackgroundTexture;

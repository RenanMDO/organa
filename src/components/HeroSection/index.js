import React, {useState}  from 'react';
import video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
  const [ hover, setHover ] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Soluções ambientais</HeroH1>
        <HeroP>Soluções para os resíduos orgânicos...industria, comercio, ESG, Certificações.</HeroP>
        <HeroBtnWrapper>
          <Button to="/whats" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true">
            Entre em contato {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

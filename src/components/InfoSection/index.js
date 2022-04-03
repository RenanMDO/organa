import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, Infowrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, primary, dark, dark2, buttonLabel, img, alt, headline}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Infowrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button 
                    primary={primary ? 1 : 0} 
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    to="/whats"
                    >{buttonLabel}</Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap> 
                  <Img src={img.default} alt={alt}/>
                </ImgWrap>
              </Column2>
            </InfoRow>
        </Infowrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
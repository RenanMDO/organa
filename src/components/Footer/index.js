import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkA, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkS } from './FooterElements'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
   };

  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Sobre </FooterLinkTitle>
                  <FooterLinkS 
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  >Sobre</FooterLinkS>
                  <FooterLinkS to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Soluções</FooterLinkS>
                  <FooterLink to='/blog'>Blog</FooterLink>
                  <FooterLink to='/Store'>Loja</FooterLink>
                  <FooterLinkS to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Contato</FooterLinkS>
                  <FooterLink to='/signin'>Portal</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contato </FooterLinkTitle>
                  <FooterLink to='/contact'>WhatsApp</FooterLink>
                  <FooterLink to='/contact'>Email</FooterLink>
                  <FooterLink to='/contact'>Telefone</FooterLink>
                  <FooterLink to='/contact'>Endereço</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Redes Sociais </FooterLinkTitle>
                  <FooterLinkA href="https://www.facebook.com/organabiotech/" target="_blank">Facebook</FooterLinkA>
                  <FooterLinkA href="https://www.instagram.com/organabiotech/" target="_blank">Instagram</FooterLinkA>
                  <FooterLinkA href="https://www.linkedin.com/company/organa-biotech/" target="_blank">Linkedin</FooterLinkA>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Organa Biotech
              </SocialLogo>
              <WebsiteRights>Organa Biotech © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="https://www.facebook.com/organabiotech/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="https://www.instagram.com/organabiotech/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/company/organa-biotech/" target="_blank" aria-label="Linkedin">
                  <FaLinkedinIn />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
import React from 'react'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-2.svg'
import Icon4 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Soluções</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Compostagem Acelerada</ServicesH2>
            <ServicesP>Compostagem in company</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Gravimetria</ServicesH2>
            <ServicesP>Gravimetria em Empresa</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Analise</ServicesH2>
            <ServicesP>Identificação dos custos atuais com destinação</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4}/>
            <ServicesH2>Treinamento</ServicesH2>
            <ServicesP>Treinamento para aumento da valorização dos recicláveis</ServicesP>
          </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
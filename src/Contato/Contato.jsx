import React from "react";
import styled from "styled-components";

export default function Contato() {
  const canais = [
    {
      tag: "Apoio emocional",
      title: "CVV — Centro de Valorização da Vida",
      description:
        "Se você estiver em sofrimento emocional, precisando conversar ou se sentindo em risco, procure apoio imediato.",
      info: "Ligue 188 • 24 horas • chat e e-mail disponíveis",
      button: "Abrir CVV",
      href: "https://cvv.org.br/",
    },
    {
      tag: "Violência contra a mulher",
      title: "Ligue 180",
      description:
        "Canal para orientação, denúncia e encaminhamento para serviços especializados de proteção e atendimento.",
      info: "Telefone 180 • atendimento nacional • também via WhatsApp",
      button: "Abrir Ligue 180",
      href: "https://www.gov.br/mulheres/pt-br/ligue180",
    },
    {
      tag: "Saúde mental pública",
      title: "CAPS / SUS",
      description:
        "Os CAPS acolhem pessoas em sofrimento psíquico e podem ser a porta de entrada para cuidado contínuo em saúde mental.",
      info: "Atendimento em saúde mental pela rede pública",
      button: "Ver CAPS",
      href: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps",
    },
  ];

  return (
    <Section id="ajuda">
      <Container>
        <Header>
          <SmallTitle>Rede de apoio</SmallTitle>
          <MainTitle>Você não precisa atravessar isso sozinho</MainTitle>
          <Subtitle>
            Esta página tem caráter informativo. Se você estiver em sofrimento
            emocional, situação de violência, ameaça ou crise, busque ajuda
            especializada imediatamente.
          </Subtitle>
        </Header>

        <Grid>
          {canais.map((canal, index) => (
            <HelpCard key={index}>
              <Glow />
              <CardTag>{canal.tag}</CardTag>
              <CardTitle>{canal.title}</CardTitle>
              <CardDescription>{canal.description}</CardDescription>
              <CardInfo>{canal.info}</CardInfo>
              <CardButton
                href={canal.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {canal.button}
              </CardButton>
            </HelpCard>
          ))}
        </Grid>

        <EmergencyBox>
          <EmergencyTitle>Em caso de emergência</EmergencyTitle>
          <EmergencyText>
            Se houver risco imediato, ameaça, agressão em andamento ou crise
            aguda, procure ajuda urgente.
          </EmergencyText>

          <EmergencyActions>
            <EmergencyItem>
              <EmergencyNumber>190</EmergencyNumber>
              <EmergencyLabel>Polícia</EmergencyLabel>
            </EmergencyItem>

            <EmergencyItem>
              <EmergencyNumber>192</EmergencyNumber>
              <EmergencyLabel>SAMU</EmergencyLabel>
            </EmergencyItem>

            <EmergencyItem>
              <EmergencyNumber>188</EmergencyNumber>
              <EmergencyLabel>CVV</EmergencyLabel>
            </EmergencyItem>
          </EmergencyActions>
        </EmergencyBox>

        <Note>
          Este projeto não substitui atendimento psicológico, psiquiátrico,
          jurídico ou de emergência.
        </Note>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 110px 24px 90px;
  background:
    radial-gradient(circle at top left, rgba(160, 20, 20, 0.08), transparent 18%),
    linear-gradient(180deg, #07090d 0%, #050608 100%);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 42px;
`;

const SmallTitle = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: #d64545;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
`;

const MainTitle = styled.h2`
  margin: 0 0 18px;
  color: #f6f3ee;
  font-size: clamp(2.1rem, 4vw, 3.6rem);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.76);
  font-size: 1.04rem;
  line-height: 1.8;
  max-width: 62ch;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 34px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const HelpCard = styled.div`
  position: relative;
  min-height: 300px;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(15, 17, 22, 0.96) 0%,
    rgba(7, 8, 11, 0.98) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Glow = styled.div`
  position: absolute;
  top: -70px;
  right: -70px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(214, 69, 69, 0.18) 0%,
    rgba(214, 69, 69, 0.05) 35%,
    transparent 70%
  );
  pointer-events: none;
`;

const CardTag = styled.span`
  position: relative;
  z-index: 2;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(214, 69, 69, 0.12);
  border: 1px solid rgba(214, 69, 69, 0.24);
  color: #ef6d6d;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  position: relative;
  z-index: 2;
  margin: 18px 0 12px;
  color: #f6f3ee;
  font-size: clamp(1.35rem, 2vw, 1.9rem);
  line-height: 1.15;
  font-weight: 800;
`;

const CardDescription = styled.p`
  position: relative;
  z-index: 2;
  margin: 0 0 16px;
  color: rgba(245, 247, 250, 0.76);
  font-size: 1rem;
  line-height: 1.75;
`;

const CardInfo = styled.p`
  position: relative;
  z-index: 2;
  margin: 0;
  color: #ffffff;
  font-size: 0.98rem;
  line-height: 1.6;
  font-weight: 600;
`;

const CardButton = styled.a`
  position: relative;
  z-index: 2;
  margin-top: auto;
  align-self: flex-start;
  padding: 12px 18px;
  border-radius: 999px;
  background: #b41515;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #cb1d1d;
  }
`;

const EmergencyBox = styled.div`
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(27, 10, 10, 0.96) 0%,
    rgba(14, 8, 8, 0.98) 100%
  );
  border: 1px solid rgba(214, 69, 69, 0.22);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
`;

const EmergencyTitle = styled.h3`
  margin: 0 0 10px;
  color: #f6f3ee;
  font-size: 1.5rem;
  font-weight: 800;
`;

const EmergencyText = styled.p`
  margin: 0 0 22px;
  color: rgba(245, 247, 250, 0.76);
  line-height: 1.7;
`;

const EmergencyActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const EmergencyItem = styled.div`
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const EmergencyNumber = styled.div`
  color: #ef6d6d;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
`;

const EmergencyLabel = styled.div`
  color: #f6f3ee;
  font-weight: 600;
`;

const Note = styled.p`
  margin: 18px 0 0;
  color: rgba(245, 247, 250, 0.55);
  font-size: 0.95rem;
  line-height: 1.7;
`;
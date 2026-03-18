import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function InfoCard({ badge, title, description, onClick }) {
  return (
    <CardContainer onClick={onClick} type="button">
      <Glow />
      <TopLine />

      <CardContent>
        <Badge>{badge}</Badge>

        <Title>{title}</Title>

        <Description>{description}</Description>

        <Footer>
          <Divider />
          <ReadMore>Saiba mais</ReadMore>
        </Footer>
      </CardContent>
    </CardContainer>
  );
}

export default function CardSection() {
  const navigate = useNavigate();

  const cards = [
    {
      badge: "Fundamentos",
      title: "O que é narcisismo?",
      description:
        "Entenda o conceito, os traços centrais e por que esse padrão psicológico destrói vínculos.",
      route: "/o-que-e-narcisismo",
    },
    {
      badge: "Perfis",
      title: "Tipos de narcisista",
      description:
        "Grandioso, vulnerável, comunal e maligno: conheça os principais perfis e como cada um manipula de forma diferente.",
        route:"/tipos-de-narcisista"
    },
    {
      badge: "Sinais",
      title: "Como identificar",
      description:
        "Aprenda a reconhecer comportamentos que parecem charme no início, mas depois se transformam em controle e desgaste emocional.",
       route:"/como-identificar"
      },
    {
      badge: "Dinâmica",
      title: "Ciclo do abuso",
      description:
        "Idealização, desvalorização e descarte: veja como esse padrão se repete e por que ele gera tanta confusão na vítima.",
      route:"/ciclo"
   
      },
    {
      badge: "Impacto",
      title: "Efeitos na vítima",
      description:
        "Culpa, ansiedade, hipervigilância, dependência emocional e perda de identidade aparecem de forma gradual e devastadora.",
   route:"/efeitos"
      },
    {
      badge: "Reconstrução",
      title: "Recuperação emocional",
      description:
        "Compreenda os primeiros passos para recuperar lucidez, autoestima, autonomia e romper com a lógica da manipulação.",
   
     route: "/recuperar"
      },
  
  ];

  const handleCardClick = (card) => {
    if (card.route) {
      navigate(card.route);
      return;
    }

    console.log(`Card clicado: ${card.title}`);
  };

  return (
    <Section id="cards">
      <Container>
        <Header>
          <SmallTitle>Explorar conteúdo</SmallTitle>
          <MainTitle>Entenda o padrão por trás da manipulação</MainTitle>
          <Subtitle>
            Antes dos relatos, compreenda como o narcisismo opera, como ele se
            disfarça e por que tantas vítimas demoram para perceber o que está
            acontecendo.
          </Subtitle>
        </Header>

        <Grid>
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              badge={card.badge}
              title={card.title}
              description={card.description}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 120px 24px 90px;
  background:
    radial-gradient(circle at top right, rgba(160, 20, 20, 0.06), transparent 18%),
    linear-gradient(180deg, #050608 0%, #080b10 100%);
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
  color: rgba(245, 247, 250, 0.74);
  font-size: 1.04rem;
  line-height: 1.8;
  max-width: 62ch;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.button`
  position: relative;
  width: 100%;
  min-height: 280px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(15, 17, 22, 0.96) 0%,
    rgba(7, 8, 11, 0.98) 100%
  );
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  display: flex;
  align-items: stretch;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(196, 51, 51, 0.35);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
    background: linear-gradient(
      180deg,
      rgba(18, 20, 26, 0.98) 0%,
      rgba(8, 9, 12, 1) 100%
    );
  }

  &:focus-visible {
    outline: 2px solid rgba(214, 69, 69, 0.7);
    outline-offset: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(180, 25, 25, 0.08),
      transparent 35%,
      transparent 65%,
      rgba(180, 25, 25, 0.06)
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 640px) {
    min-height: 240px;
    padding: 22px;
    border-radius: 20px;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: -65px;
  right: -65px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(212, 61, 61, 0.22) 0%,
    rgba(212, 61, 61, 0.08) 35%,
    transparent 70%
  );
  pointer-events: none;
`;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  width: 72px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #d64545, rgba(214, 69, 69, 0));
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Badge = styled.span`
  align-self: flex-start;
  padding: 8px 14px;
  margin-top: 10px;
  border-radius: 999px;
  background: rgba(214, 69, 69, 0.12);
  border: 1px solid rgba(214, 69, 69, 0.24);
  color: #ef6d6d;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 20px 0 14px;
  color: #f6f3ee;
  font-size: clamp(1.35rem, 2vw, 1.85rem);
  line-height: 1.12;
  font-weight: 800;
`;

const Description = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.76);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 34ch;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 28px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Divider = styled.div`
  width: 46px;
  height: 1px;
  background: rgba(255, 255, 255, 0.18);
`;

const ReadMore = styled.span`
  color: #f16060;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import background from "../Planofundo/A2.png"

export default function Hero() {
  const techniques = [
    {
      title: "Inversão de Culpa",
      subtitle: "Você sai da conversa se sentindo o culpado.",
      description:
        "O narcisista distorce a situação até fazer a vítima questionar sua própria reação. O foco deixa de ser o erro dele e passa a ser a sua resposta emocional.",
      tag: "Manipulação emocional",
    },
    {
      title: "Tratamento de Silêncio",
      subtitle: "Ignorar vira uma forma de punição.",
      description:
        "O silêncio não é paz. É controle. A ausência de resposta gera ansiedade, insegurança e faz a vítima buscar reconexão a qualquer custo.",
      tag: "Punição psicológica",
    },
    {
      title: "Gaslighting",
      subtitle: "Fazer você duvidar da própria realidade.",
      description:
        "A manipulação acontece quando fatos são negados, memórias são distorcidas e sentimentos são invalidados. Aos poucos, a vítima perde confiança em si mesma.",
      tag: "Distorção da realidade",
    },
    {
      title: "Love Bombing",
      subtitle: "Excesso de encanto no começo.",
      description:
        "A idealização intensa cria conexão rápida e dependência emocional. Depois, esse afeto é retirado para gerar confusão e necessidade de aprovação.",
      tag: "Idealização",
    },
    {
      title: "Desvalorização",
      subtitle: "Depois de te elevar, ele começa a te diminuir.",
      description:
        "Críticas sutis, comparações, frieza e humilhações corroem a autoestima. A vítima começa a lutar para voltar ao que existia no início.",
      tag: "Quebra da autoestima",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % techniques.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [techniques.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % techniques.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + techniques.length) % techniques.length);
  };

  return (
    <HeroSection id="inicio">
      <Overlay />

      <Content>
        <LeftSide>
          <TextBlock>
            <Title>
              A mente do <span>narcisista</span>
            </Title>
          </TextBlock>

          <VideoWrapper>
            <VideoFrame
            src="https://www.youtube.com/embed/IdeaLbxa0Ps"
              title="Documentário sobre narcisismo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        </LeftSide>

        <RightSide>
          <CarouselHeader>
            <SmallLabel>Táticas comuns</SmallLabel>
            <CarouselTitle>Como o narcisista opera</CarouselTitle>
          </CarouselHeader>

          <CarouselCard>
            <Tag>{techniques[current].tag}</Tag>
            <SlideTitle>{techniques[current].title}</SlideTitle>
            <SlideSubtitle>{techniques[current].subtitle}</SlideSubtitle>
            <SlideDescription>{techniques[current].description}</SlideDescription>

            <Controls>
              <ArrowButton onClick={prevSlide} aria-label="Slide anterior">
                ←
              </ArrowButton>

              <Dots>
                {techniques.map((_, index) => (
                  <Dot
                    key={index}
                    $active={index === current}
                    onClick={() => setCurrent(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </Dots>

              <ArrowButton onClick={nextSlide} aria-label="Próximo slide">
                →
              </ArrowButton>
            </Controls>
          </CarouselCard>
        </RightSide>
      </Content>
    </HeroSection>
  );
}

const floatIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 rgba(180, 21, 21, 0); }
  50% { box-shadow: 0 0 30px rgba(180, 21, 21, 0.18); }
  100% { box-shadow: 0 0 0 rgba(180, 21, 21, 0); }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(160, 20, 20, 0.12), transparent 22%),
    radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.04), transparent 18%),
    linear-gradient(135deg, #050608 0%, #0a0d12 45%, #050608 100%);
  color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 24px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.44)),
    linear-gradient(to top, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.18));
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 8px;
  align-items: center;
  top: 0px;
 

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const TextBlock = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d64545;
  margin-bottom: 14px;
  font-weight: 700;
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 1.02;
  margin: 0 0 18px;
  font-weight: 800;
  letter-spacing: -0.04em;

  span {
    color: #d64545;
    text-shadow: 0 0 24px rgba(214, 69, 69, 0.2);
  }
`;

const Description = styled.p`
  margin: 0;
  max-width: 640px;
  font-size: 1.08rem;
  line-height: 1.7;
  color: rgba(245, 247, 250, 0.82);
`;

const Buttons = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  padding: 14px 24px;
  border-radius: 999px;
  background: #b41515;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: 0.25s ease;
  animation: ${pulseGlow} 2.8s infinite;

  &:hover {
    transform: translateY(-2px);
    background: #cb1d1d;
  }
`;

const SecondaryButton = styled.a`
  padding: 14px 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f5f7fa;
  text-decoration: none;
  font-weight: 600;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.04);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.02);

  @media (max-width: 1100px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
  }
`;

const VideoFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${floatIn} 0.9s ease;
`;

const CarouselHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SmallLabel = styled.span`
  color: rgba(255, 255, 255, 0.62);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8rem;
  font-weight: 700;
`;

const CarouselTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.1;
  font-weight: 800;
`;

const CarouselCard = styled.div`
  min-height: 420px;
  padding: 28px;
  border-radius: 28px;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid rgba(255,255,255,0.08);
`;

const Tag = styled.span`
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(212, 49, 49, 0.12);
  border: 1px solid rgba(212, 49, 49, 0.28);
  color: #ef6d6d;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

const SlideTitle = styled.h3`
  margin: 18px 0 10px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.05;
  font-weight: 800;
`;

const SlideSubtitle = styled.p`
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.6;
`;

const SlideDescription = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.78);
  line-height: 1.75;
  font-size: 1rem;
`;

const Controls = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const ArrowButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
`;

const Dot = styled.button`
  width: ${(props) => (props.$active ? "28px" : "10px")};
  height: 10px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: 0.25s ease;
  background: ${(props) =>
    props.$active ? "#d64545" : "rgba(255, 255, 255, 0.24)"};

  &:hover {
    opacity: 0.9;
  }
`;
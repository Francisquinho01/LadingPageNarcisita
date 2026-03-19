import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import background from "../Planofundo/A2.png";

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
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % techniques.length;
        setFadeKey((k) => k + 1);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [techniques.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % techniques.length);
    setFadeKey((k) => k + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + techniques.length) % techniques.length);
    setFadeKey((k) => k + 1);
  };

  return (
    <HeroSection id="inicio">
      <BackgroundImage />
      <Overlay />
      <ShadowLayer />

      <CarouselWrapper key={fadeKey}>
        <CarouselContent>
          <Tag>{techniques[current].tag}</Tag>

          <SlideTitle>{techniques[current].title}</SlideTitle>

          <SlideSubtitle>{techniques[current].subtitle}</SlideSubtitle>

          <SlideDescription>{techniques[current].description}</SlideDescription>

          <PrimaryButton
            href="https://www.youtube.com/watch?v=IdeaLbxa0Ps"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Assista agora
          </PrimaryButton>
        </CarouselContent>

        <Controls>
          <ArrowButton onClick={prevSlide} aria-label="Slide anterior">
            ←
          </ArrowButton>

          <Dots>
            {techniques.map((_, index) => (
              <Dot
                key={index}
                $active={index === current}
                onClick={() => {
                  setCurrent(index);
                  setFadeKey((k) => k + 1);
                }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </Dots>

          <ArrowButton onClick={nextSlide} aria-label="Próximo slide">
            →
          </ArrowButton>
        </Controls>
      </CarouselWrapper>
    </HeroSection>
  );
}

const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slowZoom = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(180, 21, 21, 0);
  }
  50% {
    box-shadow: 0 0 32px rgba(180, 21, 21, 0.2);
  }
  100% {
    box-shadow: 0 0 0 rgba(180, 21, 21, 0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  animation: ${slowZoom} 14s ease-in-out infinite alternate;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.48) 0%,
      rgba(0, 0, 0, 0.62) 45%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.72) 0%,
      rgba(0, 0, 0, 0.28) 50%,
      rgba(0, 0, 0, 0.74) 100%
    );
`;

const ShadowLayer = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right, rgba(160, 20, 20, 0.15), transparent 22%),
    radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.04), transparent 18%);
`;

const CarouselWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 110px 80px 90px;
  animation: ${fadeSlide} 0.65s ease;

  @media (max-width: 1024px) {
    padding: 110px 48px 90px;
  }

  @media (max-width: 768px) {
    padding: 100px 24px 80px;
  }

  @media (max-width: 480px) {
    padding: 90px 16px 70px;
  }
`;

const CarouselContent = styled.div`
  max-width: 760px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(212, 49, 49, 0.14);
  border: 1px solid rgba(212, 49, 49, 0.28);
  color: #ef6d6d;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
`;

const SlideTitle = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 0.96;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #ffffff;
  max-width: 760px;
`;

const SlideSubtitle = styled.p`
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.6;
  max-width: 640px;
`;

const SlideDescription = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.82);
  line-height: 1.85;
  font-size: 1rem;
  max-width: 700px;

  @media (max-width: 480px) {
    font-size: 0.96rem;
    line-height: 1.75;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  padding: 16px 30px;
  border-radius: 999px;
  background: #c31717;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.02em;
  transition: 0.3s ease;
  animation: ${pulseGlow} 2.8s infinite;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    background: #df2525;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px 22px;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  width: auto;

  @media (max-width: 480px) {
    bottom: 24px;
    gap: 10px;
  }
`;

const ArrowButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.09);
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
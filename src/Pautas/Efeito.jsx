import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pauta from "./Pautamenu"
export default function Efeito() {
  return (
    <Page>
      <GlowTop />
      <GlowBottom />

      <Container>
        <Pauta/>

        <HeroCard>
          <Tag>Impacto</Tag>

          <Title>
            Efeitos na <span>vítima</span>
          </Title>

          <Subtitle>
            O abuso narcisista não destrói apenas a relação. Ele afeta a mente,
            a autoestima, a identidade e a percepção da realidade. Muitas
            vítimas saem emocionalmente esgotadas, confusas e sem confiança em
            si mesmas.
          </Subtitle>

          <HeroMeta>
            <MetaItem>
              <MetaLabel>Emocional</MetaLabel>
              <MetaValue>Ansiedade e culpa</MetaValue>
            </MetaItem>

            <MetaItem>
              <MetaLabel>Mental</MetaLabel>
              <MetaValue>Confusão e hipervigilância</MetaValue>
            </MetaItem>

            <MetaItem>
              <MetaLabel>Identidade</MetaLabel>
              <MetaValue>Perda de si</MetaValue>
            </MetaItem>
          </HeroMeta>
        </HeroCard>

        <SectionCard>
          <SectionTitle>O impacto raramente é imediato</SectionTitle>

          <Text>
            Muitas vítimas não percebem de imediato o que está acontecendo.
            Como o abuso costuma alternar carinho, esperança, culpa e punição,
            o dano vai se acumulando aos poucos. Quando a pessoa finalmente
            entende o padrão, muitas vezes já está emocionalmente drenada.
          </Text>

          <Text>
            O efeito mais cruel é que a vítima não sofre apenas pelo que o
            narcisista faz. Ela começa a sofrer também por aquilo que passa a
            pensar sobre si mesma: que é insuficiente, confusa, exagerada,
            difícil de amar ou culpada por tudo.
          </Text>

          <HighlightQuote>
            “Uma das marcas do abuso psicológico é fazer a vítima perder
            confiança na própria percepção.”
          </HighlightQuote>
        </SectionCard>

        <Grid>
          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Ansiedade constante</InfoTitle>
            <InfoText>
              A vítima vive em estado de alerta, tentando prever mudanças de
              humor, reações e punições emocionais. Isso gera tensão contínua e
              exaustão mental.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Culpa excessiva</InfoTitle>
            <InfoText>
              Depois de tantas inversões e manipulações, a pessoa passa a achar
              que tudo é sua responsabilidade. Mesmo quando foi ferida, ainda se
              sente errada.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Perda de identidade</InfoTitle>
            <InfoText>
              Aos poucos, a vítima deixa de confiar no próprio gosto, opinião,
              limites e valor. Ela começa a existir apenas em função da relação.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Confusão mental</InfoTitle>
            <InfoText>
              Gaslighting, contradições e manipulação fazem a vítima duvidar do
              que ouviu, sentiu e viveu. Isso enfraquece muito a clareza
              emocional.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Dependência emocional</InfoTitle>
            <InfoText>
              A alternância entre dor e validação cria apego traumático. A
              vítima passa a buscar no próprio agressor o alívio da dor que ele
              mesmo causou.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Isolamento</InfoTitle>
            <InfoText>
              Muitas vítimas se afastam de amigos, familiares e referências
              externas. Isso aumenta ainda mais a vulnerabilidade e a sensação
              de estar sozinha.
            </InfoText>
          </InfoBox>
        </Grid>

        <BottomSection>
          <BottomCard>
            <BottomTag>Importante</BottomTag>
            <BottomTitle>
              O dano pode continuar mesmo após o fim da relação.
            </BottomTitle>
            <BottomText>
              Muitas pessoas continuam com medo, culpa, confusão e gatilhos
              emocionais mesmo depois do afastamento. A recuperação costuma ser
              gradual e exige reconstrução interna.
            </BottomText>
          </BottomCard>

          <BottomCard>
            <BottomTag>Reconstrução</BottomTag>
            <BottomTitle>
              Curar também é reaprender a confiar em si.
            </BottomTitle>
            <BottomText>
              Parte da recuperação envolve recuperar lucidez, autoestima,
              limites, percepção da realidade e o direito de não aceitar mais
              aquilo que destrói sua paz.
            </BottomText>
          </BottomCard>
        </BottomSection>
      </Container>
    </Page>
  );
}

const Page = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 120px 24px 90px;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(160, 20, 20, 0.08), transparent 18%),
    linear-gradient(180deg, #050608 0%, #080b10 100%);
  color: #f5f7fa;

  @media (max-width: 768px) {
    padding: 100px 18px 70px;
  }

  @media (max-width: 480px) {
    padding: 90px 14px 56px;
  }
`;

const GlowTop = styled.div`
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(214, 69, 69, 0.14) 0%,
    rgba(214, 69, 69, 0.05) 35%,
    transparent 70%
  );
  pointer-events: none;
`;

const GlowBottom = styled.div`
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(214, 69, 69, 0.1) 0%,
    rgba(214, 69, 69, 0.03) 35%,
    transparent 70%
  );
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 28px;
  color: #ef6d6d;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    opacity: 0.85;
    transform: translateX(-3px);
  }
`;

const HeroCard = styled.div`
  padding: 40px;
  margin-bottom: 30px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(19, 22, 28, 0.94) 0%, rgba(10, 12, 16, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 28px;
    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(214, 69, 69, 0.12);
  border: 1px solid rgba(214, 69, 69, 0.24);
  color: #ef6d6d;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0 0 18px;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 1.02;
  font-weight: 800;
  color: #f6f3ee;
  letter-spacing: -0.04em;

  span {
    color: #d64545;
    text-shadow: 0 0 24px rgba(214, 69, 69, 0.22);
  }
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 860px;
  color: rgba(245, 247, 250, 0.8);
  font-size: 1.08rem;
  line-height: 1.85;
`;

const HeroMeta = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const MetaItem = styled.div`
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const MetaLabel = styled.div`
  margin-bottom: 8px;
  color: #ef6d6d;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const MetaValue = styled.div`
  color: #f6f3ee;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

const SectionCard = styled.div`
  padding: 34px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(15, 17, 22, 0.96) 0%,
    rgba(7, 8, 11, 0.98) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 1.9rem;
  color: #f6f3ee;
`;

const Text = styled.p`
  margin: 0 0 18px;
  color: rgba(245, 247, 250, 0.78);
  line-height: 1.95;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightQuote = styled.blockquote`
  margin: 26px 0 0;
  padding: 18px 20px;
  border-left: 3px solid #d64545;
  background: rgba(214, 69, 69, 0.06);
  color: #f6f3ee;
  font-size: 1.02rem;
  line-height: 1.8;
  border-radius: 0 16px 16px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  position: relative;
  padding: 26px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.18);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(214, 69, 69, 0.22);
  }
`;

const InfoTopLine = styled.div`
  width: 62px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #d64545, rgba(214, 69, 69, 0));
  margin-bottom: 18px;
`;

const InfoTitle = styled.h3`
  margin: 0 0 12px;
  color: #f6f3ee;
  font-size: 1.22rem;
`;

const InfoText = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.74);
  line-height: 1.8;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const BottomCard = styled.div`
  padding: 28px;
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(19, 10, 10, 0.9) 0%, rgba(12, 8, 8, 0.96) 100%);
  border: 1px solid rgba(214, 69, 69, 0.16);
`;

const BottomTag = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: #ef6d6d;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const BottomTitle = styled.h3`
  margin: 0 0 12px;
  color: #f6f3ee;
  font-size: 1.3rem;
  line-height: 1.3;
`;

const BottomText = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.74);
  line-height: 1.8;
`;
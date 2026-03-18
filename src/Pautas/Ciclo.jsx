import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pauta from "./Pautamenu"
export default function Ciclo() {
  return (
    <Page>
      <GlowTop />
      <GlowBottom />

      <Container>
          <Pauta />

        <HeroCard>
          <Tag>Dinâmica</Tag>

          <Title>
            O <span>ciclo do abuso</span> narcisista
          </Title>

          <Subtitle>
            A relação raramente começa com frieza ou crueldade. Ela costuma
            seguir um padrão: primeiro a idealização, depois a desvalorização e,
            por fim, o descarte. Esse ciclo cria dependência, confusão e
            desgaste emocional profundo.
          </Subtitle>

          <HeroMeta>
            <MetaItem>
              <MetaLabel>Fase 1</MetaLabel>
              <MetaValue>Idealização</MetaValue>
            </MetaItem>

            <MetaItem>
              <MetaLabel>Fase 2</MetaLabel>
              <MetaValue>Desvalorização</MetaValue>
            </MetaItem>

            <MetaItem>
              <MetaLabel>Fase 3</MetaLabel>
              <MetaValue>Descarte / Retorno</MetaValue>
            </MetaItem>
          </HeroMeta>
        </HeroCard>

        <SectionCard>
          <SectionTitle>Como o ciclo funciona</SectionTitle>

          <Text>
            O abuso narcisista não costuma ser linear. Ele opera em ondas. A
            vítima recebe carinho, atenção e validação no começo, depois passa a
            experimentar confusão, críticas, instabilidade e dor. Quando já
            está emocionalmente fragilizada, pode ser descartada ou mantida em
            estado de dependência por meio de retornos estratégicos.
          </Text>

          <Text>
            Esse padrão faz com que a vítima não entenda o que está vivendo.
            Ela continua tentando recuperar a versão inicial da relação,
            acreditando que aquela pessoa “boa” ainda existe e vai voltar.
          </Text>

          <HighlightQuote>
            “O poder do ciclo está em alternar recompensa e dor até que a vítima
            passe a lutar pelo mínimo.”
          </HighlightQuote>
        </SectionCard>

        <Timeline>
          <StepCard>
            <StepNumber>01</StepNumber>
            <StepContent>
              <StepTitle>Idealização</StepTitle>
              <StepText>
                No começo, a pessoa parece intensa, encantadora, disponível e
                fascinada por você. Elogios, conexão rápida, atenção constante e
                a sensação de ter encontrado alguém “diferente” criam vínculo
                emocional acelerado.
              </StepText>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>02</StepNumber>
            <StepContent>
              <StepTitle>Desvalorização</StepTitle>
              <StepText>
                Depois da conquista, começam críticas sutis, frieza, comparação,
                silêncio punitivo, ambiguidade e inversão de culpa. A vítima
                passa a se esforçar para recuperar a conexão do início.
              </StepText>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>03</StepNumber>
            <StepContent>
              <StepTitle>Descarte</StepTitle>
              <StepText>
                Quando a vítima já está drenada, o narcisista pode se afastar,
                humilhar, substituir ou agir como se nada tivesse valor. O
                descarte pode ser explícito ou emocional, deixando a vítima em
                colapso.
              </StepText>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>04</StepNumber>
            <StepContent>
              <StepTitle>Hoovering / Retorno</StepTitle>
              <StepText>
                Em muitos casos, há uma tentativa de retorno. O narcisista volta
                com promessas, charme, nostalgia ou vitimização para puxar a
                vítima novamente para dentro do ciclo.
              </StepText>
            </StepContent>
          </StepCard>
        </Timeline>

        <Grid>
          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Por que é tão confuso?</InfoTitle>
            <InfoText>
              Porque a relação mistura afeto e dor. O cérebro passa a associar
              pequenos momentos de validação com esperança de reparação.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>Por que a vítima fica?</InfoTitle>
            <InfoText>
              Não é fraqueza. É desgaste progressivo, culpa, apego traumático,
              esperança de mudança e perda de clareza emocional.
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoTopLine />
            <InfoTitle>O que sustenta o ciclo?</InfoTitle>
            <InfoText>
              Alternância entre recompensa e punição, manipulação emocional,
              invalidação da realidade e necessidade de controle.
            </InfoText>
          </InfoBox>
        </Grid>

        <BottomSection>
          <BottomCard>
            <BottomTag>Alerta</BottomTag>
            <BottomTitle>
              O início da relação não invalida o dano do resto.
            </BottomTitle>
            <BottomText>
              Muitas vítimas ficam presas à memória da idealização e ignoram a
              violência psicológica que veio depois. O padrão completo importa
              mais do que o encanto inicial.
            </BottomText>
          </BottomCard>

          <BottomCard>
            <BottomTag>Reflexão</BottomTag>
            <BottomTitle>Você não precisa provar que sofreu.</BottomTitle>
            <BottomText>
              Mesmo quando não há gritos, agressão física ou evidência óbvia, o
              impacto emocional do ciclo pode ser devastador e profundamente
              desorganizador.
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

const Timeline = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
`;

const StepCard = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 20px;
  align-items: start;
  padding: 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.18);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const StepNumber = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(214, 69, 69, 0.12);
  border: 1px solid rgba(214, 69, 69, 0.24);
  color: #ef6d6d;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.04em;
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  margin: 0 0 10px;
  color: #f6f3ee;
  font-size: 1.35rem;
  line-height: 1.3;
`;

const StepText = styled.p`
  margin: 0;
  color: rgba(245, 247, 250, 0.76);
  line-height: 1.8;
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
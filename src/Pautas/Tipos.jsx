import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PautaMenu from "./Pautamenu"

export default function TiposNarcisista() {
  return (
    <Page>
      <GlowTop />
      <GlowBottom />

      <Container>
          <PautaMenu />

        <Header>
          <Tag>Perfis</Tag>

          <Title>
            Tipos de <span>narcisista</span>
          </Title>

          <Subtitle>
            Nem todo narcisista se comporta da mesma forma. Alguns dominam pelo
            ego explícito, outros pela fragilidade aparente, pela falsa bondade
            ou pela crueldade calculada.
          </Subtitle>
        </Header>

        <Grid>
          <Card>
            <TopLine />
            <Badge>Grandioso</Badge>
            <CardTitle>Narcisista Grandioso</CardTitle>
            <CardText>
              Demonstra superioridade, arrogância e necessidade constante de
              admiração. Costuma competir, humilhar e buscar controle sobre os
              outros.
            </CardText>
          </Card>

          <Card>
            <TopLine />
            <Badge>Vulnerável</Badge>
            <CardTitle>Narcisista Vulnerável</CardTitle>
            <CardText>
              Parece sensível ou inseguro, mas usa vitimização e instabilidade
              emocional para gerar culpa e manter atenção sobre si.
            </CardText>
          </Card>

          <Card>
            <TopLine />
            <Badge>Comunal</Badge>
            <CardTitle>Narcisista Comunal</CardTitle>
            <CardText>
              Quer parecer moralmente superior e “bom”. Busca reconhecimento por
              ajudar, mas ainda precisa de validação e admiração.
            </CardText>
          </Card>

          <Card>
            <TopLine />
            <Badge>Maligno</Badge>
            <CardTitle>Narcisista Maligno</CardTitle>
            <CardText>
              O mais perigoso. Mistura manipulação, frieza e crueldade. Pode
              causar danos profundos e usa medo e controle psicológico.
            </CardText>
          </Card>
        </Grid>
        
      </Container>
    </Page>
  );
}
const Page = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 120px 24px 90px;
  background:
    radial-gradient(circle at top right, rgba(160, 20, 20, 0.08), transparent 18%),
    linear-gradient(180deg, #050608 0%, #080b10 100%);
  color: #f5f7fa;
`;

const GlowTop = styled.div`
  position: absolute;
  top: -120px;
  right: -120px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(214, 69, 69, 0.15), transparent 70%);
`;

const GlowBottom = styled.div`
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(214, 69, 69, 0.1), transparent 70%);
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 700px;
  margin-bottom: 40px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(214, 69, 69, 0.12);
  color: #ef6d6d;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: 0 0 16px;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;

  span {
    color: #d64545;
  }
`;

const Subtitle = styled.p`
  color: rgba(245, 247, 250, 0.8);
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 28px;
  border-radius: 24px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TopLine = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #d64545, transparent);
  margin-bottom: 12px;
`;

const Badge = styled.span`
  color: #ef6d6d;
  font-weight: 700;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const CardText = styled.p`
  color: rgba(245, 247, 250, 0.75);
`;
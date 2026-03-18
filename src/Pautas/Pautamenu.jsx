import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PautaMenu() {
  return (
    <NavWrapper>
      <BackButton to="/">← Página inicial</BackButton>

      <Links>
        <NavItem to="/o-que-e-narcisismo">O que é</NavItem>
        <NavItem to="/tipos-de-narcisista">Tipos</NavItem>
        <NavItem to="/como-identificar">Como identificar</NavItem>
        <NavItem to="/ciclo">Ciclo</NavItem>
        <NavItem to="/efeitos">Efeitos</NavItem>
        <NavItem to="/recuperar">Recuperação</NavItem>
      </Links>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const NavItem = styled(Link)`
  padding: 10px 14px;
  border-radius: 999px;
  text-decoration: none;
  color: rgba(245, 247, 250, 0.82);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.92rem;
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
    border-color: rgba(214, 69, 69, 0.24);
    background: rgba(214, 69, 69, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 9px 12px;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #ef6d6d;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    opacity: 0.85;
    transform: translateX(-3px);
  }
`;
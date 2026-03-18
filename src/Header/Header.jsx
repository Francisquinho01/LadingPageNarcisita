import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <Wrap>
      <Bar>
        <Brand href="#inicio" onClick={close}>
          <BrandTitle>Meu Espelho Quebrou</BrandTitle>
          <BrandSub>Documentário Psicológico</BrandSub>
        </Brand>

        <NavDesktop aria-label="Navegação principal">
          <NavLink href="#inicio" onClick={close}>
            Início
          </NavLink>

          <NavLink
            href="https://pt.quora.com/search?q=Narcisita"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Relatos Reais
          </NavLink>

          <NavLink href="#ajuda" onClick={close}>
            Contato
          </NavLink>
        </NavDesktop>

        <Burger
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <BurgerIcon aria-hidden="true">
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
          </BurgerIcon>
        </Burger>
      </Bar>

      <Hairline />

      <Overlay $open={open} onClick={close} />

      <Drawer id="mobile-menu" $open={open} aria-hidden={!open}>
        <DrawerTop>
          <DrawerTitle>Menu</DrawerTitle>
          <CloseBtn type="button" onClick={close} aria-label="Fechar">
            ✕
          </CloseBtn>
        </DrawerTop>

        <NavMobile aria-label="Navegação mobile">
          <NavLinkMobile href="#inicio" onClick={close}>
            Início
          </NavLinkMobile>

          <NavLinkMobile
            href="https://pt.quora.com/search?q=Narcisita"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Relatos Reais
          </NavLinkMobile>

          <NavLinkMobile href="#ajuda" onClick={close}>
            Contato
          </NavLinkMobile>
        </NavMobile>

        <DrawerFoot>Silêncio também é história.</DrawerFoot>
      </Drawer>
    </Wrap>
  );
}

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  background: linear-gradient(
    90deg,
    rgba(11, 13, 18, 0.92),
    rgba(18, 22, 31, 0.88)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`;

const Brand = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  min-width: 0;
  max-width: 72%;
`;

const BrandTitle = styled.span`
  color: #eaeaea;
  letter-spacing: 3px;
  font-weight: 650;
  font-size: 14px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BrandSub = styled.span`
  color: #9fa3aa;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: #9fa3aa;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding: 8px 2px;
  transition: color 0.25s ease;

  &:hover {
    color: #eaeaea;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 0%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 0, 0, 0.95),
      transparent
    );
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Hairline = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(139, 0, 0, 0.9),
    transparent
  );
  opacity: 0.7;
`;

const Burger = styled.button`
  display: none;

  @media (max-width: 860px) {
    display: inline-flex;
  }

  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const BurgerIcon = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BurgerLine = styled.span`
  display: block;
  width: 18px;
  height: 2px;
  background: rgba(234, 234, 234, 0.9);
  border-radius: 999px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 0.25s ease;
`;

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(360px, 86vw);
  z-index: 1100;
  background: linear-gradient(
    180deg,
    rgba(11, 13, 18, 0.98),
    rgba(18, 22, 31, 0.98)
  );
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  transition: transform 0.25s ease;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const DrawerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const DrawerTitle = styled.div`
  color: #eaeaea;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 650;
`;

const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.25);
  color: #eaeaea;
  cursor: pointer;
`;

const NavMobile = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  gap: 8px;
`;

const NavLinkMobile = styled.a`
  color: #eaeaea;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 12px 10px;
  border-radius: 12px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const DrawerFoot = styled.div`
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #9fa3aa;
  font-size: 12px;
  letter-spacing: 0.3px;
`;

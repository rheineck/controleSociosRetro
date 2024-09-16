import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { SignOut } from '@phosphor-icons/react';

import LogoImg from '../../assets/logo.png';

import { Container } from './styles';

export function Header () {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    alert("Você quer sair?");
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <img src={LogoImg} alt="Logo Retrô Car Club" />
      <button onClick={handleSignOut}>
        <SignOut size={24} />
      </button>
    </Container>
  )
}
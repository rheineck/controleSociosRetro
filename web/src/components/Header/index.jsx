import { SignOut } from '@phosphor-icons/react'

import LogoImg from '../../assets/logo.png'

import { ButtonText } from '../ButtonText'

import { Container } from './styles'

export function Header () {
  return (
    <Container>
      <img src={LogoImg} alt="Logo Retrô Car Club" />
      <button>
        <SignOut size={24} />
      </button>
    </Container>
  )
}
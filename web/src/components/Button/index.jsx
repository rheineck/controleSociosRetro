import { Container } from './styles'

export function Button ({ children, icon, ...rest}) {
  return (
    <Container
      type='button'
      {...rest}
    >
      {children}
    </Container>
  )
}
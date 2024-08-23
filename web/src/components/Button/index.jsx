import { Container } from './styles'

export function Button ({ children, isDisabled, icon, ...rest}) {
  return (
    <Container
      type='button'
      isDisabled = {isDisabled}
      {...rest}
    >
      {children}
    </Container>
  )
}
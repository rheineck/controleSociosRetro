import { Container } from './styles'

export function ButtonText ({ title, isDisabled, icon: Icon, ...rest}) {
  return (
    <Container
      type='button'
      isDisabled={isDisabled}
      {...rest}
    >
      {title}
      {Icon && <Icon size={20}/>}
    </Container>
  )
}
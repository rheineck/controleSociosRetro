import { Container } from "./styles";

export function Tag ({title, className, ...rest}) {
  return (
    <Container className={className} {...rest}>
      {title}
    </Container>
  )
}
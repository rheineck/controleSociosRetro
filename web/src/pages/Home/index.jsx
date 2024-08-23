import { Container } from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { Button } from '../../components/Button'

export function Home () {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="content">
          <div className="overview">
            <h1>Visão Geral</h1>
            <div id="associates"></div>
            <div id="finance"></div>
          </div>
          <div className="rapidAccess">
            <div className="associates">
              <h2>Sócios</h2>
              <Button>
                Adicionar
              </Button>
              <Button>
                Editar
              </Button>
              <Button>
                Ver
              </Button>
            </div>
            <div className="cars">
              <h2>Carros</h2>
              <Button>
                Adicionar
              </Button>
              <Button>
                Editar
              </Button>
              <Button>
                Ver
              </Button>
            </div>
            <div className="reports">
              <h2>Relatórios</h2>
              <Button>
                Sócios
              </Button>
              <Button>
                Carros
              </Button>
              <Button>
                Financeiros
              </Button>
            </div>
            <div className="finance">
              <h2>Financeiro</h2>
              <Button>
                Acessar
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
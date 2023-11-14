import Actor from '../../components/Actor'
import Header from '../../components/Header'
import Provider from '../../context/Provider'

export default function Ator() {
  return (
    <div>
      <Provider>
        <Header />
        <Actor />
      </Provider>
    </div>
  )
}

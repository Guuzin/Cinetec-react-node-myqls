import Provider from '../../context/Provider'
import Director from '../../components/Director'
import Header from '../../components/Header'

export default function Diretor() {
  return (
    <div>
      <Provider>
        <Header />
        <Director />
      </Provider>
    </div>
  )
}

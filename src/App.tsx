import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import './App.css'
import Profile from './components/Profile'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
})

function App () {
  return (
    <WagmiConfig client={client}>
      <Profile />
      <div></div>
    </WagmiConfig>
  )
}

export default App

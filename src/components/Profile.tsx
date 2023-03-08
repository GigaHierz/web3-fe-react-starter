import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Profile () {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {ensName ?? address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export default Profile

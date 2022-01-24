import web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

const ETHERIUM_NETWORK_ID = 1

export const connector = new InjectedConnector({
    supportedChainIds: [ETHERIUM_NETWORK_ID] //1 es etherium polygon es 137
})

export const getLibrary = (provider) => {
    const library = new web3(provider)
    return library
}
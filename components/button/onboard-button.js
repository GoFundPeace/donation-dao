import MetaMaskOnboarding from '@metamask/onboarding';
import { useState, useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { injected, getNetwork } from '../../connectors'

export default function OnboardingButton(triedToEagerConnect) {
  const { active, error, activate, chainId, account, setError } = useWeb3React()
  const requiredChainId = process.env.CHAIN_ID;


  const [correctNetwork, setCorrectNetwork] = useState(false)
  useEffect(() => {
    if (chainId !== undefined) {
      if(chainId.toString() === requiredChainId){
        setCorrectNetwork(true)
      } else {
        setCorrectNetwork(false)
      }
    } else {
      setCorrectNetwork(false)
    }
  }, [chainId])
  
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined"){
      setMounted(true)
    }
  }, [])

  const onboarding = useRef();
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (triedToEagerConnect && !active && !error) {
      activate(getNetwork(requiredChainId))
    }
  }, [triedToEagerConnect, active, error, requiredChainId, activate]);

  useEffect(() => {
    if (active || error) {
      onboarding.current?.stopOnboarding()
    }
  }, [active, error])

  if (error) {
    return null
  } else if (!triedToEagerConnect) {
    return null
  } else if (!mounted){
    return null
  } else if (typeof account !== 'string' && mounted) {
    return (
      <div>
        {MetaMaskOnboarding.isMetaMaskInstalled() || (window)?.ethereum || (window)?.web3 ? (
          <a 
            className="thm-btn-2" disabled={false} 
            onClick={() => {
              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  // ignore
                } else {
                  setError(error)
                }
              })
            }} >
            Connect to MetaMask to Donate
          </a>
        ) : (
          <a 
            className="thm-btn-2" disabled={false} onClick={() => {
              onboarding.current?.startOnboarding()
            }} >
            Install MetaMask to Donate
          </a>
        )}
      </div>
    )
  } else {
    if(correctNetwork) {
      return (
        <div>
          <a className="thm-btn-2 side-panel__toggler" onClick={() => {
            document.querySelector(".side-panel__wrapper")
            .classList.toggle("expanded");
          }}>
            Donate
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <a className="thm-btn-2">
            Wrong Network, Connect to {process.env.CHAIN_NAME}
          </a>
        </div>
      )
    }
  }
};

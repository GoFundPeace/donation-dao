import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { useForm } from "react-hook-form";

const Donate = () => {
  const { account, library, setError } = useWeb3React()
  const [accountBalance, setAccountBalance] = useState(0)

  if (library !== undefined && account !== null) {
    const DAI = new Contract(
      // ERC20 token contract: DAI
      process.env.DAI_CONTRACT,
      [
        // Read-Only Functions
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)",
    
        // Authenticated Functions
        "function transfer(address to, uint amount) returns (boolean)",
    
        // Events
        "event Transfer(address indexed from, address indexed to, uint amount)"
    ],
      library
    )

    DAI.balanceOf(account).then((balance) => {
      const BigBigNumBalance = BigNumber.from(balance)
      const multiplier = BigNumber.from("1000000000000000000")
      const BigNumBalance = BigBigNumBalance.div(multiplier)
      setAccountBalance(BigNumBalance.toString())
    }).catch((error) => {
      // silent error
    })
  }


  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitButton, setSubmitButton] = useState('Donate')
  const [isSubmitting, setIsSubmitting] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState("")

  function showError() {
    document.querySelector(".errorMessage").style.display = "block"
  }

  function hideError() {
    document.querySelector(".errorMessage").style.display = "none"
  }

  function showSuccess() {
    document.querySelector(".successMessage").style.display = "block"
  }

  function hideSuccess() {
    document.querySelector(".successMessage").style.display = "none"
  }


  const onSubmit = event => {
    const BigNumDonation = BigNumber.from(event.donation)
    const multiplier = BigNumber.from("1000000000000000000")
    const BigBigNumdDonation = BigNumDonation.mul(multiplier)

    if (account && library !== undefined) {
      setIsSubmitting(true)
      hideError()
      hideSuccess()
      setSubmitButton('Donation in progress')

      const DAI = new Contract(
        // ERC20 token contract: DAI
        process.env.DAI_CONTRACT,
        [
          "function approve(address _spender, uint256 _value) returns (boolean)",   
          // "event Approval (index_topic_1 address owner, index_topic_2 address spender, uint256 value)"
        ],
        library.getSigner(account)
      )

      DAI.approve(process.env.PRE_SALE_CONTRACT, BigBigNumdDonation).then((response) => {
        response.wait(1).then((receipt) => {
          if (receipt.status === 1) {
            const Fundraising = new Contract(
              process.env.FUNDRAISING_CONTRACT,
              [
                "function contribute(uint256 _value)"
              ],
              library.getSigner(account)
            )
            Fundraising.contribute(BigBigNumdDonation).then((response) => {
                response.wait(1).then((receipt) => {
                  setSubmitButton('Donate')
                  setIsSubmitting(false)
                  setSuccess(process.env.BLOCK_EXPLORER + receipt.transactionHash)
                  showSuccess()
                }).catch((error) => {
                  setSubmitButton('Donate')
                  setIsSubmitting(false)
                  setError(error)
                  setErrorMessage("ERROR: " + error.error.message)
                  showError()
              })
              }).catch((error) => {
                setSubmitButton('Donate')
                setIsSubmitting(false)
                setError(error)
                setErrorMessage("ERROR: " + error.error.message)
                showError()
              })
          }
        }).catch((error) => {
          setSubmitButton('Donate')
          setIsSubmitting(false)
          setError(error)
          setErrorMessage("ERROR: " + error.error.message)
          showError()
        })
      }).catch((error) => {
        setSubmitButton('Donate')
        setIsSubmitting(false)
        setError(error)
        setErrorMessage("ERROR: " + error.error.message)
        showError()
      })
    }
  }

  return(
    <di>
      <h3>New Donation</h3>
        <p>Your Balance: {accountBalance} {process.env.DENOMINATION} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
              <label for="fname">{process.env.DENOMINATION} to donate:</label>
              <input 
              type="text"
              pattern="[+-]?\d+(?:[.,]\d+)?" 
              placeholder="0.00" 
              disabled={isSubmitting}
              {...register("donation", { required: true })} />

              <input className="submit" type="submit" value={submitButton} disabled={isSubmitting}/>
              <textarea className="errorMessage" type="text" readOnly  disabled value={errorMessage}/>
        </form>
        <a className="successMessage" href={success} target="_blank">Sucess! Click to see transaction</a>
    </di>
  );
};

export default Donate;
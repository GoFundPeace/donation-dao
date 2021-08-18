import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';

const ProgressBar = () => {
  const { library, chainId, setError } = useWeb3React()
  const [goal, setGoal] = useState(0)
  const [totalRaised, setTotalRaised] = useState(0)
  const [percentOfGoalRaised, setPercentOfGoalRaised] = useState(0)

  const requiredChainId = process.env.CHAIN_ID;
  const [correctNetwork, setCorrectNetwork] = useState(false)
  useEffect(() => {
    if (chainId !== undefined) {
      if(chainId.toString() === requiredChainId){
        setCorrectNetwork(true)
      } else {
        setCorrectNetwork(false)
      }
    }
  }, [chainId])



  if (library !== undefined && correctNetwork) {
    const PreSale = new Contract(
      process.env.PRE_SALE_CONTRACT,
      [
        "function goal() public view returns (uint256)",
        "function totalRaised() public view returns (uint256)",
        "function state() view returns (uint8)"
      ],
      library
    )

    PreSale.goal().then((goal) => {
      const BigNumGoal = goal.div(BigNumber.from("1000000000000000000"))
      setGoal(BigNumGoal.toNumber())
    }).catch((error) => {
      // silent error
    })

    PreSale.totalRaised().then((total) => {
      const BigNumTotal = total.div(BigNumber.from("1000000000000000000"))
      setTotalRaised(BigNumTotal.toNumber())
      setPercentOfGoalRaised(totalRaised/goal*100)
    }).catch((error) => {
      // silent error
    })
  }

  return (
    <section className="call-to-action">
      <Container>
        <Row className="align-items-center">
          <Col xl={11} lg={10}>
            <div className="call-to-action__content">
              <div className="call-to-action__icon">
                <i className="gfp-icon-charity"></i>
              </div>
              <h3>Fund <br/> Goal</h3>
              <div className="call-to-action__progress">
                <span
                  style={{ width: `${percentOfGoalRaised}%` }}
                  className="wow actionProgress"
                  data-wow-duration="1500ms">
                  <b>
                    <i>{percentOfGoalRaised}</i>%
                  </b>
                </span>
              </div>
            </div>
            <div className="action-card__goals">
              <p>
                <strong>Raised:</strong> ${totalRaised}
              </p>
              <p>
                <strong>Goal:</strong> ${goal}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgressBar;

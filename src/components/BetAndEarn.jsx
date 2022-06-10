import React from "react";
import styled from "styled-components";
import sell1 from "../assets/sell1.png";
import sell2 from "../assets/sell2.png";
import sell3 from "../assets/sell3.png";
import Button from "./Button";

export default function BetAndEarn() {
  const data = [
    {
      image: sell1,
      title: "BET",
      description:
        "Bet on anything vs another peer.Wager BTC, ETH, USDC, MATIC or SHAKES.Once the bet has taken place,submit!",
      buttonText: "Bet Now",
    },
    {
      image: sell2,
      title: "EARN",
      description:
        "Information about betting on handshake bets.There are many ways from groups to the public lottery. Bet now!",
      buttonText: "Start Earning",
    },
    {
      image: sell3,
      title: "CONNECT",
      description:
        "Information about betting on handshake bets.There are many ways from groups to the public lottery. Bet now!",
      buttonText: "Join Now",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Bet and Earn</h2>
      </div>
      <div className="container">
        <div className="ellipse"></div>
        <div className="content">
          {data.map(({ image, title, description, buttonText }, index) => {
            return (
              <div className="betAndEarn" key={index}>
                <div className="image">
                  <img src={image} alt="bet and earn" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>

                <Button text={buttonText} blue={index === 1} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  .container {
    background-color: #DC582A;
    padding: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background-color: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    .content {
      display: flex;
      gap: 3rem;
      .betAndEarn {
        background-color: #ffffff34;
        z-index: 10;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background-color: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: max-content;
          border-radius: 2rem;
          img {
            height: 2rem;
          }
        }
        h3 {
          color: white;
        }
        p {
          color: white;
          margin-bottom: 1rem;
        }
        button {
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
import React, { Component } from "react";
import styled from "emotion/react";
import StripeCheckout from "react-stripe-checkout";

const Button = styled.button`
  display: inline-block;

  font-size: 0.7rem;
  line-height: 42px;
  border-radius: 21px;
  padding-left: 40px;
  padding-right: 40px;
  letter-spacing: 3.2px;

  background: white;
  color: #3e3e3e;
  text-transform: uppercase;
  border: 1px solid #eee;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #3e3e3e;
    color: #fff;
  }
  @media (min-width: 960px) {
    font-size: 1rem;
    line-height: 64px;
    border-radius: 32px;
    padding-left: 40px;
    padding-right: 40px;
    letter-spacing: 4.2px;
  }
`;

class BuyButton extends Component {
  constructor(props) {
    super(props);

    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      console.log("respnse yo");
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    const { title, image, price } = this.props;
    const amount = price * 100;
    console.log(amount);
    return (
      <StripeCheckout
        name="SLR Magic"
        description={title.replace(/(<([^>]+)>)/gi, "")}
        image={image}
        amount={amount}
        currency="USD"
        alipay
        email="m.fahle@gmail.com"
        token={this.onToken}
        ComponentClass="div"
        stripeKey="pk_test_KYFz0LAaPE9QNl6pMogni03r"
        shippingAddress
        billingAddress={false}
      >
        <Button>Buy Now</Button>
      </StripeCheckout>
    );
  }
}

export default BuyButton;

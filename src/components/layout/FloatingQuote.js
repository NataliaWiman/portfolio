import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class FloatingQuote extends Component {
  state = {
    on: false,
    show: true,
    quotes: []
  };

  hide = () => {
    this.setState({
      show: !this.state.show
    });
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  componentDidMount() {
    axios.get("http://quotes.rest/qod.json?category=inspire").then(res => {
      this.setState({
        quotes: res.data.contents.quotes
      });
    });
  }
  render() {
    const { quotes } = this.state;
    const quotesList = quotes.length ? (
      quotes.map(quote => {
        return (
          <div key={quote.id}>
            <Text>{quote.quote}</Text>
            <Author>— {quote.author} —</Author>
          </div>
        );
      })
    ) : (
      <div>No quotes yet.</div>
    );
    return (
      <div>
        <Container>
          {this.state.on && (
            <Wrapper>
              <Quote>{quotesList}</Quote>
            </Wrapper>
          )}
        </Container>
        <ButtonQuote>
          {this.state.show && (
            <DailyQuote>Inspiring quote of the day</DailyQuote>
          )}

          <Icon
            onClick={() => {
              this.toggle();
              this.hide();
            }}
          >
            <i className="fas fa-quote-right"></i>
          </Icon>
        </ButtonQuote>
      </div>
    );
  }
}

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  right: 30px;
  z-index: -1;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: 1%;
  width: 200px;
  background-color: #fff;
  border: 5px solid #303030;
`;

const Quote = styled.div`
  margin: 15px;
  font-size: 0.9em;
  text-align: center;
`;

const ButtonQuote = styled.div`
  display: flex;
  align-items: center;
  bottom: 20px;
  right: 20px;
`;

const DailyQuote = styled.p`
  margin-right: 10px;
  width: 110px;
  font-size: 0.9em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0;
  text-align: right;
`;

const Icon = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  color: #303030;
  background-color: #ffce34;
  border: 0;
  cursor: pointer;
  outline: 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Text = styled.h3`
  letter-spacing: 0;
  margin-bottom: 1vmin;
`;

const Author = styled.p`
  font-style: italic;
`;

export default FloatingQuote;

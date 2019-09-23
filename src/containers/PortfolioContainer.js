import React, { Component } from "react"
import Stock from "../components/Stock"

class PortfolioContainer extends Component {
  render() {
    // console.log(this.props.portfolio)
    let stocks = this.props.stocks.map(stock => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          addToPortfolioHandler={this.props.addToPortfolioHandler}
        />
      )
    })

    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks}
      </div>
    )
  }
}

export default PortfolioContainer

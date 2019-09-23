import React, { Component } from "react"
import Stock from "../components/Stock"

class StockContainer extends Component {
  render() {
    // console.log(this.props)
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
        <h2>Stocks</h2>
        {stocks}
      </div>
    )
  }
}

export default StockContainer

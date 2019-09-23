import React, { Component } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "../components/SearchBar"

class MainContainer extends Component {
  state = { stockList: [], portfolioList: [], sortArray: [] }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ stockList: data, sortArray: data })
      })
  }

  addToPortfolioHandler = stockObj => {
    // console.log("add click", stockObj)
    if (!this.state.portfolioList.includes(stockObj)) {
      let newArray = [stockObj, ...this.state.portfolioList]
      this.setState({
        portfolioList: newArray
      })
    } else {
      let newArray = this.state.portfolioList.filter(
        stock => stock.id !== stockObj.id
      )
      this.setState({ portfolioList: newArray })
    }
  }

  sortByHandler = sortBy => {
    let arr = []
    switch (sortBy) {
      case "Alphabetically":
        arr = this.state.sortArray.sort((a, b) => (a.name > b.name ? 1 : -1))
        break
      case "Price":
        arr = this.state.sortArray.sort((a, b) => (a.price > b.price ? 1 : -1))
        break
      default:
        console.log("nope")
    }
    this.setState({ sortArray: arr })
  }

  filterHandler = type => {
    if (type !== "All") {
      this.setState({
        sortArray: this.state.stockList.filter(stock => stock.type === type)
      })
    } else {
      this.setState({ sortArray: this.state.stockList })
    }
  }

  render() {
    // console.log(this.state.stockList)
    return (
      <div>
        <SearchBar
          // stocks={this.state.sortArray}
          sortByHandler={this.sortByHandler}
          filterHandler={this.filterHandler}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.sortArray}
              addToPortfolioHandler={this.addToPortfolioHandler}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.portfolioList}
              addToPortfolioHandler={this.addToPortfolioHandler}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer

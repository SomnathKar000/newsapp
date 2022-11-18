import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };
  setProgess = (progess) => {
    this.setState({ progess: progess });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#4689c4" progress={this.state.progess} />
          <Routes>
            <Route
              index
              element={
                <News
                  setProgess={this.setProgess}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgess={this.setProgess}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgess={this.setProgess}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgess={this.setProgess}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgess={this.setProgess}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgess={this.setProgess}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgess={this.setProgess}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

// async componentDidMount() {
//   this.props.setProgess(10);
//   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=154ee2b242574d66b9784b411fed486c&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//   this.setState({ loading: true });
//   let data = await fetch(url);
//   this.props.setProgess(40);
//   let parsedData = await data.json();
//   this.props.setProgess(70);
//   this.setState({
//     articles: parsedData.articles,
//     totalResults: parsedData.totalArticles,
//     loading: false,
//   });
//   this.props.setProgess(100);
// }

// fetchMoreData = async () => {
//   this.setState({ page: this.state.page + 1 });

//   const url = `https://newsapi.org/v2/top-headlines?country=${
//     this.props.country
//   }&category=${
//     this.props.category
//   }&apiKey=154ee2b242574d66b9784b411fed486c&page=${
//     this.state.page + 1
//   }&pagesize=${this.props.pageSize}`;
//   this.setState({ loading: true });
//   let data = await fetch(url);
//   let newData = await data.json();

//   this.setState({
//     articles: this.state.articles.concat(newData.articles),
//     currentlemgth: 6 * this.state.page,
//     totalResults: newData.totalResults,
//     loading: false,
//   });
//   console.log(
//     this.state.currentlemgth + " results" + this.state.totalResults
//   );

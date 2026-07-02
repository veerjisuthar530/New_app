import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
    
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }
  Capitalize(str){
 return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("cdm");
    this.state = {
      articles: [],
      loading: true,
    };
    document.title = `${this.Capitalize(this.props.category)} - NewMonkey`;


  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}`
;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });

    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">NewsMonkey--Top {this.Capitalize(this.props.category)} Headlines</h3>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.urlToImage}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

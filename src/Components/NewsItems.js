import React, { Component } from "react";
import { Link } from "react-router-dom";  

export default class NewsItems extends Component {
  render() {
    let { title, description, ImageUrl ,newsUrl, author ,date} = this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

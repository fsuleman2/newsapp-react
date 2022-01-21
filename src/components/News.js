import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem
              title="cricket"
              description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
            imageUrl="https://premium.vgc.no/ap/images/bd89d0be-e705-4c34-9d52-1a56b5059cd6?fit=crop&q=80&w=1440"
            />
          </div>
          <div className="col-md-4 ">
            <NewsItem
              title="cricket"
              description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
            imageUrl="https://premium.vgc.no/ap/images/bd89d0be-e705-4c34-9d52-1a56b5059cd6?fit=crop&q=80&w=1440"
            
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="cricket"
              description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
            imageUrl="https://premium.vgc.no/ap/images/bd89d0be-e705-4c34-9d52-1a56b5059cd6?fit=crop&q=80&w=1440"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;

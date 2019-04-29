import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Search from './Search.js'
const NYT_API_KEY = 'gViiaB6DcAxJ0mWgiQVf7HbCBPtniqTr';


export default class SearchableMovieReviewsContainer extends Component {

  state ={
    reviews: [],
    searchTerm: ''
  }

  getReviews = (queryURL) => {
    fetch(queryURL)
      .then(response => response.json())
      .then(r => this.setState({ reviews: r.results }))
  }

  onChangeSearchTerm = searchTerm => {
    this.setState({searchTerm})
  }

  onSearchClick = e => {
    e.preventDefault()
    const searchTerm = this.state.searchTerm
    const queryURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `query=${searchTerm}`+`&api-key=${NYT_API_KEY}`;
    this.getReviews(queryURL)
  }

  render() {
    const { onSearchClick, onChangeSearchTerm } = this
    const { reviews } = this.state
    return (
      <div className="searchable-movie-reviews">
        <Search
          onChangeSearchTerm={onChangeSearchTerm}
          onSearchClick={onSearchClick}
        />
        <MovieReviews
          reviews={reviews}
        />  
      </div>
    )
  }
}

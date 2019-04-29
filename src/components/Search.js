import React from 'react'

export default class Search extends React.Component {
  render() {
    const {onChangeSearchTerm, onSearchClick} = this.props
    return(
      <div>
        <form onSubmit={onSearchClick}>
          <input type="text" placeholder="Search" onChange={event => onChangeSearchTerm(event.target.value)}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

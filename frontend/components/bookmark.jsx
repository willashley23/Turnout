import React from 'react';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.createBookmark(this.props)
    // ?? props?
  }

  render() {

    return (
      <div></div>
    )

  }
}
import React, { Component } from 'react';
import Input from './Input';

export default class SearchPanel extends Component {

  onSearchChange = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="Search-Panel ui transparent icon input">
      <Input
        className="search-input"
        value={this.props.searchValue}
        onChange={this.onSearchChange}
        placeholder='Search...'
      />
      <i className="search icon red column"></i>
      </div>
    );
  }
};


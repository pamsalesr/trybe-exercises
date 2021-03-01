import React from 'react';

class FavoriteColor extends React.Component {

  render() {
    return (
      <label>
        What's your favorite color?
        <select name='favoriteColor' value={this.props.value} onChange={this.props.handleChange}>
          <option value=''>Selecione</option>
          <option value='blue'>Blue</option>
          <option value='yellow'>yellow</option>
          <option value='red'>red</option>
          <option value='green'>green</option>
          <option value='brown'>brown</option>
        </select>
      </label>
    )
  }
}

export default FavoriteColor;

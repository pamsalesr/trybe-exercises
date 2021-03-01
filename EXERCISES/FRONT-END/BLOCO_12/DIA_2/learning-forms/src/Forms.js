import React from 'react';
import './App.css';
import FavoriteColor from './FavoriteColor';
import Feedback from './Feedback';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      feedback: '',
      favoriteColor: '',
      isVegan: 'false',
      formularioComErros: 'false',
    };

  }

  updateErrorState = (bool) => { this.setState({ formularioComErros: bool }) }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className='form'>
        <h1>My first Form in React</h1>
        <form>
          <Feedback value={this.state.feedback} handleChange={this.handleChange} />
          <FavoriteColor value={this.state.favoriteColor} handleChange={this.handleChange} />
          <label>
            Are you vegan?
            <input type='checkbox' name='isVegan' checked={this.state.isVegan} onChange={this.handleChange} />
          </label>

          <label>
            Send a picture of your favorite animal:
            <input type="file" />
          </label>
        </form>
        {}
      </div>
    );
  }
}

export default Forms;

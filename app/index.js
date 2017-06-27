import React from 'react'
import ReactDom from 'react-dom'

const Main = React.creacteClass({
  render() {
    return (
      <p> Hello World!</p>
    );
  }
});


ReactDom.render(

  <Main />
  document.getElementById('app');
);
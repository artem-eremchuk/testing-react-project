import React from 'react';
import classes from './Layout.module.css';

class Layout extends React.Component {
  
  render(){
    return (
      <div className={classes.Layout}>
        <header>
          <h1>Header</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
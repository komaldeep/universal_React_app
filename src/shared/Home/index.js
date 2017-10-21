import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Home extends Component {
  render() {
    return (

      <div className="home">
        <aside>
          <p className="selected">About</p>
          <p>
            <Link to="/news">Wizard News</Link>
          </p>
        </aside>
        <article>
          <h1>W Combinator created a new model for funding early stage wizardry.</h1>
          <p>
            Twice a year we invest a small amount of mana in a large number of wizards (recently
            105).
          </p>
        </article>
      </div>
    );
  }
}

export default Home;
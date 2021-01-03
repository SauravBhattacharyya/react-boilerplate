import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h2>Asynchronous Data Load</h2>
        <ul className="ul">
          {this.props.articles.map((el) => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    articles: state.articles.slice(0, 10),
  };
}

export default connect(mapStatetoProps, { getData })(Post);

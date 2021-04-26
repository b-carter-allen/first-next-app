import React from "react";

export default class Title extends React.Component {
  //change state reacting to customer input
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }
  render() {
    return (
      <div className="flex flex-col items-center justify-center mb-4">
        <h1
          style={{ color: this.state.color }}
          className="text-3xl font-semibold mb-4"
        >
          Hello {this.props.name}!
        </h1>
        <p>
          <button
            className="bg-indigo-500 hover:bg-blue-600 transition-all border-2 hover:border-pink-300 border-indigo-700 text-white rounded px-4 py-2"
            onClick={() => {
              this.setState({ color: "teal" });
            }}
          >
            Prettify
          </button>
        </p>
      </div>
    );
  }
}

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click To Increase Count
        </button>
        <h1>{this.props.name}</h1>
        <h1>Email</h1>
        <h1>Location</h1>
        <h1>Phone Number</h1>
      </div>
    );
  }
}
export default UserClass;

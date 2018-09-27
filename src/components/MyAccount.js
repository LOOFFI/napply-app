import React from "react";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentUser } = this.props;
    console.log(this.props);
    return (
      <section>
        <h2>Your account</h2>
        {currentUser && <p>{currentUser.fullName}</p>}

        <form>
          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default MyAccount;

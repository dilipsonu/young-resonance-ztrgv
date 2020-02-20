import React, { Component } from "react";
import * as Constants from "./const";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

    this.state = {
      //state is by default an object
      userList: Constants.STATIC_USER_LIST
    };
  }
  renderTableData() {
    return this.state.userList.map((user, index) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}{" "}
          </td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>
            {user.company.name}
            {user.company.catchPhrase}
            {user.company.bs}
          </td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.userList[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="userList">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table; //exporting a component make it reusable and this is the beauty of react

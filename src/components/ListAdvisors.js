import React, { Component } from "react";
import SearchBar from "./SearchBar";
import data from "./data.json";

import Advisors from "./Advisors";

export default class ListAdvisors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSearchName: [],
      horizontal: true,
      data: data.data.advisorProfileCollection.items,
    };
  }

  render() {
    return (
      <div className="advisors">
        <SearchBar className="advisors__searchBar" />
        <table className="advisors__table">
          {this.state.data.map((item, index) => {
            return (
              <tr key={index} className="listAdvisors__item">
                <Advisors item={item} />
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

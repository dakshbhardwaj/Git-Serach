import React from 'react';
import RepoDetails from '../RepoDetails/RepoDetails';
import UserCard from '../UserCard/UserCard';

import './repo_container.css';

const RepoContainer = ({ repositoriesName, totalRepositories, sortOptions }) => {
  return (
    <div>
      <h3>{totalRepositories} repositories found</h3>
      <select
        value={this.props.sortOptions}
        onChange={this.handleOptions}
        className="custom-select custom-select-md"
        style={{ position: "absolute", width: "134px", marginRight: "27px", marginLeft: "400px", borderRadius: "3px" }}
      >
        <option value="bestMatch">Best match</option>
        <option value="forks">Forks</option>
        <option value="watchers">Watchers</option>
        <option value="issues">Open Issues</option>
        <option value="stars">Stars</option>
      </select>
      <br />
      <div>
        {repositoriesName}
      </div>
    </div>

  );

}

export default RepoContainer;

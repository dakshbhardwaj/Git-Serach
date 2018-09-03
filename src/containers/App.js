import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Dev componenets
import Button from '../components/button/Button';
import SearchBar from '../components/search/Search';
import RepoContainer from '../components/RepoContainer/RepoContainer';

//CSS
import './App.css';

class App extends Component {
  handleChange = (e) => {
    let { dispatch } = this.props;
    dispatch({ type: 'UPDATE_USERNAME', username: e.target.value });
  }

  onRepoSearch = () => {
    let { username } = this.props;
    let { dispatch } = this.props;
    fetch(`https://api.github.com/search/repositories?q=${username}`)
      .then(response =>
        response.json()
      )
      .then(data => dispatch({
        type: 'UPDATE_REPOSITORIES',
        repositories: data.items,
        totalRepositories: data.total_count
      })
      );
  }

  handleOptions = (event) => {
    let { dispatch } = this.props;
    dispatch({ type: 'UPDATE_OPTION', sortOptions: event.target.value })
  }

  render() {
    let { totalRepositories } = this.props;

    let repositoriesName = this.props.repositories.map((repo, i) =>
      (<li key={i}>
        <a href={repo.html_url}>
          {repo.full_name}
          <br />
        </a>
        <p>
          {repo.description}
        </p>
        <hr />
      </li>
      ));

    if (this.props.sortOptions === "fewForks") {
      let sortedForkArray = this.props.repositories.sort((a, b) =>
        parseFloat(a.forks) - parseFloat(b.forks))
      let mostForks = sortedForkArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Forks Count : {repo.forks_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostForks
    }
    else if (this.props.sortOptions === "mostForks") {
      let sortedForkArray = this.props.repositories.sort((a, b) =>
        parseFloat(b.forks) - parseFloat(a.forks))
      let mostForks = sortedForkArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Forks Count : {repo.forks_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostForks
    }
    else if (this.props.sortOptions === "fewWatchers") {
      let sortedWatchArray = this.props.repositories.sort((a, b) =>
        parseFloat(a.watchers_count) - parseFloat(b.watchers_count)
      )
      let mostWatchers = sortedWatchArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Watchers Count : {repo.watchers}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostWatchers
    }
    else if (this.props.sortOptions === "mostWatchers") {
      let sortedWatchArray = this.props.repositories.sort((a, b) =>
        parseFloat(b.watchers_count) - parseFloat(a.watchers_count)
      )
      let mostWatchers = sortedWatchArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Watchers Count : {repo.watchers}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostWatchers
    }
    else if (this.props.sortOptions === "mostIssues") {

      let sortedIssuesArray = this.props.repositories.sort((a, b) =>
        parseFloat(b.open_issues) - parseFloat(a.open_issues)
      )
      let mostIssues = sortedIssuesArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Issues Count : {repo.open_issues_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostIssues
    }
    else if (this.props.sortOptions === "fewIssues") {

      let sortedIssuesArray = this.props.repositories.sort((a, b) =>
        parseFloat(a.open_issues) - parseFloat(b.open_issues)
      )
      let mostIssues = sortedIssuesArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Issues Count : {repo.open_issues_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostIssues
    }
    else if (this.props.sortOptions === "fewStars") {
      let sortedStarArray = this.props.repositories.sort((a, b) =>
        parseFloat(a.stargazers_count) - parseFloat(b.stargazers_count)
      );
      let mostStars = sortedStarArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Stars Count : {repo.stargazers_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostStars
    }
    else if (this.props.sortOptions === "mostStars") {
      let sortedStarArray = this.props.repositories.sort((a, b) =>
        parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count)
      );
      let mostStars = sortedStarArray.map((repo, i) =>
        (<li key={i}>
          <a href={repo.html_url}>
            {repo.full_name}
            <br />
          </a>
          <p>Stars Count : {repo.stargazers_count}</p>
          <p>
            {repo.description}
          </p>
          <hr />
        </li>
        ));
      repositoriesName = mostStars
    }
    return (
      <div className='app'>
        <h2>Search for the Github repositories ......</h2>
        <SearchBar handleChange={this.handleChange} userName={this.props.username} />
        <Button onAction={this.onRepoSearch} btnText={'Search'} />
        <hr />

        {
          Object.keys(repositoriesName).length < 1 ? 'Loading ...' :
            <div>
              <div>
                <h3>{totalRepositories} repositories found</h3>
                <select
                  value={this.props.sortOptions}
                  onChange={this.handleOptions}
                  className="custom-select custom-select-md"
                  style={{ position: 'relative', width: "134px", marginRight: "27px", marginLeft: "400px", borderRadius: "3px" }}
                >
                  <option value="bestMatch">Best match</option>
                  <option value="mostStars">Most Stars</option>
                  <option value="fewStars">Fewest Stars</option>
                  <option value="mostForks">Most Forks</option>
                  <option value="fewForks">Few Forks</option>
                  <option value="mostWatchers">Most Watchers</option>
                  <option value="fewWatchers">Few Watchers</option>
                  <option value="mostIssues">Most Issues</option>
                  <option value="fewIssues">Few Issues</option>
                </select>
                <br />
              </div>
              <div>
                {repositoriesName}
              </div>
            </div>
        }

        {/* {Object.keys(repositoriesName).length < 1 ? 'Loading...' : (<RepoContainer repositoriesName={repositoriesName} totalRepositories={totalRepositories} sortOptions={sortOptions} />)} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repositories: state.repositories,
    totalRepositories: state.totalRepositories,
    sortOptions: state.sortOptions,
    username: state.username,
    repoName: state.repoName,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);

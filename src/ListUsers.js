import React, { Component } from 'react';

class ListUsers extends Component {
	
  render() {
    let { movies,
         profiles,
         users } = this.props;
    
    return(
      <div className="user-list">
      	{ profiles.map( profile => {
    		return (
	            <p key={ profile.id }>{`${ users[profile.userID].name } favorite movie is ${ movies[profile.favoriteMovieID].name }.`}</p>
            );
      	}) }
      </div>
    )
  }
}

export default ListUsers;
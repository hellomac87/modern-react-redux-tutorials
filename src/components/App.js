import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyD_ymZFHjd1-k11mirmA4dbR4G5HjDlvIU"; 

YTSearch({key: API_KEY, term: 'Sam Smith'}, function(data){
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        starter
      </div>
    );
  }
}

export default App;

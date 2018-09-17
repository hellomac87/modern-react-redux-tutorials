import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./video_list";

const API_KEY = "AIzaSyD_ymZFHjd1-k11mirmA4dbR4G5HjDlvIU"; 


// 유저가 새 검색어를 입력할 때마다, 새 검색 프로세스를 통해 스테이트의 검색 결과를 세팅해야 한다.

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'Sam Smith' }, (videos) => {
      this.setState({
        videos, // === videos: videos
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
        starter
      </div>
    );
  }
}

export default App;

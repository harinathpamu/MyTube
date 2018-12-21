import React, { Component } from 'react';
import Header from './Header'
import VideoList from '../components/VideoList.js'
import VideoDetail from '../components/VideoDetail.js'

import youtubeaxios from '../apis/youtubeapi.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:0
    };
    this.onSearchTermSubmit('One Strange Rock');
  }
 

  onVideoSelected = (selected_video) => {
      // console.log("Selected Video index: "+selected_video);
      this.setState({selectedVideo:selected_video})
  }

  onSearchTermSubmit =  (search_term) => {
    // console.log('Serch Term: ' + search_term);
    youtubeaxios.get('/search', {
      params: {
        q: search_term
      }
    }).then((response) => {
      this.setState({ videos: response.data.items })
      // console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container-fluid px-0 text-white h-100" style={{background:'rgb(40, 44, 52)'}}>
        <Header onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="mr-lg-5 ml-lg-5 m-2">
          <div className="row m-2 p-lg-3 p-md-3 ">
            <div className="col-sm col-lg-9 d-flex justify-content-center m-lg-0 m-md-0 mb-5">
              <VideoDetail selectedVideo={this.state.videos[this.state.selectedVideo]}/>
            </div>
            <div className="col-sm col-lg-3 m-lg-0 m-md-0 mt-5">
              <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

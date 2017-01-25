import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import jsonp from 'jsonp';
import YoutubeFinder from 'youtube-finder';

const GURL = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default class YoutubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText:'',
      dataSource:[]
    }

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleJsonp = this.handleJsonp.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);

    this.YoutubeClient = YoutubeFinder.createClient({key: this.props.apiKey});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Search on Youtube"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <AutoComplete
          hintText="Type anything"
          maxSearchResults={5}
          searchText={this.state.searchText}
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.onNewRequest}
        />
      </div>
    )
  }

  handleUpdateInput(searchText) {
    this.setState({searchText});

    if (searchText !== '') {
      jsonp(GURL + searchText, this.handleJsonp);
    }
  }

  onNewRequest(searchText) {
    this.setState({searchText:''});

    const params = {
      part: 'id, snippet',
      type: 'video',
      q: searchText,
      maxResults: 30
    }

    this.YoutubeClient.search(params, (error, result) => {
      if (error) return console.log(error);

      this.props.onResult(result.items);
    });
  }

  handleJsonp(err, data) {
    if (err) throw err;

    const dataSource = data[1].map(a => {
      return a[0];
    });

    this.setState({dataSource});
  }

}

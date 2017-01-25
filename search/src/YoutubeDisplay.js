import React, {Component} from 'react';
import List from 'material-ui/List/List';
import YoutubeItem from './YoutubeItem';


export default class YoutubeDisplay extends Component {

  render() {
    const items = this.props.items.map((item, index) => {
      const ytem = {
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnail: {
            height: item.snippet.thumbnails.default.height,
            width: item.snippet.thumbnails.default.width,
            url: item.snippet.thumbnails.default.url,
          }
      }

      return (
        <YoutubeItem key={index} item={ytem} />
      )
    });

    return (
      <List>
        <h3>Search Results</h3>
        <hr/>
        {items}
      </List>
    )
  }
}

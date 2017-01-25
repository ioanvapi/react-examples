import React, {Component} from 'react';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List/List';
import Avatar from 'material-ui/Avatar';

export default class YoutubeItem extends Component {

  render() {
    // console.log(this.props.item);
    const item = this.props.item;

    return (
      <div>
        <ListItem disabled='true'>
        <img src={item.thumbnail.url} />
        <List>
          <ListItem disabled='true'>{item.title}</ListItem>
          <ListItem disabled='true'>Published on {item.publishedAt}</ListItem>
          <ListItem disabled='true'>{item.description}</ListItem>
        </List>
      </ListItem>
      </div>
    )
  }
}

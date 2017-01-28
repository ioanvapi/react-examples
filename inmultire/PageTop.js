import React from 'react';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


//style={style} zDepth={1}

const PageTop = (props) => (
  <Paper style={props.style} zDepth={props.zDepth} >
    <Badge
      badgeContent={props.corecte}
      primary={true}
    >
      <IconButton tooltip="Corecte">
        <NotificationsIcon />
      </IconButton>
    </Badge>
    <Badge
      badgeContent={props.gresite}
      secondary={true}
    >
      <IconButton tooltip="Gresite">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  </Paper>
)

export default PageTop;

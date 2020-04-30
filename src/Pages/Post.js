import React, { Component } from 'react';
import Axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Post extends Component {
  state = {
    post: null,
    post_id: null,
  };

  componentDidMount() {
    // console.log(this.props);
    const { post_id } = this.props.match.params;
    Axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id).then(
      (res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
          post_id,
        });
      }
    );
  }

  render() {
    const { post } = this.state;
    if (post) {
      return (
        <Card style={{ margin: 50 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.id}. {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    } else {
      return <h1 style={{ margin: 70 }}>Loading....</h1>;
    }
  }
}

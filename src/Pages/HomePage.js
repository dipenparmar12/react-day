import React, { Component } from 'react';
import addColor from '../hoc/addColor';
import Axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    const { users } = this.state;
    const usersCards =
      users.length > 0 ? (
        users.map((user) => <Test user={user} key={user.id} />)
      ) : (
        <p>Loading....</p>
      );

    return (
      <div style={{ margin: 5 }}>
        <h1>Home</h1>
        <p>Random colored Home Text.(refresh page)</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexBasis: 'center',
            justifyContent: 'space-around',
            alignContent: 'flex-start',
          }}
        >
          {usersCards}
        </div>
      </div>
    );
  }
}
export default addColor(HomePage);

function Test(props) {
  return (
    <Card style={{ maxWidth: '300px', marginBottom: 15 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.user.company.catchPhrase}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging
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
}

// "user": {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }

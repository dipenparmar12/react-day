import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LoginControl from '../Practice/LoginControl';
import Toggle from '../Practice/Toggle';
import ConditionalRendering from '../Practice/ConditionalRendering';
import SmallMethods from '../Practice/SmallMethods';
import ClickTic from '../Practice/ClickTic';
import NameForm from '../Practice/NameForm';
import FormSelectElement from '../Practice/FormSelectElement';
import FormHandlingMultipleInputs from '../Practice/FormHandlingMultipleInputs';
import TempCalc from '../Practice/TempCalc';
import TicTacTokGame from '../Practice/TicTacTok/TicTacTokGame';
import Game from '../Practice/TicTacTok/Game';
import TodoApp from '../Practice/TodoApp/TodoApp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="LoginControll" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <FormSelectElement />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <NameForm />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ClickTic />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <SmallMethods />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <ConditionalRendering />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Toggle />
      </TabPanel>

      <TabPanel value={value} index={6}>
        <LoginControl />
      </TabPanel>
    </div>
  );
}

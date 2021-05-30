import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Syllabus from '../../../pages/inceptPage/Syllabus'

function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ScrollableTabsButtonAuto({userSyllabus}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          <Tab label="Semester One" {...a11yProps(0)} />
          <Tab label="Semester Two" {...a11yProps(1)} />
          <Tab label="Semester Three" {...a11yProps(2)} />
          <Tab label="Semester Four" {...a11yProps(3)} />
          <Tab label="Semester Five" {...a11yProps(4)} />
          <Tab label="Semester Six" {...a11yProps(5)} />
          <Tab label="Semester Seven" {...a11yProps(6)} />
          <Tab label="Semester Eight" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Syllabus semester={1} userSyllabus={userSyllabus}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Syllabus semester={2} userSyllabus={userSyllabus} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Syllabus semester={3} userSyllabus={userSyllabus}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Syllabus semester={4} userSyllabus={userSyllabus}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Syllabus semester={5} userSyllabus={userSyllabus}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Syllabus semester={6} userSyllabus={userSyllabus}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Syllabus semester={7} userSyllabus={userSyllabus} />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Syllabus semester={8} userSyllabus={userSyllabus}/>
      </TabPanel>
    </div>
  )
}

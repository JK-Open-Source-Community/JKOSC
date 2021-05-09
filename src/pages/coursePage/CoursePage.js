import React from 'react'
import ScrollableTabsButtonAuto from '../../Components/Navbar/StyledComponents/ScrollableTabsButtonAuto'
import './CoursePage.css'
const CoursePage = () => {
  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: `center`,
      //   alignItems: `center`,
      //   height: `90vh`,
      //   backgroundColor: `#f3eff5`,
      // }}
      className="container"
    >
      {/* <h1>Course Page</h1> */}
      <h1 id="syllabus">Syllabus</h1>
      <ScrollableTabsButtonAuto />
    </div>
  )
}

export default CoursePage

import React from 'react'

const Flex = ({children, className }) => {

// ekhane className props akare pass kortesi karon jekhane ami eta boshabo oikhane ami kaaj korate parbo 
//  amra className er shathe obbhosto tai common props akare pathay disi. tai items ar justify duita pathanor theke ekta classname pathay disi.
// Tai Navbar component e jegula properties use kortesi oigula shob ekhane flex er shathe attach hoye jacche   
  
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}

export default Flex

      import React from 'react';
      import ReactDOM from 'react-dom';
      import CommentDetail from './CommentDetail';
      import faker from '@faker-js/faker';
      import Approvalcard from './ApprovalCard';
// import SeasonDisplay from './SeasonDisplay';

      const App  =() =>{
        return(
          <div className="container">
              {/* <SeasonDisplay/> */}
          {/* <Approvalcard>
          <div>
            <h4>Warning!</h4>
            Are You Sure You Want to do this?
          </div>
          </Approvalcard> */}
            <Approvalcard>
              <CommentDetail author="Sam"  timeAgo="Today at 4:45PM" content="Nice blog Post" avatar={faker.image.avatar()}/>
            </Approvalcard>
            <Approvalcard>
              <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="I Like the subject" avatar={faker.image.avatar()}/>
            </Approvalcard>
            <Approvalcard>
              <CommentDetail author="Jane" timeAgo="Today at 2:45PM" content="I like Pic" avatar={faker.image.avatar()}/>
            </Approvalcard>
          </div>
          )
        }

        ReactDOM.render(<App/>, document.querySelector("#root"))
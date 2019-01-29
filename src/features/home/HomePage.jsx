import React from 'react';

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">MyEvents</div>
          </h1>
          <h2>Odkrywaj wydarzenia w swojej okolicy!</h2>
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            Start
            <i className="right arrow icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

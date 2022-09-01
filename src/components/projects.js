import React from 'react';

export default function Projects() {
  return (
    <div className='row'>
      <h1>Projects</h1>
      <div className="card col" style={{width: "18rem"}}>
        <img src="./imgs/textEditor.jpg" className="card-img-top" alt="textEditor"/>
        <div className="card-body">
          <h5 className="card-title">Text Editor</h5>
          <p className="card-text">Simple one page text editor using webpack and MongoDB.</p>
          <a href="https://github.com/Squid300/textEditor" className="btn btn-primary">Repository</a>
        </div>
      </div>

      <div className="card col" style={{width: "18rem"}}>
        <img src="./imgs/socialNetworkApi.jpg" className="card-img-top" alt="socialNetworkAPI"/>
        <div className="card-body">
          <h5 className="card-title">Social Network API</h5>
          <p className="card-text">Backend API for social network application using MongoDB.</p>
          <a href="https://github.com/Squid300/socialNetworkAPI" className="btn btn-primary">Repository</a>
        </div>
      </div>

      <div className="card col" style={{width: "18rem"}}>
        <img src="./imgs/weatherDashboard.jpg" className="card-img-top" alt="weatherDashboard"/>
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">Simple HTML website using openweather API.</p>
          <a href="https://github.com/Squid300/socialNetworkAPI" className="btn btn-primary">Repository</a>
        </div>
      </div>
    </div>
  );
}
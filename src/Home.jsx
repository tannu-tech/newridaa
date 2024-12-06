import React from "react";
import "./App.css";
function Home() {
  return (
    <div className="main-box1">
      <div className="main-box">
   <img src="logo.png" alt="" />
 <div className="home">
 <div className="item">🏠Dashbord </div>
 <div className="item">📚Course </div>
 <div className="item">🤦Quiz-test</div>
 <div className="item">👥Profile </div>
 </div>
    </div>
    <div className="mainbox2">
      <h2>Dashbord </h2>
      <div className="box">
      <div className="container">
      <div className="header">
        <div className="header-text">
          <h1 className="mainline">Welcome to Our App!<br />Join Now</h1>
        </div>
       <img src="2.png" alt="" />
      </div>
      <div className="boxes">
        <div className="box yellow">
          <h2 className="Progress">Progress</h2>
        </div>
        <div className="box green">
        <h2 className="Progress">Upcomng
        Course</h2>
        </div>
        <div className="box gray">
        <h2 className="Progress">Leavles</h2>
        </div>
      </div>
    </div>
      </div>
    </div>
</div>
  );
}
export default Home;
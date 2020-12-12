import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import budget from "../img/budget.png";
import fitness from "../img/fitness.png";
import notetaker from "../img/notetaker.png";
import password from "../img/notetaker.png";
import Weather from "../img/weather.png";
import Workday from "../img/workday.png";

const portfolio = () => {
  return (
    <div className="portfolioApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Portfolio</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Weather-Dashboard.git">
                </a>
                <img src={Weather} className="card-img-top"
                    alt="img-one"/>

                <p className="card-text">Weather Dashboard</p>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Weather-Dashboard.git">
                    https://github.com/simplyvpthar/Weather-Dashboard.git
                  </a>
                </p>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Work-Day-Scheduler.git">
                  <img
                    src={Workday}
                    className="card-img-top"
                    alt="img-two"
                  />
                </a>
                <p className="card-text">Work Day Scheduler</p>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Work-Day-Scheduler.git">
                    https://github.com/simplyvpthar/Work-Day-Scheduler.git
                  </a>
                </p>
              </div>
            </div>
            <br></br>
            <div className="gitProfile">
              <p>
                GitHub Profile:{" "}
                <a href="https://github.com/simplyvpthar">
                  https://github.com/simplyvpthar
                </a>{" "}
              </p>
              <p>
                Linkedin Profile:{" "}
                <a href="https://www.linkedin.com/in/vanh-tharavong-643a5397/">
                  https://www.linkedin.com/in/vanh-tharavong-643a5397/
                </a>
              </p>
              <p>Email Address: simplyvpthar@gmail.com</p>
              <p>Phone Number:817.948.5381</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default portfolio;

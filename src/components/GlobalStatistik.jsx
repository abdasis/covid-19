import React, { Component } from "react";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";
import Axios from "axios";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Terinfeksi", "Sembuh", "Meninggal"],
        datasets: [
          {
            data: [],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    };
  }

  componentDidMount() {
    Axios.get("https://covid19.mathdro.id/api").then(response => {
      console.log(response);
      this.setState({
        chartData: {
          datasets: [
            {
              data: [
                response.data.confirmed.value,
                response.data.recovered.value,
                response.data.deaths.value
              ]
            }
          ]
        }
      });

      console.log(this.state.chartData);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">Total Statis Seluruh Dunia</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <Pie data={this.state.chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Global;

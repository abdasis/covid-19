import React, { Component } from "react";
import Axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
class Statistik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terinfeksi: "",
      perawatan: "",
      sembuh: "",
      meninggal: "",
      updated: ""
    };
  }

  componentDidMount() {
    Axios.get("https://covid19.mathdro.id/api/countries/id/confirmed").then(
      response => {
        console.log(response.data);
        this.setState({
          terinfeksi: response.data[0].confirmed,
          perawatan: response.data[0].active,
          sembuh: response.data[0].recovered,
          meninggal: response.data[0].deaths,
          updated: response.data[0].lastUpdate.toLocal
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h3>
          Berikut Jumlah Kasus Covid-19 Terakhir update pada{" "}
          <span className="text-danger">
            <Moment>{this.state.updated}</Moment>
          </span>
        </h3>
        <div className="row mt-5">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>
                  {this.state.terinfeksi}{" "}
                  <sup style={{ fontSize: 20 }}>Jiwa</sup>
                </h3>
                <p>Terinfeksi</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="/#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>
                  {this.state.sembuh} <sup style={{ fontSize: 20 }}>Jiwa</sup>
                </h3>
                <p>Sembuh</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="/#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>
                  {this.state.perawatan}{" "}
                  <sup style={{ fontSize: 20 }}>Jiwa</sup>
                </h3>
                <p>Dirawat</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="/#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>
                  {this.state.meninggal}{" "}
                  <sup style={{ fontSize: 20 }}>Jiwa</sup>
                </h3>
                <p>Meninggal</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="/#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          {/* ./col */}
        </div>
      </div>
    );
  }
}

export default Statistik;

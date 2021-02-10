import ParisImage from "./../images/paris.jpg";
import NewYorkImage from "./../images/newyork.jpg";
import SanFranciscoImage from "./../images/sanfran.jpg";

const Tour = () => {
  return (
    <div id="tour" className="bg-1">
      <div className="container">
        <h3 className="text-center">TOUR DATES</h3>
        <p className="text-center">
          Lorem ipsum we'll play you some music.
          <br /> Remember to book your tickets!
          <br />
          <br />
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            September <span className="label label-danger">Sold Out!</span>
          </li>
          <li className="list-group-item">
            October <span className="label label-danger">Sold Out!</span>
          </li>
          <li className="list-group-item">
            November <span className="badge">3</span>
          </li>
        </ul>
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src={ParisImage} alt="Paris" width={400} height={300} />
              <p>
                <strong>Paris</strong>
              </p>
              <p>Friday 27 November 2015</p>
              <button
                className="btn"
                data-toggle="modal"
                data-target="#myModal"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src={NewYorkImage} alt="New York" width={400} height={300} />
              <p>
                <strong>New York</strong>
              </p>
              <p>Saturday 28 November 2015</p>
              <button
                className="btn"
                data-toggle="modal"
                data-target="#myModal"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img
                src={SanFranciscoImage}
                alt="San Francisco"
                width={400}
                height={300}
              />
              <p>
                <strong>San Francisco</strong>
              </p>
              <p>Sunday 29 November 2015</p>
              <button
                className="btn"
                data-toggle="modal"
                data-target="#myModal"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <h4>
                <span className="glyphicon glyphicon-lock" /> Tickets
              </h4>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <label htmlFor="psw">
                    <span className="glyphicon glyphicon-shopping-cart" />{" "}
                    Tickets, $23 per person
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="psw"
                    placeholder="How many?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usrname">
                    <span className="glyphicon glyphicon-user" /> Send To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usrname"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" className="btn btn-block">
                  Pay
                  <span className="glyphicon glyphicon-ok" />
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-danger btn-default pull-left"
                data-dismiss="modal"
              >
                <span className="glyphicon glyphicon-remove" /> Cancel
              </button>
              <p>
                Need <a href="#">help?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;

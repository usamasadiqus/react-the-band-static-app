const Contact = () => {
  return (
    <div id="contact" className="container">
      <h3 className="text-center">Contact</h3>
      <p className="text-center">
        <em>We love our fans!</em>
      </p>
      <div className="row">
        <div className="col-md-4">
          <p>Fan? Drop a note.</p>
          <p>
            <span className="glyphicon glyphicon-map-marker" />
            Chicago, US
          </p>
          <p>
            <span className="glyphicon glyphicon-phone" />
            Phone: +00 1515151515
          </p>
          <p>
            <span className="glyphicon glyphicon-envelope" />
            Email: mail@mail.com
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-sm-6 form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
          </div>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            placeholder="Comment"
            rows={5}
            defaultValue={""}
          />
          <br />
          <div className="row">
            <div className="col-md-12 form-group">
              <button className="btn pull-right" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-center">From The Blog</h3>
      <ul className="nav nav-tabs">
        <li className="active">
          <a data-toggle="tab" href="#home">
            Mike
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu1">
            Chandler
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#menu2">
            Peter
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
          <h2>Mike Ross, Manager</h2>
          <p>
            Man, we've been on the road for some time now. Looking forward to
            lorem ipsum.
          </p>
        </div>
        <div id="menu1" className="tab-pane fade">
          <h2>Chandler Bing, Guitarist</h2>
          <p>
            Always a pleasure people! Hope you enjoyed it as much as I did.
            Could I BE.. any more pleased?
          </p>
        </div>
        <div id="menu2" className="tab-pane fade">
          <h2>Peter Griffin, Bass player</h2>
          <p>
            I mean, sometimes I enjoy the show, but other times I enjoy other
            things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

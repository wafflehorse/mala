import React from 'react';

const Subscribe = () => {
  return (
    <div>
      <h2 className="text-center amiko mb-3">
        Learn more about Sichuan Cuisine
      </h2>
      <div className="subscribe-container position-relative">
        <div
          className="position-absolute absolute-centered w-75"
          style={{maxWidth: '1000px'}}>
          <h3 className="amiko white text-center">
            Curious about the 100+ kinds of chili in Sichuan?
            <br /> Subscribe to our monthly newsletter.
          </h3>
          <div className="input-group mb-3 w-75 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="email address"
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary subscribe-btn"
                type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

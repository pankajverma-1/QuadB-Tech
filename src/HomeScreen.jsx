import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        localStorage.setItem('data', JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center h1">QuadB Tech Assignment</div>
        <div className="row container my-5">
          {data.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xxl-3 my-2 "
              key={item.show.id}
            >
              <div className="card ms-auto me-auto" style={{ width: '18rem' }}>
                <img
                  src={item.show.image.original}
                  className="card-img-top"
                  alt={item.show.id}
                  style={{ height: '400px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.show.name}</h5>
                  <p
                    className="card-text"
                    style={{
                      maxWidth: '100%',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    dangerouslySetInnerHTML={{ __html: item.show.summary }}
                  />
                  <Link to={`/${item.show.id}`} className="btn btn-primary">
                    Summary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

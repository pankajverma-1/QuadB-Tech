import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Summery = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('data'));
    const byId = allData.filter((item) => parseInt(_id) === item.show.id);
    setData(byId);
  }, [_id]);

  return (
    <>
      <div className="text-center h1">Summary</div>
      <div className="row container mt-5 ms-auto me-auto">
        {data.map((item) => (
          <div className="card w-100" key={item.show.id}>
            <img
              src={item.show.image.original}
              className=" card-img"
              alt={item.show.id}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.show.name}</h5>
              <h5 className="card-title text-opacity-25">
                {item.show.language}
              </h5>
              <a
                href={item.show.url}
                className="h4 my-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: item.show.summary }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summery;

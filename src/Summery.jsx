import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Summery = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('data'));
    const byId = allData.filter((item) => parseInt(_id) === item.show.id);
    setData(byId);
    console.log(_id);
    return () => {};
  }, [_id]);

  return (
    <>
      <div className="text-center h1">Summary</div>
      <div className="row container mt-5 ms-auto me-auto">
        {data.map((item) => (
          <div class="card w-100">
            <img
              src={item.show.image.original}
              class=" card-img"
              alt={item.show.id}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
              }}
            />
            <div class="card-body">
              <h5 class="card-title">{item.show.name}</h5>
              <h5 class="card-title text-opacity-25">{item.show.language}</h5>
              <a
                href={item.show.url}
                className="h4 my-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              <p
                class="card-text"
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

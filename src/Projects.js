import React, { useEffect, useState } from 'react';  

const Projects = () => {   
  const [data, setData] = useState(null);  // Initialize data as null

  useEffect(() => {     
    fetch('http://3.14.82.234:5000/data')       
    .then(res => res.json())       
    .then(data => {
      setData(data.message);
    })
    .catch(error => console.error('Error fetching data:', error));  
  }, []);

  return (
    <div>
      {data && <p>{data}</p>}
    </div>
  );
};

export default Projects;
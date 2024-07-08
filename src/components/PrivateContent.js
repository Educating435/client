import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrivateContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/private-content', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContent(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>Paid Content</h1>
      {content ? <p>{content}</p> : <p>You need to log in to view this content.</p>}
    </div>
  );
};

export default PrivateContent;

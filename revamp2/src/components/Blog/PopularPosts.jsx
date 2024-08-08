import React, { useState } from 'react';
import '../../styles/popularposts.css';
import '../../styles/recentposts.css';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { stories } from '../../data/blogdata';

const PopularPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const popularStories = stories.filter(story => story.popular === true);
  // console.log("popular",popularStories);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStories = popularStories.slice(indexOfFirstItem, indexOfLastItem);

  const stripHtmlAndTruncate = (html, maxLength) => {
    let text = html.replace(/<[^>]+>/g, '');
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
    }
    return text;
  };
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <div style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div className="popular">
            <span>Popular Posts</span>
          </div>

          <div className='blogss' style={{ height: '100%' }}>
            {currentStories.map((story, index) => (
              <Link to={`/blog/${story.id}`} className='booxx' key={index}>
                <div style={{width:"100%",height:'40vh',display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{width:"100%",height:"100%",borderRadius:'10px'}}>
                  <img src={story?.image} alt='pic of blogs' style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:'1rem'}}/>
                </div>
                </div>
                <div className='autor'>{story.publisher} - {story.posteddate}</div>
                <div className='ins'>{stripHtmlAndTruncate(story.title, 30)}</div>
                <p className='inside'>{stripHtmlAndTruncate(story.intro, 150)}</p>
                <div className='bottom'>Read More...</div>
              </Link> 
            ))}
          </div>
        </div>
      </div>

      <div className='pagging'>
        <Pagination
          count={Math.ceil(popularStories.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape='circular'
          cursor='pointer'
        />
      </div>
    </div>
  );
};

export default PopularPosts;

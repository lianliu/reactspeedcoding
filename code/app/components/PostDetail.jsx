import React, { PropTypes } from 'react';
import PostData from '../content/PostData.js';
import ReactDisqusThread from 'react-disqus-thread';

function PostDetail({ posts, params }) {
  const gridClass = 'grid grid-gutters grid-full grid-flex-cells large-grid-fit';
  let renderContent = '';
  if (params.slug) {
    for (let i = 0; i < posts.length; ++i) {
      if (posts[i].slug === params.slug) {
        renderContent = (
          <div>
            <h1>{posts[i].title}</h1>
            <div className={gridClass}>
              <div className="media grid-cell">
                {posts[i].image
                  ? <img
                    className="media-figure image"
                    src={posts[i].image}
                    alt={posts[i].title}
                  />
                  : ''
                }
                <div className="media-body">
                  <p>{posts[i].content.start}</p>
                  <p>{posts[i].content.middle}</p>
                  <p>{posts[i].content.end}</p>
                </div>
                <ReactDisqusThread
                  shortname="reactspeed"
                  identifier={posts[i].slug}
                  title={posts[i].title}
                  url={`https://reactspeed.com/blog/${posts[i].slug}`}
                />
              </div>
            </div>
          </div>
        );
        break;
      } else {
        const lastPost = posts.length - 1;
        renderContent = (
          <div>
            <h1>Oops! We could not find that...</h1>
            <h2>
              Here is the latest post from our blog.
              Please use top menu to navigate elsewhere.
            </h2>
            <div className={gridClass}>
              <div className="media grid-cell">
                {posts[lastPost].image
                  ? <img
                    className="media-figure image"
                    src={posts[lastPost].image}
                    alt={posts[lastPost].title}
                  />
                  : ''
                }
                <h1>{posts[lastPost].title}</h1>
                <div className="media-body">
                  <p>{posts[lastPost].content.start}</p>
                  <p>{posts[lastPost].content.middle}</p>
                  <p>{posts[lastPost].content.end}</p>
                </div>
                <ReactDisqusThread
                  shortname="reactspeed"
                  identifier={posts[lastPost].slug}
                  title={posts[lastPost].title}
                  url={`https://reactspeed.com/blog/${posts[lastPost].slug}`}
                />
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return (renderContent);
}
PostDetail.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.object
};
PostDetail.defaultProps = {
  posts: PostData
};

export default PostDetail;
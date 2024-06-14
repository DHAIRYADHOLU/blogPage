import React, { useState } from 'react';
import '../App.css';

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState({
    post1: true,
    post2: true,
    post3: true,
  });

  const toggleVisibility = (post) => {
    setVisiblePosts(prevState => ({
      ...prevState,
      [post]: !prevState[post],
    }));
  };

  return (
    <div className="content">
      <div className="blog-post">
        <button onClick={() => toggleVisibility('post1')}>
          {visiblePosts.post1 ? 'Hide' : 'Show'} Post 1
        </button>
        {visiblePosts.post1 && (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="blog-image"
            />
            <div className="blog-text">
              <h2>Understanding React: A Modern Library for Building User Interfaces</h2>
              <p className="blog-meta">By John Doe | Jan 1, 2024</p>
              <p>
                React is a popular JavaScript library for building user interfaces, which optimizes updates and improves performance. Instead of updating the whole page when a change occurs, React updates only the parts of the page that have changed. This makes React applications faster and more efficient. JSX, a syntax extension for JavaScript, is used in React to describe what the UI should look like. JSX allows you to write HTML elements in JavaScript, which makes the code easier to understand and maintain.
              </p>
              <p>React also promotes the use of functional programming principles.</p>
            </div>
          </>
        )}
      </div>
      <div className="blog-post">
        <button onClick={() => toggleVisibility('post2')}>
          {visiblePosts.post2 ? 'Hide' : 'Show'} Post 2
        </button>
        {visiblePosts.post2 && (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IRBOR_RPA.png/640px-IRBOR_RPA.png"
              alt="IoT"
              className="blog-image"
            />
            <div className="blog-text">
              <h2>The Rise of IoT: Transforming Connectivity</h2>
              <p className="blog-meta">By Jane Smith | Feb 15, 2024</p>
              <p>
                The Internet of Things (IoT) connects devices, allowing seamless data exchange. Smart homes, wearables, and industrial automation are revolutionized.
              </p>
              <p>
                IoT impacts daily life by enhancing convenience. Smart thermostats, lighting, and security systems make homes more efficient and secure.
              </p>
              <p>
                Industries benefit  Predictive maintenance and real-time monitoring optimize operations and productivity.
              </p>
            </div>
          </>
        )}
      </div>
      <div className="blog-post">
        <button onClick={() => toggleVisibility('post3')}>
          {visiblePosts.post3 ? 'Hide' : 'Show'} Post 3
        </button>
        {visiblePosts.post3 && (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript"
              className="blog-image"
            />
            <div className="blog-text">
              <h2>JavaScript: The Language of the Web</h2>
              <p className="blog-meta">By Alex Brown | Mar 10, 2024</p>
              <p>
                JavaScript is a versatile programming language essential for web development. It enables interactive, dynamic websites, enhancing user experience significantly.
              </p>
              <p>
                Used for both client-side and server-side development, JavaScript supports various frameworks like React, Angular, and Node.js. These enhance functionality.
              </p>
              <p>
                With a vast community and rich ecosystem, JavaScript continuously evolves. Its flexibility and widespread use make it indispensable in modern web development.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;

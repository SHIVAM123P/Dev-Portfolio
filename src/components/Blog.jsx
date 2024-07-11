import React, { useState } from 'react';
import Modal from 'react-modal';

const Blog = ({ darkMode }) => { // Receive darkMode prop
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "My Journey with React",
      date: "July 1, 2024",
      content: "I started learning React two years ago and it has been a fantastic journey...",
    },
    {
      id: 2,
      title: "Understanding the MERN Stack",
      date: "June 20, 2024",
      content: "The MERN stack consists of MongoDB, Express, React, and Node.js...",
    },
    // Add more blog posts here
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalIsOpen(false);
  };

  return (
    <section id="blog" className={`py-10 ${darkMode ? 'bg-dark-200' : 'bg-white'}`}> {/* Adjust background based on darkMode */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-10 ${darkMode ? 'text-white' : 'text-black'}`}>Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className={`bg-dark dark:bg-dark-200 p-6 rounded-lg shadow-lg ${darkMode ? 'text-white' : 'text-black'}`}>
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className={`text-white-500 mb-4 ${darkMode ? 'text-white' : 'text-gray-500'}`}>{post.date}</p>
              <p className={`text-white-700 dark:text-white-300 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                {post.content.substring(0, 100)}... {/* Show first 100 characters */}
                <button 
                  className={`text-white text-primary ml-2 ${darkMode ? 'dark:text-white' : 'text-primary'}`} 
                  onClick={() => openModal(post)}
                >
                  Show More
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="Blog Post Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedPost && (
          <div className={`bg-white dark:bg-dark-200 p-8 rounded-lg max-w-lg mx-auto ${darkMode ? 'text-black' : 'text-white'}`}>
            <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
            <p className={`text-gray-500 mb-4 ${darkMode ? 'text-gray-500' : 'text-white'}`}>{selectedPost.date}</p>
            <p className={`text-gray-700 dark:text-gray-300 ${darkMode ? 'text-gray-700' : 'text-white'}`}>{selectedPost.content}</p>
            <button 
              className={`mt-4 px-4 py-2 ${darkMode ? 'bg-primary text-white' : 'bg-white text-primary'} rounded`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Blog;

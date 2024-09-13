import React, { useState, useEffect } from "react";
import './NewsApi.css';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cachedData = localStorage.getItem('newsData');
        const cacheExpiration = localStorage.getItem('newsCacheExpiration');
        const currentTime = new Date().getTime();

        if (cachedData && cacheExpiration > currentTime) {
            // Use cached data if it's still valid
            setPosts(JSON.parse(cachedData));
            setLoading(false);
        } else {
            // Fetch new data if cache is expired or doesn't exist
            fetchNews();
        }
    }, []);

    const fetchNews = () => {
        const url = 'https://newsdata.io/api/1/latest?apikey=';
        const apiKey = 'pub_5208327371912ac351848546d80ea400bec6b&country=br&category=environment';

        fetch(url + apiKey)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', data);
                if (Array.isArray(data.results)) {
                    setPosts(data.results);
                    localStorage.setItem('newsData', JSON.stringify(data.results));

                    // Set cache expiration for 1 hour (3600000 ms)
                    const expirationTime = new Date().getTime() + 3600000;
                    localStorage.setItem('newsCacheExpiration', expirationTime);
                } else {
                    console.error('Expected an array for results but got:', data.results);
                    setError(new Error('Unexpected data format'));
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="parceiros-div">
            <div className='parceiros-top'>
                <div className='parceiros-horizontal-line'></div>
                <div className='parceiros-title'>
                    <h1>Para se informar</h1>
                </div>
            </div>
            {Array.isArray(posts) ? (
                <ul className="news-div">
                    {posts.map((post, index) => (
                        <li key={index} className="news-item">
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="news-link">
                                {post.image_url && (
                                    <img src={post.image_url} alt={post.title} className="news-image" />
                                )}
                                <p>{post.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Error: Posts data is not an array</div>
            )}
            <div className="news-bottom-line"></div>
        </div>
    );
}

export default PostList;

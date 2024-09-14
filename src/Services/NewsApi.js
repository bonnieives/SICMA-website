import React, { useState, useEffect } from "react";
import './NewsApi.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles

function PostList(props) {
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="custom-arrow right-arrow" onClick={onClick}>
                &#10095; {/* Right arrow symbol */}
            </button>
        );
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button className="custom-arrow left-arrow" onClick={onClick}>
                &#10094; {/* Left arrow symbol */}
            </button>
        );
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
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile"}
                    autoPlaySpeed={5000}
                    customTransition="transform 0.5s ease-in-out"
                    transitionDuration={500}
                    centerMode={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                >
                    {posts.map((post, index) => (
                        <div key={index} className="news-item"> {/* Each post is a separate carousel item */}
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="news-link">
                                {post.image_url && (
                                    <img src={post.image_url} alt={post.title} className="news-image" />
                                )}
                                <p>{post.title}</p>
                            </a>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div>Error: Posts data is not an array</div>
            )}

            <div className="news-bottom-line"></div>
        </div>
    );
}

export default PostList;

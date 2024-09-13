import React from 'react';
import './Parceiros.css';
import ParceirosCard from './ParceirosCard';
import SessionTitle from './SessionTitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles

function Parceiros(props) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
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
                &#10094; {/* Right arrow symbol */}
            </button>
        );
    };

    return (
        <div className='parceiros-div'>
            <SessionTitle title='Nossos Parceiros' />
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
                <ParceirosCard
                    image="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                    title="The Method of Trusted Software"
                />
                <ParceirosCard
                    image="https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                    title="The Compression of Universal Perception"
                />
                <ParceirosCard
                    image="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                    title="The Capability of Adaptative Level"
                />
                <ParceirosCard
                    image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                    title="The Innovation of Vital Deception"
                />
                <ParceirosCard
                    image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                    title="The Source of Present Software"
                />
                <ParceirosCard
                    image="https://images.unsplash.com/photo-1441109296207-fd911f7cd5e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                    title="The Emergency of Interchangeable Agenda"
                />
            </Carousel>
        </div>
    );
}

export default Parceiros;

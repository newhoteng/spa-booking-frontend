import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImTwitter, ImFacebook } from 'react-icons/im';
import { TiSocialInstagram } from 'react-icons/ti';
import { fetchAllServices } from '../redux/serviceSlice';
import DottedHr from './DottedHr';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SliderNextButton from './sliders/SliderNextButton';
import SliderPrevButton from './sliders/SliderPrevButton';

const HomePage = () => {
  const { services, isLoading, isError } = useSelector((store) => store.services);
  const dispatch = useDispatch();

  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(1);
    } else if (window.innerWidth >= 640 && window.innerWidth === 768) {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);

  const filtered = services.filter((service) => service.is_removed === false);

  return (
    <main className="main-home">
      <h1>SPA SERVICES</h1>
      <p className="p-font">Please select a service or two!</p>
      <DottedHr />
      {!isLoading && services.length === 0 && (
        <p className="home-font">
          No available service. Please add a service to view.
        </p>
      )}
      {isError && <h1>Something went wrong please reload the page...</h1>}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="service-main">
          {/* <p className="p-font">Please select a service or two!</p> */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            className="mySwiper"
          >
            {filtered.map((service) => (
              <SwiperSlide key={service.id} className="swiperSlide">
                <Link to={`/services/${service.id}`} className="services">
                  <div className="image">
                    <img src={service.image} alt="service" className="image" />
                  </div>
                  <h2 className="title-font">
                    {service.name.toUpperCase()}
                  </h2>
                </Link>
                <DottedHr />
                <p className="desc-font">
                  {service.description}
                </p>
                <div className="icons">
                  <div className="social-circle"><ImFacebook /></div>
                  <div className="social-circle"><ImTwitter /></div>
                  <div className="social-circle"><TiSocialInstagram /></div>
                </div>
              </SwiperSlide>
            ))}
            <SliderPrevButton />
            <SliderNextButton />
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default HomePage;

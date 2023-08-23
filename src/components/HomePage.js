import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { fetchAllServices } from '../redux/serviceSlice';
// import facials from '../styles/facials.jpg';
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

  return (
    <main className="main-home">
      <h1>Spa Services</h1>
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
          <p className="p-font">Please select a service or two!</p>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="swiperSlide">
                <Link to={service} className="services">
                  <div className="image">
                    <img src={service.image} alt="service" className="image" />
                  </div>
                  <h2 className="header-font">
                    {service.name.charAt(0).toUpperCase()
                      + service.name.slice(1)}
                  </h2>
                </Link>
                <p className="p-font">
                  {service.description.substring(0, 20)}
                  ...
                </p>
                <div className="icons">
                  <CiFacebook />
                  <CiTwitter />
                  <CiInstagram />
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

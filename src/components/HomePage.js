import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImTwitter, ImFacebook } from 'react-icons/im';
import { TiSocialInstagram } from 'react-icons/ti';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Navigation } from 'swiper/modules';
import { fetchAllServices } from '../redux/serviceSlice';
import DottedHr from './DottedHr';
import 'swiper/css';
import useWindowSize from './useWindowsize'; // Import the custom hook

const HomePage = () => {
  const { services, isLoading, isError } = useSelector((store) => store.services);
  const dispatch = useDispatch();

  const slidesPerView = useWindowSize(); // Use the custom hook for slidesPerView

  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);

  const filtered = services.filter((service) => service.is_removed === false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="main-home">
      <h1>SPA SERVICES</h1>
      <p className="p-font">Please select a service or two!</p>
      <DottedHr />
      {!isLoading && filtered.length === 0 && (
        <p className="home-font">
          No available service. Please add a service to view.
        </p>
      )}
      {isError && <h1>Something went wrong, please reload the page...</h1>}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="service-main">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={60}
            className="mySwiper"
            modules={[Navigation]}
            /* eslint no-param-reassign: "error" */
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
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
            <button
              type="button"
              ref={prevRef}
              className="swiper-btn-prev"
            >
              <BiLeftArrow />
            </button>
            <button
              type="button"
              ref={nextRef}
              className="swiper-btn-next"
            >
              <BiRightArrow />
            </button>
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default HomePage;

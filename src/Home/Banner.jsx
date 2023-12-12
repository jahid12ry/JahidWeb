
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
             
            <Swiper

                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='opacity-50 absolute' src="https://i.ibb.co/7Y3PYWg/icons8-team-m0o-STE-Mjs-I-unsplash.jpg" alt="" />
                    <h1 className='relative top-40 left-[600px] text-4xl font-extrabold text-white'>This is <span className='text-red-700'>Jahid </span> Hassan</h1></SwiperSlide>
                <SwiperSlide><img className=' opacity-70' src="https://i.ibb.co/GvstX9f/pexels-christina-morillo-1181325.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide><img className=' opacity-70' src="https://i.ibb.co/cYXnhms/pexels-christina-morillo-1181359.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide><img className=' opacity-70' src="https://i.ibb.co/vD4z11p/pexels-cottonbro-studio-5474295.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide><img className=' opacity-70' src="https://i.ibb.co/C2kTq0S/pexels-kevin-ku-577585.jpg" alt="" />

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;
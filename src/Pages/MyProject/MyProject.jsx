import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const MyProject = () => {
    return (
        <div>
            <div className="text-center text-4xl font-bold text-white underline mb-12">
                <h1>My Projects</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='w-96 ml-20'>
                     
                    <div className='bg-purple-900 w-64 h-72 rounded-box p-8'>
                        <div className='hero h-44 opacity-50'style={{backgroundImage: 'url(https://i.ibb.co/VvHdjWc/logo-no-background.png) '}}>
                        <Link to='https://pet-adoption-9040a.web.app/'><button className='btn btn-secondary mt-[180px] text-xl hover:bg-yellow-500'>Link</button></Link>

                        </div>
                        
                    </div>

                </SwiperSlide>
                <SwiperSlide className='w-96'>
                <div className='bg-purple-900 w-64 h-72 rounded-box p-8'>
                        <div className='hero h-44  opacity-50'style={{backgroundImage: 'url(https://i.ibb.co/zSPcHSn/logo-no-background.png) '}}>
                        <Link to='https://library-ff594.web.app/'><button className='btn btn-secondary mt-[180px] text-xl hover:bg-yellow-500'>Link</button></Link>

                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-96'>
                <div className='bg-purple-900 w-64 h-72 rounded-box p-8'>
                        <div className='hero h-44 opacity-50'style={{backgroundImage: 'url(https://i.ibb.co/xH7t5PQ/logo-no-background-1.png) '}}>
                       <Link to='https://bmw-band.web.app/'> <button className='btn btn-secondary mt-[180px] text-xl hover:bg-yellow-500'>Link</button></Link>

                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-96'>
                <div className='bg-purple-900 w-64 h-72 rounded-box p-8'>
                        <div className='hero h-44 opacity-50'style={{backgroundImage: 'url(https://i.ibb.co/H2rMT4R/balloons-2917051.png) '}}>
                       <Link to='https://event-management-6f19d.web.app/'> <button className='btn btn-secondary mt-[180px] text-xl hover:bg-yellow-500'>Link</button></Link>

                        </div>
                        
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default MyProject;
import React from 'react';
import '../Home/Home.css';
import service1 from '../../images/services/service1.jpg';
import service2 from '../../images/services/service2.jpg';
import service3 from '../../images/services/service3.jpg';
import service4 from '../../images/services/service4.jpg';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           
            <Slider></Slider>
            <div className="services-area mt-4">
                <h1>OUR SERVICES</h1>
                <p className='underline underline-green-4'>Our services & offers</p>
              <div className="services flex justify-center mt-4 mb-4">
                    <div className="service p-2 m-4">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={service1} alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                    
                        </div>
                    </div>
                    <div className="service p-2 m-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={service2} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="service p-2 m-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={service3} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className="service p-2 m-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={service4} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    </div>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import ToyCollections from '../ToyCollections/ToyCollections';

const Home = () => {
    return (
        <div>
            <div className="carousel rounded-2xl mt-10 h-[500px] w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rcms5hB/onep1.jpg" className="w-full" />
                    
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400">
                </div>
                    <div className="absolute text-white flex items-center flex-col ml-10 left-10 top-10 bottom-0 gap-5 ">
                        <div className="space-y-5 mr-10 w-96">
                            <h1 className="text-black text-2xl md:text-6xl font-bold">
                                Best Quality Anime Action Figure
                            </h1>
                            <p className='text-gray-700 font-bold'>There are deferent type of anime action figure or toys are available at vary cheep prise.</p>
                        </div>
                        <div className=" flex gap-5">
                            <Link to="/alltoys" className="btn btn-warning text-white">Explore All Toys</Link>
                            
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2yP9jbN/gokubanner1.jpg" className="w-full" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col ml-10 left-10 top-10 bottom-0 gap-5 ">
                        <div className="space-y-5 mr-10 w-96">
                            <h1 className="text-black text-2xl md:text-6xl font-bold">
                                Best Quality Anime Action Figure
                            </h1>
                            <p className='text-gray-700 font-bold'>There are deferent type of anime action figure or toys are available at vary cheep prise. </p>
                        </div>
                        <div className=" flex gap-5">
                            <Link to="/alltoys" className="btn btn-warning text-white">Explore All Toys</Link>
                            
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2797YQR/gokubanner2.jpg" className="w-full" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col ml-10 left-10 top-10 bottom-0 gap-5 ">
                        <div className="space-y-5 mr-10 w-96">
                            <h1 className="text-black text-2xl md:text-6xl font-bold">
                                Best Quality Anime Action Figure
                            </h1>
                            <p className='text-gray-700 font-bold'>There are deferent type of anime action figure or toys are available at vary cheep prise.t </p>
                        </div>
                        <div className=" flex gap-5">
                            <Link to="/alltoys" className="btn btn-warning text-white">Explore All Toys</Link>
                            
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Y3Pf5hb/narutobanner1.jpg" className="w-full" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col ml-10 left-10 top-10 bottom-0 gap-5 ">
                        <div className="space-y-5 mr-10 w-96">
                            <h1 className="text-black text-2xl md:text-6xl font-bold">
                                Best Quality Anime Action Figure
                            </h1>
                            <p className='text-gray-700 font-bold'>There are deferent type of anime action figure or toys are available at vary cheep prise.t </p>
                        </div>
                        <div className=" flex gap-5">
                            <Link to="/alltoys" className="btn btn-warning  text-white">Explore All Toys</Link>
                            
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <ToyCollections></ToyCollections>
        </div>
    );
};

export default Home;
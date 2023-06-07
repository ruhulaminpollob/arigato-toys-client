import React, { useContext } from 'react';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Gallery from '../Gallery/Gallery';
import ToyCollections from '../ToyCollections/ToyCollections';

const Home = () => {
    const {loading}=useContext(AuthContext)
    if (loading) {
        return
    }
    const loadedToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadedToys)
    return (
        <div>
            <div className="carousel rounded-2xl mt-10 h-[500px] w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rcms5hB/onep1.jpg" className="w-full object-cover" />

                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400">
                    </div>
                    <div className="absolute text-white flex items-center flex-col md:ml-10 md:left-10 p-5 top-32 md:top-10 md:bottom-0 gap-5 -0 gap-5 ">
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
                    <div className="absolute flex justify-between transform  -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn border-none text-cyan-400 bg-transparent">❮</a>
                        <a href="#slide2" className="btn border-none text-cyan-400 bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2797YQR/gokubanner2.jpg" className="w-full object-cover" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col md:ml-10 md:left-10 p-5 top-32 md:top-10 md:bottom-0 gap-5  ">
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
                        <a href="#slide1" className="btn border-none text-cyan-400 bg-transparent ">❮</a>
                        <a href="#slide3" className="btn border-none text-cyan-400 bg-transparent ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2797YQR/gokubanner2.jpg" className="w-full object-cover" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col md:ml-10 md:left-10 p-5 top-32 md:top-10 md:bottom-0 gap-5  ">
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
                        <a href="#slide2" className="btn border-none text-cyan-400 bg-transparent ">❮</a>
                        <a href="#slide4" className="btn border-none text-cyan-400 bg-transparent ">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Y3Pf5hb/narutobanner1.jpg" className="w-full object-cover" />
                    <div className=" w-full h-[500px] absolute bg-gradient-to-r from-gray-400"></div>
                    <div className="absolute text-white flex items-center flex-col md:ml-10 md:left-10 p-5 top-32 md:top-10 md:bottom-0 gap-5  ">
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
                        <a href="#slide3" className="btn border-none text-cyan-400 bg-transparent ">❮</a>
                        <a href="#slide1" className="btn border-none text-cyan-400 bg-transparent ">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl py-5 mt-10 font-bold underline pl-5">Most Beloved Toys</h1>
                <Marquee className=' flex items-center justify-center bg-cyan-400 py-10 rounded'>
                    {
                        allToys.map(singleToy => <Gallery key={singleToy._id} singleToy={singleToy}></Gallery>)
                    }
                </Marquee>


            </div>
            {/* <Gallery></Gallery> */}
            <ToyCollections></ToyCollections>
        </div>
    );
};

export default Home;
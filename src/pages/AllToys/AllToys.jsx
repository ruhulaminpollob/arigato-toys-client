import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const loadedAllToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadedAllToys)

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    console.log(document.title);
    //
    const handleSearchChange = (event) => {

        const query = event.target.value;
        setSearchQuery(query);
        if (query.length >2) {
            
            const filtered = allToys.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(filtered);
        }


    };




    return (

        <div>
            <div className='bg-cyan-50 py-10 rounded md:flex  justify-around'>

                <div className=' text-2xl text-center mb-5 md:mb-0 md:text-4xl font-bold'>
                    <h1>Let's Rook n Roll</h1>
                </div>

                <div className="flex items-center justify-center">
                    <input
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        // placeholder="Find Your Desire Toys"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Search
                    </button>
                </div>
            </div>
            {
                filteredResults?.length && <>
                    <div className='bg-indigo-50 p-3 md:p-10 rounded-xl mt-10'>
                        <div>
                            <h1 className='text-2xl font-bold p-3 underline'>Search Results</h1>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5  md:gap-10 '>
                            {
                                filteredResults.map(singleToy => <AllToysCard key={singleToy._id} singleToy={singleToy}></AllToysCard>)
                            }
                        </div>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold p-3 mt-5 underline'>Explore More</h1>
                    </div>
                </>
            }

            <div className='grid md:grid-cols-2 gap-5 bg-indigo-50 p-3 md:p-10 rounded-xl md:gap-10 mt-10'>


                {
                    allToys.map(singleToy => <AllToysCard key={singleToy._id} singleToy={singleToy}></AllToysCard>)
                }


            </div>
        </div>
    );
};

export default AllToys;
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const loadedAllToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadedAllToys)

    return (
        <div className='grid md:grid-cols-2 gap-5 bg-indigo-50 p-3 md:p-10 rounded-xl md:gap-10 mt-10'>

           
            {
                allToys.map(singleToy=><AllToysCard key={singleToy._id} singleToy={singleToy}></AllToysCard>)
            }

            
        </div>
    );
};

export default AllToys;
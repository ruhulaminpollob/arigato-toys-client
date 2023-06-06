import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import ToyCollectionsCard from './ToyCollectionsCard';

const ToyCollections = () => {
    // const { user } = useContext(AuthContext)
    const [toys, setToys]=useState([])
    const [active, setActive] = useState('Naruto')

    useEffect(()=>{
        fetch(`https://arigatou-toys-server.vercel.app/category/${active}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[active])

    const handleTabClick = tabName => {
        setActive(tabName)
    }
    return (
        <div className='mt-10 md:mt-20'>
            <h1 className='text-center text-4xl font-bold text-cyan-400 underline my-10'>New Toy Collections</h1>
            <div className="tabs w-fit mx-auto">
                <a onClick={() => { handleTabClick('Naruto') }} className={`tab tab-lifted font-bold ${active == 'Naruto' ? "tab-active text-cyan-400" : 'text-yellow-400'}`}>Naruto</a>

                <a onClick={() => { handleTabClick('DragonBallZ') }} className={`tab tab-lifted font-bold  ${active == 'DragonBallZ' ? "tab-active text-cyan-400" : 'text-yellow-400'}`}>Dragon Ball Z</a>
                <a onClick={() => { handleTabClick('OnePiece') }} className={`tab tab-lifted font-bold  ${active == 'OnePiece' ? "tab-active text-cyan-400" : 'text-yellow-400'} `}>One piece</a>
            </div>
            <div className='grid md:grid-cols-2 gap-5 bg-indigo-50 p-3 md:p-10 rounded-xl md:gap-10 mt-10'>
                {
                    toys.map(singleToy=><ToyCollectionsCard key={singleToy._id} singleToy={singleToy}></ToyCollectionsCard>)
                }

            </div>
        </div>
    );
};

export default ToyCollections;
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const ToyCollections = () => {
    const { user } = useContext(AuthContext)
    const [active, setActive] = useState('naruto')

    const handleTabClick = tabName => {
        console.log('hola');
        setActive(tabName)
    }
    return (
        <div className='mt-10 md:mt-20'>
            <h1 className='text-center text-4xl font-bold text-cyan-400 underline my-10'>New Toy Collections</h1>
            <div className="tabs w-fit mx-auto">
                <a onClick={() => { handleTabClick('naruto') }} className={`tab tab-lifted font-bold text-yellow-400 ${active == 'naruto' ? "tab-active" : ''}`}>Naruto</a>

                <a onClick={() => { handleTabClick('dragonbassz') }} className={`tab tab-lifted font-bold text-yellow-400  ${active == 'dragonbassz' ? "tab-active" : ''}`}>Dragon Ball Z</a>
                <a onClick={() => { handleTabClick('onepiece') }} className={`tab tab-lifted font-bold text-yellow-400 ${active == 'onepiece' ? "tab-active" : ''} `}>One piece</a>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ToyCollections;
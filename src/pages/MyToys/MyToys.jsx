import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import MyToysCards from './MyToysCards';

const MyToys = () => {

    const { user, loading } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const [deleteClick, setDeleteClick] = useState(true)

    if (loading) {
        return <Loading></Loading>
    }
    useEffect(() => {
        fetch(`https://arigatou-toys-server.vercel.app/mytoys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })

    }, [deleteClick])

    // console.log(myToys);

    const sortByPrice =  () => {
        const sortedToys = [...myToys].sort((a, b) => a.price - b.price);
        setMyToys(sortedToys);
        // console.log(sortedToys);
    };

    return (
        <div className=''>
            <div className='p-5 bg-yellow-200 rounded'>
                <button onClick={sortByPrice} className=' btn btn-info text-white'>Sort by Price</button>
            </div>
            {
                myToys.map(singleToy => <MyToysCards key={singleToy._id} singleToy={singleToy} deleteClick={deleteClick} setDeleteClick={setDeleteClick} />)
            }
        </div>
    );
};

export default MyToys;
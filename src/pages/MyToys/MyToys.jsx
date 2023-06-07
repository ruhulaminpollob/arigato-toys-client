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

    const sortByPriceAscending = () => {
        const sortedToys = [...myToys].sort((a, b) => a.price - b.price);
        setMyToys(sortedToys);
        // console.log(sortedToys);
    };

    const sortByPriceDescending = () => {
        const sortedToys = [...myToys].sort((b, a) => a.price - b.price);
        setMyToys(sortedToys);
    };

    return (
        <div className=''>


            <div className='p-5 bg-yellow-200 rounded'>
                <details className="dropdown">
                    <summary className="m-1 btn">Sort by price</summary>
                    <ul className="p-2 z-10 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li ><a onClick={sortByPriceAscending}>Ascending</a></li>
                        <li><a onClick={sortByPriceDescending}>Descending</a></li>
                    </ul>
                </details>

                <h1></h1>
                
            </div>
            {
                myToys.map(singleToy => <MyToysCards key={singleToy._id} singleToy={singleToy} deleteClick={deleteClick} setDeleteClick={setDeleteClick} />)
            }
        </div>
    );
};

export default MyToys;
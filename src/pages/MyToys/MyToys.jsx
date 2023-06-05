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


    if (loading) {
        return <Loading></Loading>
    }
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys?email${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })

    }, [])
    return (
        <div className=''>
            {
                myToys.map(singleToy=><MyToysCards key={singleToy._id} singleToy={singleToy} />)
            }
        </div>
    );
};

export default MyToys;
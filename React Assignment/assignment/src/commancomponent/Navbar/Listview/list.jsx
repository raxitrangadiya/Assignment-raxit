import React from 'react';
import { data } from './data.js'
let ListData = data.map((anything, index) => {
    // console.log(anything.name);
    return <li key={index}>
        <div className='place-img'><img src={anything.Iamgeid} alt="" /></div>
        <p><b>{anything.name}</b>&nbsp;is place in {anything.place} this place is {anything.type}
            .  </p>
    </li>
})
const list = () => {
    return (

        <>

                    <ul className='place-pages'>
                        {ListData}
                    </ul>
        </>
    );
};

export default list;
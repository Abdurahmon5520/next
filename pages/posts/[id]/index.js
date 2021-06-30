import React from 'react';
import { useRouter } from 'next/dist/client/router';
const index = () => {

    const router = useRouter();

    console.log(router);
    
    return (
        <div style={{backgroundColor: 'yellow'}}>
            Dynamic Posts
            <p>{router.query.id}</p>
        </div>
    );
};

export default index;
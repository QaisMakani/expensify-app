import React from 'react';
import {Link} from 'react-router-dom';

//Link is provided by react-router to provide client side routing (disables full refresh and provides some other features)
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;
import React from 'react';

const Link = (props) => {
const {name,link}=props.route;

     return (
        <div>
             <li><a href="">{name}</a></li>
        </div>
    );
};

export default Link;
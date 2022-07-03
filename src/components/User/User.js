import React from 'react';
import css from './Style.css'

function User({user}) {
    return (
        <div className={'element'}>
            <img src={user.avatar}/>
            <div className={'info'}>
                <div><b>ID</b>: {user.id}</div>
                <div><b>Email</b>: {user.email}</div>
                <div><b>First Name</b>: {user.first_name}</div>
                <div><b>Last Name</b>: {user.last_name}</div>
            </div>
        </div>
    );
}

export {User};
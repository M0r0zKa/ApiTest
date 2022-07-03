import React, {useEffect, useState} from 'react';
import {userService} from "../../services/axios.users.service";

import css from "./Style.css"
import {User} from "../User/User";
import {Pages} from "../pages/Pages";

function Users(props) {
    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState({});
    const [page, setPage] = useState(1);
    useEffect(() => {
        userService.getPages(page).then(({data: {data}}) => setUsers(data))
    }, [page])
    useEffect(() => {
        userService.getPages().then(({data}) => setPages(data))
    }, [])

    const pageTool = (e) => {
            setPage(e.target.innerText)
    }


    return (
        <div>
            <div className={'head'}>
                UsersAPI
            </div>
            <div className={'divWrap'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Pages pages={pages} pageTool={pageTool}/>
            </div>
        </div>
    );
}

export {Users};
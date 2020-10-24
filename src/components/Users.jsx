import React from 'react';
import { Container , Row} from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.userData.map((user) => {
                        if (user === 0){
                        return <h1>There are no users</h1>
                        }
                        return <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser}/>
                    })
                }

            </Row>
        </Container>
    );
}

export default Users;

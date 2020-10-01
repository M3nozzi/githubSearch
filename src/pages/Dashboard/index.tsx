import React from 'react';

import logoImg from '../../assets/logoGit.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt='Github Explorer'/>
            <Title>Explore repositories on Github</Title>

            <Form action=''>
                <input type="text" placeholder='Type the repository name' />
                <button type='submit'>Search</button>
            </Form>
        </>
    );
};

export default Dashboard;
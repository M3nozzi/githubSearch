import React from 'react';
import {  FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logoGit.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt='Github Explorer'/>
            <Title>Explore repositories on Github</Title>

            <Form action=''>
                <input type="text" placeholder='Type the repository name' />
                <button type='submit'>Search</button>
            </Form>

            <Repositories>
                <a href='test'>
                    <img
                        src="https://avatars1.githubusercontent.com/u/60794803?s=400&u=d0efdbf4cbeb23895315447ed2a0c02751ed1fc2&v=4"
                        alt="Fabio Menozzi"
                    />
                    <div>
                        <strong>menozzi/menozzi</strong>
                        <p>description description</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href='test'>
                    <img
                        src="https://avatars1.githubusercontent.com/u/60794803?s=400&u=d0efdbf4cbeb23895315447ed2a0c02751ed1fc2&v=4"
                        alt="Fabio Menozzi"
                    />
                    <div>
                        <strong>menozzi/menozzi</strong>
                        <p>description description</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href='test'>
                    <img
                        src="https://avatars1.githubusercontent.com/u/60794803?s=400&u=d0efdbf4cbeb23895315447ed2a0c02751ed1fc2&v=4"
                        alt="Fabio Menozzi"
                    />
                    <div>
                        <strong>menozzi/menozzi</strong>
                        <p>description description</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>

        </>
    );
};

export default Dashboard;
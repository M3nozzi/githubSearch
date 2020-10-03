import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logoGit.svg';
import { Header } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <Header>
            <img src={logoImg} alt='Github Search' />
            <Link to='/dashboard'>
                <FiChevronLeft size={16} />
                Home
            </Link>
        </Header>
    );
};

export default Repository;
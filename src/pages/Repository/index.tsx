import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logoGit.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            console.log(response.data);
        })
    }, [params.repository])

    return (
        <> 
            <Header>
                <img src={logoImg} alt='Github Search' />
                <Link to='/'>
                    <FiChevronLeft size={16} />
                    Home
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="" alt="" />
                    <div>
                        <strong>repoName</strong>
                        <p>descriptions </p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>148</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>58</strong>
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to='rafdf'>
                    <div>
                        <strong>uuhuhu</strong>
                        <p>ghghghgh</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
       </>     
    );
};

export default Repository;
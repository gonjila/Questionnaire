import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import StartPage from './components/StartPage';

const SecondPage = lazy(() => import('./components/second-page/SecondPage'));
const ThirdPage = lazy(() => import('./components/third-page/ThirdPage'));
const ForthPage = lazy(() => import('./components/forth-page/ForthPage'));

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Suspense fallback={<Loading>Loading...</Loading>}>
                    <Switch>
                        <Route exact path='/'>
                            <StartPage />
                        </Route>

                        <Route exact path='/second-page'>
                            <SecondPage />
                        </Route>

                        <Route exact path='/third-page'>
                            <ThirdPage />
                        </Route>

                        <Route exact path='/forth-page'>
                            <ForthPage />
                        </Route>

                        <Route>
                            <Pde>Page dosn't exist!</Pde>
                        </Route>
                    </Switch>
                </Suspense>
            </Container>
        </BrowserRouter>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 1080px;
    background-color: #eaeaea;

    display: flex;
`;

const Loading = styled.div`
    text-align: center;
`;

const Pde = styled.div`
    width: 100%;
    height: 100%;
    font-size: 50px;
    color: red;

    display: flex;
    align-items: center;
    justify-content: center;
`;

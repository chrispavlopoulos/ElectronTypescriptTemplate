import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEnabled } from '../../../redux/Settings/settings.actions';
import styled from 'styled-components';

import Theme from '../../constants/colors';
import Toolbar from '../Window/Toolbar';
import Button from '../common/Button';

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Theme.bg};
    width: 100vw;
    height: 100vh;
    color: white;
    overflow: hidden;
`;
const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    background-color: ${Theme.bg};
`;
const ContentCenterer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Theme.bg_p1};
`;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 48px;
    max-width: 1220px;
`;

const App = () => {
    const dispatch = useDispatch();
    const enabled = useSelector((state: any) => state.settings.enabled);

    return (
        <WindowWrapper>
            <AppWrapper>
                <Toolbar />
                
                <ContentCenterer>
                    <ContentWrapper>
                        <Button
                            onClick={() => dispatch(setEnabled(!enabled))}
                        >
                            {`${enabled}`}
                        </Button>
                    </ContentWrapper>
                </ContentCenterer>
            </AppWrapper>
        </WindowWrapper>
    );
}

export default App;

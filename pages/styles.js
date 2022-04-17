import styled from 'styled-components';

const PanelsStyles = styled.header`
    width: 80vw;
    min-height: 95vh;
    background-color: #076AE1;
    h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-transform: lowercase;
        color: white;
    }
`

const PanelHeader = styled.h1`
    display: flex;
    padding: 5vh 5vw;
    border-bottom: 1px black solid;
`

const PanelBody = styled.div`
`

const IconPanel = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5vh 3vw;
`

export {PanelsStyles, PanelHeader, PanelBody, IconPanel} 
import { useState } from 'react'
import { Menu } from './components/menu/Menu'
import styled from 'styled-components'
import bg2 from './assets/bg2.png'

const SApp = styled.div<{src: string}>`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.src});
`

const App = () => {
    const [isMenuOpen, useIsMenuOpen] = useState(true)
    return <SApp src={bg2}>{isMenuOpen && <Menu />}</SApp>
}

export default App

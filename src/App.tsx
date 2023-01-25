import { useState } from 'react'
import { Menu } from './components/menu/Menu'

const App = () => {
    const [isMenuOpen, useIsMenuOpen] = useState(true)
    return <div>{isMenuOpen && <Menu />}</div>
}

export default App

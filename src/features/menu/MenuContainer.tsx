import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { isMenuOpenedSelector } from '../../store/slice'
import { useSelector } from 'react-redux/es/exports'

const SMenuWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const MenuContainer = () => {
    const isMenuOpened = useSelector(isMenuOpenedSelector)
    return isMenuOpened ? (
        <SMenuWrapper>
            <Menu />
        </SMenuWrapper>
    ) : (
        <></>
    )
}

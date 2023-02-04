import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { isTutorialOpenedSelector } from '../../store/slice'
import Tutorial from '../../components/tutorial/Tutorial'

const STutorialWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const TutorialContainer = () => {
    const isOpened = useSelector(isTutorialOpenedSelector)

    return isOpened ? (
        <STutorialWrapper>
            <Tutorial />
        </STutorialWrapper>
    ) : (
        <></>
    )
}

export default TutorialContainer

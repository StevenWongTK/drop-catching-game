import { useSelector } from 'react-redux'
import { isTutorialOpenedSelector } from '../../store/slice'
import Tutorial from '../../components/tutorial/Tutorial'
import { SModalWrapper } from '../../components/modal-wrapper/style'

const TutorialContainer = () => {
    const isOpened = useSelector(isTutorialOpenedSelector)

    return isOpened ? (
        <SModalWrapper>
            <Tutorial />
        </SModalWrapper>
    ) : (
        <></>
    )
}

export default TutorialContainer

import styled from 'styled-components'
import { STutorialBackground } from './constants'
import e1 from '../../../assets/e1.png'
import e2 from '../../../assets/e2.png'

const SFlex = styled.div`
    display: flex;
    gap: 32px;
`

export const SlideThree = () => {
    return (
        <STutorialBackground>
            <SFlex>
                <img src={e1} alt='e1' width={40} height={40} />
                <img src={e2} alt='e2' width={40} height={40} />
            </SFlex>
            <div>
                <p>Caution!</p>
                <p>These are some skillful priate.</p>
                <p>
                    <b>Avoid</b> or got 100 coins stolen.
                </p>
            </div>
        </STutorialBackground>
    )
}

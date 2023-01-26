import styled from 'styled-components'
import { STutorialBackground } from './constants'
import p1 from '../../../assets/p1.png'
import p2 from '../../../assets/p2.png'
import p3 from '../../../assets/p3.png'
import p4 from '../../../assets/p4.png'

const SFlex = styled.div`
    display: flex;
    gap: 8px;
`

export const SlideTwo = () => {
    return (
        <STutorialBackground>
            <SFlex>
                <img src={p1} alt='p1' width={40} height={40} />
                <img src={p2} alt='p2' width={40} height={40} />
                <img src={p3} alt='p3' width={40} height={40} />
                <img src={p4} alt='p4' width={40} height={40} />
            </SFlex>
            <div>
                <p>These are the treasures you are looking for!</p>
                <p>
                    <b>Catch</b> and get 50 coins each.
                </p>
            </div>
        </STutorialBackground>
    )
}

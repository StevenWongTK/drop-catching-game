import { STutorialBackground } from './constants'
import boat from '../../../assets/boat.png'

const SlideOne = () => {
    return (
        <STutorialBackground>
            <img src={boat} alt='boat' width={40} height={40} />
            <p>You are a pirate and this is your lovely warship.</p>
        </STutorialBackground>
    )
}

export default SlideOne

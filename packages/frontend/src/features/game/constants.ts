import e1 from '../../assets/e1.png'
import e2 from '../../assets/e1.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import boat from '../../assets/boat.png'

/* GAME */
// game duration in ms
export const GAME_DURATION = 60000

/* DROP */
// drop speed in px/second
export const DROP_SPEED = 500
// drop interval in ms
export const DROP_INTERVAL = 1000
// drop width/height in px
export const DROP_SIZE = 40

// game point of drops
const GOOD_DROP_POINT = 50
const BAD_DROP_POINT = -100

export const DROPS_LIST = [e1, e2, p1, p2, p3, p4]

export const DROPS_SCORE_MAP = {
    [e1]: BAD_DROP_POINT,
    [e2]: BAD_DROP_POINT,
    [p1]: GOOD_DROP_POINT,
    [p2]: GOOD_DROP_POINT,
    [p3]: GOOD_DROP_POINT,
    [p4]: GOOD_DROP_POINT,
}

/* CATCHER */
// catcher speed in px/second
export const CATCHER_SPEED = 500
// drop width/height in px
export const CATCHER_SIZE = 40
//TODO ratio?
export const CATCHER_STARTING_Y = 400

export const DEFAULT_CATCHER = {
    image: boat,
    x: 50,
    y: CATCHER_STARTING_Y,
    size: CATCHER_SIZE,
}

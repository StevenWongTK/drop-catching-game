import e1 from '../../assets/e1.png'
import e2 from '../../assets/e1.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

// object drop speed in px/second
export const DROP_SPEED = 10

// object drop interval in ms
export const DROP_INTERVAL = 1000

// game duration in ms
export const GAME_DURATION = 60000

// game point of objects
const GOOD_OBJECT_POINT = 50
const BAD_OBJECT_POINT = -100

// Drops:
export const DROPS_LIST = [e1, e2, p1, p2, p3, p4]
export const DROPS_SCORE_MAP = {
    [e1]: BAD_OBJECT_POINT,
    [e2]: BAD_OBJECT_POINT,
    [p1]: GOOD_OBJECT_POINT,
    [p2]: GOOD_OBJECT_POINT,
    [p3]: GOOD_OBJECT_POINT,
    [p4]: GOOD_OBJECT_POINT,
}

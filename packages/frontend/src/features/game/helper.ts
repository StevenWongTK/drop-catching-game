import { ICatcher, IDrop } from './types'

export const checkColliding = (drop: IDrop, catcher: ICatcher) => {
    const maxDelta = drop.size / 2 + catcher.size / 2
    const xColliding = Math.abs(drop.x - catcher.x) < maxDelta
    const yColliding = Math.abs(drop.y - catcher.y) < maxDelta

    return xColliding && yColliding
}

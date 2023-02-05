import { ICatcher, IDrop } from './types'

export const checkColliding = (drop: IDrop, catcher: ICatcher) => {
    const maxDelta = drop.size / 2 + catcher.size / 2
    const xColliding = Math.abs(drop.x - catcher.x) < maxDelta
    const yColliding = Math.abs(drop.y - catcher.y) < maxDelta

    return xColliding && yColliding
}

export const getResponsiveHeight = (
    targetValue: number,
    fieldHeight: number
) => {
    return (targetValue * fieldHeight) / 1080
}

export const getResponsiveWidth = (targetValue: number, fieldWidth: number) => {
    return (targetValue * fieldWidth) / 1920
}

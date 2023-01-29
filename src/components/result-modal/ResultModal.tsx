import styled from 'styled-components'
import { MenuButton } from '../menu-button/MenuButton'
import { useRef } from 'react'

const SResultModal = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #556e84;
    text-align: center;
    justify-content: space-evenly;
`

const SInput = styled.input`
    font-size: 20px;
    line-height: 32px;
    text-align: center;
`

const SButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ResultModal = ({
    score,
    isNewRecord = false,
    onStartGameButton,
    onBackToMenuButton,
}: {
    score: number
    isNewRecord: boolean
    onStartGameButton: (name?: string) => void
    onBackToMenuButton: (name?: string) => void
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <SResultModal>
            <div>
                Your final score is: <b>{score}</b>
            </div>
            {isNewRecord && (
                <>
                    <div>
                        Congratuation! You win most of the pirate. Please leave
                        you name here to let others know!
                    </div>
                    <SInput ref={inputRef} />
                </>
            )}
            <SButtonGroup>
                <MenuButton
                    label='Start New Game'
                    onClick={onStartGameButton}
                />
                <MenuButton label='Back to Menu' onClick={onBackToMenuButton} />
            </SButtonGroup>
        </SResultModal>
    )
}

import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { maxChallenges } from '../../lib/words'
type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const empties =
    guesses.length < maxChallenges - 1
      ? Array.from(Array(maxChallenges - 1 - guesses.length))
      : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < maxChallenges && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}

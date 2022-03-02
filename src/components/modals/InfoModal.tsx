import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Adivinhe o jogador que jogou ou joga no Palmeiras em 6 tentativas! Após cada chute, a cor
        da letra mudará para mostrar o quão perto você está de acertar o nome!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500">
        Parabéns! Todas as letras estão no lugar correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
      <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="absent"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="absent"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500">
        L e U fazem parte do nome do jogador, porém não estão nos lugares corretos.
      </p>

      <div className="flex justify-center mb-1 mt-4">        
      <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Y"
          status="absent"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="absent"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="absent"
        />
      </div>
      <p className="text-sm text-gray-500">
        Y, K e E não fazem parte do nome do jogador.{' '}
      </p>
      <p className="text-sm mt-6 text-gray-500">
        Um jogo feito para os amantes de futebol &#x1F1E7;&#x1F1F7;. Veja e
        contribua com o código{' '}
        <a
          href="https://github.com/JuanFontes/futebol-wordle"
          className="underline font-bold"
        >
          aqui
        </a>{' '}
        - baseado no{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          react-wordle
        </a>{' '}
      </p>
    </BaseModal>
  )
}

import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Sobre este jogo"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500">
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

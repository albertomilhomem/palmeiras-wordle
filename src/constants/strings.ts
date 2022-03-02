export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const WIN_MESSAGES = [
  'Que isso, jogador, tirou onda!',
  'Nunca duvidei do meu camisa 10!',
  'Vai perder, vai ganhar, perdeu! Ganhou!',
  'Que beleeeeeza!',
  'Agora eu se consagrei!',
]
export const GAME_COPIED_MESSAGE = 'Pontuação copiada com sucesso!'
export const ABOUT_GAME_MESSAGE = 'Sobre este jogo'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Tá faltando letra aí, jogador!'
export const WORD_NOT_FOUND_MESSAGE = 'Jogador não encontrado, que fase!'
export const HARD_MODE_ALERT_MESSAGE =
  'Modo difícil só pode ser habilitado no início!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ele pensou: "Agora eu se consagro!" O jogador era: ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Letra ${guess} precisa estar na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Precisa ter a letra ${letter} pelo menos`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Apagar'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Histórico de tentativas'
export const NEW_WORD_TEXT = 'Novo jogador em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Jogos totais'
export const SUCCESS_RATE_TEXT = 'de sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência de vitórias'
export const BEST_STREAK_TEXT = 'Melhor sequência'

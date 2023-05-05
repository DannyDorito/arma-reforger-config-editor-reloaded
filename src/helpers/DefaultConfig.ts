import { Config } from "../types/Config";

export const DefaultConfig: Config = {
  dedicatedServerId: '',
  region: '',
  gameHostBindAddress: '',
  gameHostBindPort: -1,
  gameHostRegisterBindAddress: '',
  gameHostRegisterPort: -1,
  adminPassword: '',
  game: {
    name: '',
    password: '',
    scenarioId: '',
    playerCountLimit: -1,
    autoJoinable: false,
    visible: false,
    supportedGameClientTypes: [],
    gameProperties: {
      serverMaxViewDistance: -1,
      serverMinGrassDistance: -1,
      networkViewDistance: -1,
      disableThirdPerson: false,
      fastValidation: false,
      battlEye: false,
      VONDisableUI: false,
      VONDisableDirectSpeechUI: false,
      missionHeader: {
        headers: undefined
      },

    },
    mods: []
  },
  operating: {
    lobbyPlayerSynchronise: false
  },
  a2sQueryEnabled: false,
  steamQueryPort: -1,
  isDefault: true
}

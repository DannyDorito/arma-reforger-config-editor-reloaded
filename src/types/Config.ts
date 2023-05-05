import { Dictionary } from "./Dictionary";

export interface Config
{
  dedicatedServerId: string;
  region: string;
  gameHostBindAddress: string;
  gameHostBindPort: number;
  gameHostRegisterBindAddress: string;
  gameHostRegisterPort: number;
  adminPassword: string;
  game: Game;
  operating: Operating;
  a2sQueryEnabled: boolean;
  steamQueryPort: number;
  isDefault: boolean | undefined;
}

export interface Operating
{
  lobbyPlayerSynchronise: boolean;
}

export interface Game
{
  name: string;
  password: string;
  scenarioId: string;
  playerCountLimit: number;
  autoJoinable: boolean;
  visible: boolean;
  supportedGameClientTypes: string[];
  gameProperties: GameProperties;
  mods: Mod[];
}

export interface Mod
{
  modId: string;
  name: string;
  version: string;
}

export interface GameProperties
{
  serverMaxViewDistance: number;
  serverMinGrassDistance: number;
  networkViewDistance: number;
  disableThirdPerson: boolean;
  fastValidation: boolean;
  battlEye: boolean;
  VONDisableUI: boolean;
  VONDisableDirectSpeechUI: boolean;
  missionHeader: MissionHeader;
}

export interface MissionHeader
{
  headers: Dictionary<number> | undefined;
}

import { Box, Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ConfigDisplayProps } from "../props/ConfigDisplayProps";
import { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore'

const ConfigDisplay = ( { props }: { props: ConfigDisplayProps } ) =>
{
  const [ openGame, setOpenGame ] = useState<boolean>( true );
  const [ openSupportedGameClientTypes, setOpenSupportedGameClientTypes ] = useState<boolean>( true );
  const [ openGameProperties, setOpenGameProperties ] = useState<boolean>( true );
  const [ openMods, setOpenMods ] = useState<boolean>( true );
  const [ openOperating, setOpenOperating ] = useState<boolean>( true );
  const handleClickGame = () =>
  {
    setOpenGame( !openGame );
  }

  const handleClickSupportedGameClientTypes = () =>
  {
    setOpenSupportedGameClientTypes( !openSupportedGameClientTypes );
  }

  const handleClickGameProperties = () =>
  {
    setOpenGameProperties( !openGameProperties );
  }

  const handleClickMods = () =>
  {
    setOpenMods( !openMods );
  }

  const handleClickOperating = () =>
  {
    setOpenOperating( !openOperating );
  }

  return (
    <Box hidden={props.config?.isDefault}>
      <List>
        <ListItemText key="dedicatedServerId" primary="dedicatedServerId" />
        <ListItemText key="region" primary="region" />
        <ListItemText key="gameHostBindAddress" primary="gameHostBindAddress" />
        <ListItemText key="gameHostBindPort" primary="gameHostBindPort" />
        <ListItemText key="gameHostRegisterBindAddress" primary="gameHostRegisterBindAddress" />
        <ListItemText key="gameHostRegisterPort" primary="gameHostRegisterPort" />
        <ListItemButton key="gameButton" onClick={handleClickGame} sx={{ padding: 0 }}>
          <ListItemText key="game" primary="game" />
          {openGame ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openGame} timeout="auto" unmountOnExit>
          <List key="gameList" component="div" disablePadding>
            <ListItemText key="name" primary="name" sx={{ paddingLeft: '16px' }} />
            <ListItemText key="password" primary="password" sx={{ paddingLeft: '16px' }} />
            <ListItemText key="scenarioId" primary="scenarioId" sx={{ paddingLeft: '16px' }} />
            <ListItemText key="playerCountLimit" primary="playerCountLimit" sx={{ paddingLeft: '16px' }} />
            <ListItemText key="autoJoinable" primary="autoJoinable" sx={{ paddingLeft: '16px' }} />
            <ListItemText key="visible" primary="visible" sx={{ paddingLeft: '16px' }} />
            <ListItemButton key="supportedGameClientTypesButton" onClick={handleClickSupportedGameClientTypes} sx={{ paddingLeft: '16px', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText key="supportedGameClientTypes" primary="supportedGameClientTypes" />
              {openSupportedGameClientTypes ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSupportedGameClientTypes} timeout="auto" unmountOnExit>
              <List key="supportedGameClientTypesList" component="div" disablePadding>
                {props.config?.game.supportedGameClientTypes.map( ( supportedGameClientType, index ) => (
                  <ListItemText key={supportedGameClientType + index} primary={supportedGameClientType} sx={{ paddingLeft: '32px' }} />
                ) )}
              </List>
            </Collapse>
            <ListItemButton key="gamePropertiesButton" onClick={handleClickGameProperties} sx={{ paddingLeft: '16px', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText key="gameProperties" primary="gameProperties" />
              {openGameProperties ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openGameProperties} timeout="auto" unmountOnExit>
              <List key="supportedGamePropertiesList" component="div" disablePadding>
                <ListItemText key="serverMaxViewDistance" primary="serverMaxViewDistance" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="serverMinGrassDistance" primary="serverMinGrassDistance" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="networkViewDistance" primary="networkViewDistance" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="disableThirdPerson" primary="disableThirdPerson" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="fastValidation" primary="fastValidation" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="battlEye" primary="battlEye" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="VONDisableUI" primary="VONDisableUI" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="VONDisableDirectSpeechUI" primary="VONDisableDirectSpeechUI" sx={{ paddingLeft: '32px' }} />
                <ListItemText key="headers" primary="headers TODO" sx={{ paddingLeft: '32px' }} />
              </List>
            </Collapse>
            <ListItemButton key="modsButton" onClick={handleClickMods} sx={{ paddingLeft: '16px', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText key="mods" primary="mods" />
              {openMods ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMods} timeout="auto" unmountOnExit>
              {props.config?.game.mods.map( ( mod, index ) => (
                <List key={"modsList" + index} component="div" disablePadding>
                  <ListItemText key={mod.modId + index} primary="modId" sx={{ paddingLeft: '32px' }} />
                  <ListItemText key={mod.name + index} primary="name" sx={{ paddingLeft: '32px' }} />
                  <ListItemText key={mod.version + index} primary="version" sx={{ paddingLeft: '32px' }} />
                </List>
              ) )}
            </Collapse>
          </List>
        </Collapse>
        <ListItemButton key="operatingButton" onClick={handleClickOperating} sx={{ padding: 0 }}>
          <ListItemText key="operating" primary="operating" />
          {openOperating ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOperating} timeout="auto" unmountOnExit>
          <ListItemText key="lobbyPlayerSynchronise" primary="lobbyPlayerSynchronise" sx={{ paddingLeft: '16px' }} />
        </Collapse>
        <ListItemText key="a2sQueryEnabled" primary="a2sQueryEnabled" />
        <ListItemText key="steamQueryPort" primary="steamQueryPort" />
      </List>
    </Box>
  );
}
export default ConfigDisplay;

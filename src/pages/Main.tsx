import { Box, Button } from '@mui/material';
import { Config } from '../types/Config';
import ConfigDisplay from '../components/ConfigDisplay';
import { useLocalStorage } from 'usehooks-ts';
import { DefaultConfig } from '../helpers/DefaultConfig';

const Main = () =>
{
  const [ config, setConfig ] = useLocalStorage<Config>( 'config', DefaultConfig );
  const [ fileName, setFileName ] = useLocalStorage<string>( 'fileName', '' );
  const handleUploadJson = async ( files: FileList | null ) =>
  {
    if ( files === null || files.length === 0 || files.length > 1 )
    {
      return;
    }
    const file = files.item( 0 )!;
    if ( file.type !== "application/json" )
    {
      return;
    }

    setFileName( file.name );

    const reader = new FileReader();
    reader.addEventListener( 'load', ( event ) =>
    {
      const result = event.target?.result as string;
      const obj = JSON.parse( result ) as Config;
      setConfig( obj );
    } );
    reader.readAsText( file );
  }
  const handleDownloadJson = async () =>
  {
    const doc = document.createElement( "a" );
    doc.href = URL.createObjectURL( new Blob( [ JSON.stringify( config, null, 2 ) ], {
      type: "application/json"
    } ) );
    doc.setAttribute( "download", fileName );
    document.body.appendChild( doc );
    doc.click();
    document.body.removeChild( doc );
  }

  return (
    <Box>
      {config?.isDefault && <Button variant="contained" component="label" >
        Upload Config File
        <input hidden accept="application/json" type="file" onChange={( e ) => handleUploadJson( e.target.files )} />
      </Button>}
      <ConfigDisplay props={{ config: config }} />
      {!config?.isDefault && <Button variant="contained" component="label" onClick={() => handleDownloadJson()}>Download Config File</Button>}
    </Box>
  );
}

export default Main;

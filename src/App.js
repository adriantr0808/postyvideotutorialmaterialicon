import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BluetoothAudioOutlinedIcon from '@mui/icons-material/BluetoothAudioOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AndroidIcon from '@mui/icons-material/Android';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';


function App() {
  return (
    <div className='container'>
     
        <h1 className='mt-3 text-center'>Material Icon</h1>
        <hr/>
      <div>
        <h2>Diferentes usos de los iconos</h2>
        <hr/>
        <h3>Iconos simples</h3>   
      <div className='mt-3'>
          {/* Iconos simples */}
          <DeleteOutlinedIcon/>
          <DeleteOutlinedIcon color='error'/>
          <BluetoothAudioOutlinedIcon color='secondary'/>
      </div>

      <hr/>
      <h3>Iconos importando "Icon"</h3>
      <div>
        {/* Iconos con 'Icon' */}
        <Icon color='error'>star</Icon>
        <Icon>add_reaction</Icon>
      </div>
      <hr/>
      <h3>Iconos en botones</h3>
      <div className='mt-3'>
      {/* Iconos con botones */}
      <Button variant="outlined" color='error'
      startIcon={<DeleteOutlinedIcon/>}
      >Delete</Button>

      <Button variant="outlined" color='primary'
      endIcon={<AccountCircleIcon/>}
      >Profile</Button>


    <Button variant="outlined" color='secondary'
      endIcon={<Icon>add_reaction</Icon>}
      >Profile</Button>

     
    

      </div>
      <hr/>
      <h3>Iconos como botones</h3>
      <div style={{background:'beige'}}>
        {/* Iconos como botones */}

      <IconButton><AirplanemodeActiveIcon color='primary'/></IconButton>
      <IconButton><Icon>android_icon</Icon></IconButton>
      </div>
      <hr/>
     
      </div>
      </div>
  );
}

export default App;

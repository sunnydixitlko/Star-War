import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems:"center",
  width: 400,
  bgcolor: '#007FFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:"white"
};

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  margin: "10px 0"
});


export default function BasicModal({open, setOpen, people, homeWorld}) {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display:"flex", alignItems:"center", width:"100%"}}>
            <h2 style={{textAlign:"center", width:"80%"}}>{people.name}</h2>
            <Button onClick={handleClose} sx={{color:"red"}}><CancelIcon sx={{fontWeight:"bold", fontSize:"25px"}} /></Button>
          </div>
         

          <MyComponent> <h5>Height: <span>{people?.height} m</span></h5></MyComponent>
          <MyComponent> <h5>Mass: <span>{people?.mass} kg</span></h5></MyComponent>
          <MyComponent> <h5>Birth Year: <span>{people?.birth_year} </span></h5></MyComponent>
          <MyComponent> <h5>Date: <span>{people?.created?.split("T")[0]}</span></h5></MyComponent>
          <MyComponent> <h5>Films: <span>{people?.films?.length}</span></h5></MyComponent>

          <h4>HomeWorld</h4>
          <MyComponent><h5>Name: <span>{homeWorld?.name}</span></h5></MyComponent>
          <MyComponent> <h5>Terrain: <span>{homeWorld?.terrain}</span></h5></MyComponent>
          <MyComponent> <h5>Climate: <span>{homeWorld?.climate}</span></h5></MyComponent>
          <MyComponent> <h5>Amount of Resident: <span>{homeWorld?.residents?.length} </span></h5></MyComponent>
        </Box>
      </Modal>
    </>
  );
}
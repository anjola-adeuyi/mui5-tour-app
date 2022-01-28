import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StaticDateRangePickerDemo from './TourDateRangePicker'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Book Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
            Pick a start date and an End date below
          </Typography>
          <StaticDateRangePickerDemo />
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography id="modal-modal-description">
              Thanks for booking
            </Typography>
            
            <Button variant='outlined' onClick={handleClose}>Book - Now</Button>
        
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ close, open, message }: { message: string; open: boolean; close: () => void }) => {
  const handleClose = () => close();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            sx={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;

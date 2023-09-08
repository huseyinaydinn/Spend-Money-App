import React from 'react'
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { InputAdornment } from "@mui/material";

function AddMoney({ setMoney, money }) {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(0)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loadMoney = () => {
        setMoney((Number(money) + Number(amount)))
        handleClose()
    }

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Para Ekle
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Para Yükle</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Yüklenecek para miktarını giriniz.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>İptal Et</Button>
                    <Button onClick={loadMoney}>Yükle</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddMoney
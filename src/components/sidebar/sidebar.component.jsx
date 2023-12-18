import { Divider, Drawer } from "@mui/material";
import { Toolbar } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'


const listItems = ['Expenses', 'Goals', 'Friends', 'Lent/Borrowed']

// ToDo: Add listIcon in the listItemButton
const listItemMaker = (val) => (
    // console.log("listItemMaker")
   ( <ListItem key={val}>
    {console.log("log_listItemMaker")}
        <ListItemButton>
            <ListItemText primary={val} /> 
        </ListItemButton>
    </ListItem>)
)

const drawer = (
    
    (<div>
        {console.log("log_drawer")}
        <Toolbar/>
        <Divider />
        <List>
            {
                listItems.map((text, index) => listItemMaker(text, index))
                // listItemMaker("abc")
            }
        </List>
    </div>)
)

function Sidebar() {
    const [open, setOpen] = useState(false);
    console.log("log_Sidebar")
    function handleDrawerOpen(){
        setOpen(true);
    }
    function handleDrawerClose(){
        setOpen(false);
    }
    return (
        
        <div className="sidebar">
             <AppBar position="fixed" open={open}>
                <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

                </Toolbar>
          </AppBar>
            <Drawer open = {open}  variant="persistent">
                <IconButton
                onClick={handleDrawerClose}
                >
                <ChevronLeftIcon />
                </IconButton>
                {drawer}
            </Drawer>
        </div>
    );
  }
  
  export default Sidebar;
  
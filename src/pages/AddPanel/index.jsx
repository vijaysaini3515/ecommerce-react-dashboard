import React, { useContext } from 'react';

import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App';
import Slide from '@mui/material/Slide';
import AddProduct from '../../components/AddProduct';
import AddHomeSlide from '../../components/AddHomeSlide';
import AddCategory from '../../components/AddCategory';
import AddSubCategory from '../../components/AddSubCategory';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AddPanel = () => {
    const context = useContext(MyContext)



    return (
        <>
            <Dialog
                fullScreen
                open={context.isOpenPanel.open}
                onClose={()=>context.setIsOpenPanel({open:false})}
                slots={{
                    transition: Transition,
                }}
            >
                <AppBar elevation={1} sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="#fefefe"
                            onClick={()=>context.setIsOpenPanel({open:false})}
                            aria-label="close"
                        >
                            <IoClose />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1,color:"#000" }} variant="h6" component="div">
                           <span>{context.isOpenPanel?.model}</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
                    {
                        context.isOpenPanel?.model === 'Add Product' &&  <AddProduct />
                    }
                    {
                        context.isOpenPanel?.model === 'Add Home Slide' &&  <AddHomeSlide />
                    }
                    {
                        context.isOpenPanel?.model === 'Add New Category' &&  <AddCategory />
                    }
                    {
                        context.isOpenPanel?.model === 'Add New Sub Category' &&  <AddSubCategory />
                    }
            </Dialog>
        </>
    )
}

export default AddPanel;
import React, { useContext } from 'react';
import './header.scss'
import Button from '@mui/material/Button';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { FaRegBell } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import {MyContext} from '../../App'

import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -1,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 2px',
    },
  }));

const Header = () => {
    const navigate = useNavigate();
  const context = useContext(MyContext)
  const [anchorMyAccEl, setAnchorMyAccEl] = React.useState(null);
  const open = Boolean(anchorMyAccEl);

  const handleClickMyAcc = (event) => {
    setAnchorMyAccEl(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAccEl(null);
  };


  return (
   <header className={`bg-white ${context.isSideBarOpen === true ? 'pl-64' : 'pl-5'} ${context.isSideBarOpen === true && context?.windowWidth < 992 && '!pl-55'} z-50 relative transition-all pr-3 py-2 w-full h-[auto] shadow-sm flex items-center justify-between`}>
        <div className="part1">
            <Button onClick={()=>context.setIsSideBarOpen(!context.isSideBarOpen)} className='!w-[40px] !min-w-[40px] !h-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]'>
                {
                   context.isSideBarOpen === true ? <RiMenuFoldLine className="text-[22px] text-[rgba(0,0,0,0.8)] " /> : <RiMenuFold2Line className="text-[22px] text-[rgba(0,0,0,0.8)] " />  
                }
            </Button>
        </div>

        {
            context.isLogin === false ? (
                <div className="part2 w-[40%] flex items-center justify-end gap-5">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <FaRegBell />
                        </StyledBadge>
                    </IconButton>
        
                    <div className="relative">
                        <div onClick={handleClickMyAcc} className="h-[35px] w-[35px] rounded-full overflow-hidden cursor-pointer">
                            <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" />
                        </div>
                        <Menu
                            anchorEl={anchorMyAccEl}
                            id="account-menu"
                            open={open}
                            onClose={handleCloseMyAcc}
                            onClick={handleCloseMyAcc}
                            slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleCloseMyAcc} className='!bg-white'>
                            <div className='flex items-center gap-3'>
                                    <div onClick={handleClickMyAcc} className="h-[35px] w-[35px] rounded-full overflow-hidden cursor-pointer">
                                        <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" />
                                    </div>
                                    <div className="info">
                                        <h3 className='text-[16px] font-[600] leading-5'>Temp user </h3>
                                        <p className='text-[13px] font-[400] opacity-75'>test@gamil.com</p>
                                    </div>
                            </div>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                            <div className='w-full flex items-center gap-3'>
                                    <FaRegUser  className='text-[18px]'/>
                                    <span className='text-[14px]'>Profile</span>
                            </div>
                            </MenuItem>
                            <MenuItem>
                            <div className='w-full flex items-center gap-3'>
                                    <IoMdLogOut  className='text-[18px]'/>
                                    <span className='text-[14px] '>Logout</span>
                            </div>
                            </MenuItem>
                            
                        </Menu>
                    </div>
                </div>
            ) : (
                <Button onClick={()=>navigate('/signup')} className='btn-blue !btn-sm !rounded-full !normal-case flex items-center gap-2'>Sign In  <BiLogInCircle className='text-[18px]'/> </Button>
            )
        }

       
   </header>
  )
}

export default Header;
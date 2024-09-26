import './Sidebar.css';
import SidebarItem from './SidebarItem';
import {itemData} from './SidebarData';

// Material UI
import { MenuList , Typography } from '@mui/material';


// Sidebar Component
export default function Sidebar() {

  return (
        <aside>
            <nav>
                <MenuList>
                {
                    itemData.map((item)=>  <SidebarItem data={item}/>)
                }
                </MenuList>

                <Typography 
                variant="caption" 
                sx={{
                    color:'var(--lignt-black)',
                    paddingLeft: '16px'
                }}
                >
                    © 2024 Google LLC
                </Typography>
            </nav>
        </aside>
    )
};
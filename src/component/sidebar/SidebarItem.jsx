// Material UI
import {
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';


function SidebarItem({data}) {

  return (
      (data.divider)?
      <>
        <hr />
        {
          (data.text)? <h4 className='aside-heading'>{data.text}</h4> : ''
        }
      </>
      :
      <MenuItem>
          <ListItemIcon style={{fontSize: '22px'}}>
              {data.icon}
          </ListItemIcon>
          <ListItemText>{data.text}</ListItemText>
      </MenuItem>
  )
}

export default SidebarItem;
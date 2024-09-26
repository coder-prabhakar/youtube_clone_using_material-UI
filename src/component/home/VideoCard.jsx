import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function VideoCard({data}){
    return (
        <Card sx={{ width: '100%', boxShadow:'none' }}>
            <CardMedia
            component="img"
            width='100%'
            image={data.img}
            alt="Paella dish"
            />

            <CardHeader
            avatar={ <Avatar /> }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={data.title}
            subheader={<>{data.channel} <br /> {data.views} . {data.uploadTime}</>}
            />
        </Card>
    );
};
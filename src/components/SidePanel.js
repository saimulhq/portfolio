import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import profilePhoto from '../images/profilePhoto.jpg';

// style used in component
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#f5e9e9'
    },
    media: {
        height: 300
    }
});

// side panel component
const SidePanel = () => {
    // using material ui style
    const classes = useStyles();

    return (
        <Card className={classes.root} disabled>
            <CardMedia
                className={classes.media}
                image={profilePhoto}
                title="Sheikh Photo"
            />
            <CardContent>
                <Typography variant="h6" color="textPrimary">
                    Sheikh Bin Enam
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                    Full Stack Software Developer
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SidePanel;

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MessageIcon from '@material-ui/icons/Message';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

// menu items for the website
export const menuItems = [
    {
        title: 'Home',
        pageUrl: '/',
        icon: <HomeIcon />
    },
    {
        title: 'Work Experiences',
        pageUrl: '/work',
        icon: <WorkIcon />
    },
    {
        title: 'Skills',
        pageUrl: '/skills',
        icon: <AssignmentTurnedInIcon />
    },
    {
        title: 'Projects',
        pageUrl: '/projects',
        icon: <FolderOpenIcon />
    },
    {
        title: 'Contact',
        pageUrl: '/contact',
        icon: <MessageIcon />
    }
];

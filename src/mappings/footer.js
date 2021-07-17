import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { links } from './links';

// footer links
export const footer = [
    {
        link: links['LinkedIn'],
        icon: <LinkedInIcon fontSize="medium" />
    },
    {
        link: links['Github'],
        icon: (
            <GitHubIcon
                fontSize="small"
                style={{ paddingBottom: 'inherit' }}
            />
        )
    },
    {
        link: links['Facebook'],
        icon: <FacebookIcon fontSize="medium" />
    }
];

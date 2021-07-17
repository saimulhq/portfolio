import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { footer } from '../mappings/footer';

// footer component
const Footer = () => {
    return (
        <footer>
            <Box
                textAlign="center"
                bgcolor="#646d8f"
                color="white"
                mx="auto"
                p={1}
            >
                <Typography
                    variant="caption"
                    component="span"
                    color="inherit"
                >
                    There is always a solution to a problem.
                </Typography>
            </Box>

            <Box
                textAlign="center"
                bgcolor="#646d8f"
                color="white"
                mx="auto"
                p={1}
            >
                {footer.map((data) => {
                    return (
                        <Link
                            key={data.link}
                            href={data.link}
                            color="inherit"
                            style={{ padding: 2 }}
                        >
                            {data.icon}
                        </Link>
                    );
                })}
            </Box>
        </footer>
    );
};

export default Footer;

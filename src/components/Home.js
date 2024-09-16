import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as ReactReouterLink } from 'react-router-dom';
import { links } from '../mappings/links';

// style used in the component
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        border: 'none',
        boxShadow: 'none',
        height: 500,
        minHeight: '100vh'
    },
    outerCard: {
        border: 'none',
        boxShadow: 'none'
    }
});

// home component
const Home = () => {
    // using material ui style
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6" color="textPrimary">
                        Introduction
                    </Typography>

                    <Typography
                        variant="body1"
                        component="span"
                        display="block"
                    >
                        Hi, I am Sheikh Bin Enam a.k.a <b>Sheikh</b>.
                        I am an experienced <b>Senior Full Stack Software Engineer</b> 
                        {' '}specializing in developing backend solutions. 
                        Throughout my career, I have demonstrated leadership skills, 
                        fostered innovation, and successfully delivered complex applications. 
                        I am highly regarded for my understanding of software architecture 
                        and my commitment to staying up to date with the latest technologies.
                        Currently I am working as a Senior Software Developer at{' '}
                        <Link href={links['Visma']}>Visma</Link>
                        .
                        <br />
                        <br />I completed my <b>
                            Master of Science
                        </b>{' '}
                        Degree from{' '}
                        <Link href={links['TUNI']}>
                            Tampere University
                        </Link>
                        , Finland in June 2020. My major was{' '}
                        <b>Software Engineering - Web and Cloud</b>. I
                        obtained an overall grade of 4.02 on a scale
                        of 5. My Thesis Title was
                        {' "'}
                        <Link href={links['MS_Thesis']}>
                            Optimizing the Efficiency of the Data
                            Analytics Framework Using Microservice
                            Architecture
                        </Link>
                        {'"'}. This thesis was done for{' '}
                        <Link href={links['Cloubi']}>Cloubi</Link>
                        .
                        <br />
                        <br />I have a <b>Bachelor of Science</b>{' '}
                        Degree from the{' '}
                        <Link href={links['DU']}>
                            University of Dhaka
                        </Link>
                        , Bangladesh where my major was{' '}
                        <b>Software Engineering</b>. I graduated on
                        December 2016 and obtained an overall grade of
                        3.55 on a scale of 4. My final year project
                        was Plagiar - A web based repository
                        management and plagiarism detection tool.
                        <br />
                        <br />
                        To know more about me, feel free to download
                        my{' '}
                        <ReactReouterLink
                            to={links['CV']}
                            target="_blank"
                        >
                            <b>CV</b>
                        </ReactReouterLink>
                        !
                        <br />
                        <br />
                        You can also contact me using the {'"'}
                        <b>Contact</b>
                        {'"'} tab above.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.outerCard}>
                <CardContent>
                    <Typography
                        variant="caption"
                        component="span"
                        color="textSecondary"
                    >
                        This website is developed using ReactJS,
                        EmailJS and Material UI.
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default Home;

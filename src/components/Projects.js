import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { projects } from '../mappings/projects';

// style used in the component
const useStyles = makeStyles(() => ({
    root: {
        border: 'none',
        boxShadow: 'none',
        minHeight: '100vh'
    },
    list: {
        width: '100%',
        padding: 0
    },
    listItem: {
        padding: 0
    },
    divider: {
        margin: 0
    },
    inline: {
        display: 'inline'
    }
}));

// project component
const Projects = () => {
    const classes = useStyles();

    // loop and repeat list from project list inside configured in mappings
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" color="textPrimary">
                    Projects
                </Typography>
                <List className={classes.list}>
                    {projects.map((project) => {
                        return (
                            <React.Fragment key={project.title}>
                                <ListItem
                                    alignItems="flex-start"
                                    className={classes.listItem}
                                >
                                    <ListItemText
                                        primary={
                                            project.link ? (
                                                <Link
                                                    href={
                                                        project.link
                                                    }
                                                >
                                                    <b>
                                                        {
                                                            project.title
                                                        }
                                                    </b>
                                                </Link>
                                            ) : (
                                                <b>{project.title}</b>
                                            )
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={
                                                        classes.inline
                                                    }
                                                    color="textPrimary"
                                                >
                                                    {
                                                        project.description
                                                    }
                                                </Typography>
                                                <br />
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={
                                                        classes.inline
                                                    }
                                                    color="textPrimary"
                                                >
                                                    Platform:{' '}
                                                    {project.platform}
                                                </Typography>
                                                <br />
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider
                                    variant="middle"
                                    component="li"
                                    className={classes.divider}
                                />
                            </React.Fragment>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default Projects;

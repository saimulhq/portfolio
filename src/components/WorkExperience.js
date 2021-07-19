import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { works } from '../mappings/works';

// style used in the component
const useStyles = makeStyles(() => ({
    root: {
        border: 'none',
        boxShadow: 'none',
        height: 550,
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

// work experience component
const WorkExperience = () => {
    const classes = useStyles();

    // loop and repeat list from work list inside configured in mappings
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" color="textPrimary">
                    Work Experiences
                </Typography>
                <List className={classes.list}>
                    {works.map((work) => {
                        return (
                            <React.Fragment key={work.company}>
                                <ListItem
                                    alignItems="flex-start"
                                    className={classes.listItem}
                                >
                                    <ListItemText
                                        primary={<b>{work.title}</b>}
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
                                                    {work.link ? (
                                                        <Link
                                                            href={
                                                                work.link
                                                            }
                                                        >
                                                            {
                                                                work.company
                                                            }
                                                        </Link>
                                                    ) : (
                                                        <React.Fragment>
                                                            {
                                                                work.company
                                                            }
                                                        </React.Fragment>
                                                    )}
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
                                                    {work.location}
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
                                                    {work.period}
                                                </Typography>
                                                <br />
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={
                                                        classes.inline
                                                    }
                                                    color="textSecondary"
                                                >
                                                    <RouterLink
                                                        to={work.file}
                                                        target="_blank"
                                                    >
                                                        {
                                                            work.fileName
                                                        }
                                                    </RouterLink>
                                                </Typography>
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

export default WorkExperience;

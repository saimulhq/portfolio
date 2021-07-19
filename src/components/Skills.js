import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { skills } from '../mappings/skills';
import Chip from '@material-ui/core/Chip';

// style used in the component
const useStyles = makeStyles(() => ({
    root: {
        border: 'none',
        boxShadow: 'none',
        minHeight: '100vh'
    },
    innerCard: {
        border: 'none',
        boxShadow: 'none',
        padding: 0
    },
    innerCardContent: {
        paddingLeft: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    list: {
        width: '100%',
        padding: 0
    },
    listItem: {
        padding: 0
    },
    chip: {
        marginRight: '5px',
        marginTop: '5px',
        backgroundColor: '#f5e9e9'
    },
    divider: {
        margin: 0
    },
    divStyle: {
        paddingBottom: '10px',
        paddingTop: '5px'
    },
    inline: {
        display: 'inline'
    }
}));

// skills component
const Skills = () => {
    const classes = useStyles();

    // go over from skills object configured in mappings
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" color="textPrimary">
                    Technical Skills
                </Typography>
                <List className={classes.list}>
                    {Object.keys(skills).map((key) => {
                        return (
                            <React.Fragment key={key}>
                                <ListItem
                                    alignItems="flex-start"
                                    className={classes.listItem}
                                >
                                    <Card
                                        className={classes.innerCard}
                                    >
                                        <CardContent
                                            className={
                                                classes.innerCardContent
                                            }
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                color="textPrimary"
                                            >
                                                <b>{key}</b>
                                            </Typography>
                                            <div
                                                className={
                                                    classes.divStyle
                                                }
                                            >
                                                {skills[key].map(
                                                    (skill) => {
                                                        return (
                                                            <Chip
                                                                key={
                                                                    skill
                                                                }
                                                                label={
                                                                    skill
                                                                }
                                                                className={
                                                                    classes.chip
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
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

export default Skills;

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import SidePanel from './components/SidePanel.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    sidePanel: {
        backgroundColor: '#f5e9e9'
    }
}));

const App = () => {
    // using material ui style
    const classes = useStyles();

    // dividing the screen using grid
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                    <Header />
                </Grid>
                <Grid
                    item
                    md={3}
                    sm={12}
                    xs={12}
                    lg={3}
                    className={classes.sidePanel}
                >
                    <SidePanel />
                </Grid>
                <Grid item md={9} sm={12} xs={12} lg={9}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/contact"
                            component={Contact}
                        />
                        <Route
                            exact
                            path="/work"
                            component={WorkExperience}
                        />
                        <Route
                            exact
                            path="/skills"
                            component={Skills}
                        />
                        <Route
                            exact
                            path="/projects"
                            component={Projects}
                        />
                    </Switch>
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;

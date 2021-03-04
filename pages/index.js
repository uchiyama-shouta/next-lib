import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DrawerList from '../components/List'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "#1976d2",
	},
	logo: {
    marginLeft: theme.spacing(3),
	},
}));

export default function Home() {
	const classes = useStyles();

	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		// setState({ ...state, ['right']: open });
		setState({ ...state, [anchor]: open });
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer('right', true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.logo} variant="h6" color="inherit">
						Logos
					</Typography>
				</Toolbar>
			</AppBar>
      <Drawer anchor='right' open={state.right} onClose={toggleDrawer('right', false)}>
        <DrawerList />
      </Drawer>
		</div>
	);
}

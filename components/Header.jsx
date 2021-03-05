import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DrawerList from "./DrawerList";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "#1976d2",
	},
	justify: {
		justifyContent: "space-between",
	},
	logo: {
		marginLeft: theme.spacing(3),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
}));

const Header = (props) => {
	const classes = useStyles();
	const { state, setState } = props;

	const toggleDrawer = (anchor, open) => (e) => {
		if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar className={classes.justify} variant="dense">
					<Typography className={classes.logo} variant="h6" color="inherit">
						Logo
					</Typography>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer("right", true)}
						className={classes.icon}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="right"
				open={state.right}
				onClose={toggleDrawer("right", false)}
				onOpen={toggleDrawer("right", true)}
			>
				<DrawerList />
			</SwipeableDrawer>
		</div>
	);
};

export default Header;

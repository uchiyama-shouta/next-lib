import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
	list: {
		width: 230,
	},
	fullList: {
		width: "auto",
	},
});

const DrawerList = (props) => {
	const classes = useStyles();
   const lists = ["Inbox", "Starred", "Send email", "Drafts"]
	const { anchor } = props;
	return (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
		>
			<List>
				{lists.map((text) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default DrawerList;

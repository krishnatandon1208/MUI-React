import React from "react";
import { makeStyles } from "@material-ui/core";
import {
	AppBar,
	Toolbar,
	Grid,
	InputBase,
	IconButton,
	Badge,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	root: {
		backgroundColor: "#FFFFFF",
		paddingLeft: "320px"
	},
	jcFlex: {
		display: "flex",
		justifyContent: "flex-end"
	},
	searchInput: {
		opacity: "0.6",
		padding: "0px 8px",
		fontSize: "0.8rem",

		"&:hover": {
			backgroundColor: "#F2F2F2"
		},

		"& .MuiSvgIcon-root": {
			marginRight: "8px"
		}
	},
	// btnRoot: {
	// 	background: "green"
	// },
	// btnLabel: {
	// 	backgroundColor: "red"
	// }
});

export default function Header() {

	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<Grid container alignItems="center">
						<Grid item sm={8}>
							<InputBase className={classes.searchInput} placeholder="Search"
								startAdornment={<SearchIcon fontSize="small" />}
							/>
						</Grid>
						<Grid item sm={2}>

						</Grid>
						<Grid item sm={2} className={classes.jcFlex}>
							{/* <IconButton classes={{root:classes.btnRoot, label:classes.btnLabel}}>*/}
							<IconButton>
								<Badge badgeContent={4} color="secondary">
									<NotificationsIcon fontSize="small" />
								</Badge>
							</IconButton>
							<IconButton>
								<Badge badgeContent={4} color="primary">
									<ChatBubbleOutlineIcon fontSize="small" />
								</Badge>
							</IconButton>
							<IconButton className={classes.btn}>
								<PowerSettingsNewIcon fontSize="small" />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

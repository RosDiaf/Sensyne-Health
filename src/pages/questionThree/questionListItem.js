import React, {Fragment} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(() => ({
	item: {
		display: 'flex'
	},
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
}));

const QuestionListItem = (props) => {
	const {icon, name, species, id,divider, description } = props;
	const Icon = icon;
	const classes = useStyles();
	return(
		<Fragment>
			<ListItem alignItems="flex-start" >
				<ListItemAvatar>
					<Avatar>
						<Icon/>
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species? species : 'Other'}`}
					secondary={
						<React.Fragment>
							<span className={classes.item}>
								<Typography
									variant="inherit"
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									variant="inherit"
									className={classes.label}
								>
									{description}
								</Typography>
							</span>
							<span className={classes.item}>
								<Typography
									variant="inherit"
									className={classes.header}
								>
									Guid:
								</Typography>
								<Typography
									variant="inherit"
									className={classes.label}
								>
									{id ? id : 'ERROR '}
								</Typography>
							</span>

						</React.Fragment>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</Fragment>
	)
}

export default QuestionListItem;
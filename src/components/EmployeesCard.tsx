import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


interface Props {
	avatar: string;
	name: string;
	job: string;
	email: string;
}

export default function EmployeesCard({
	avatar,
	job,
	name,
	email
}: Props) {
	return (
		<ListItem alignItems="flex-start" sx={{ boxShadow: '0 0 2px 1px rgba(0,0,0, .5)' }}>
			<ListItemAvatar>
				<Avatar alt="Remy Sharp" src={avatar} />
			</ListItemAvatar>
			<ListItemText
				primary={job}
				secondary={
					<>
						<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary"
						>
							{name}
						</Typography>
					</>
				}
			/>
		</ListItem>
	)
}
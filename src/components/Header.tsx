import React from 'react'

import { AppBar, Toolbar, Typography } from '@mui/material'

interface Props {}

export default function Header({}: Props) {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component={'div'}>
					Redux Saga App
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
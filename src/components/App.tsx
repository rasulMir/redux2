import React from 'react'

import { Grid } from '@mui/material'
import Content from './Content'
import Header from './Header'
import SideBar from './SideBar'

interface Props {}

export default function App({}: Props) {
	return (
		<Grid container spacing={0} alignItems='stretch'>

			<Grid item xs={3} sm={3} md={3} xl={3}>
				<SideBar />
			</Grid>

			<Grid item xs={9} sm={9} md={9} xl={9}>
				<Header />
				<Content />
			</Grid>

		</Grid>
	)
}
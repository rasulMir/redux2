import React from 'react'

// components
import { Divider, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

import { EmployeesActionTypes, PositionActionTypes } from '../types'
import { RootState } from '../redux/store'

const paper = {
	height: '100vh',
	overflowY: 'auto'
}

const jobs = {
	padding: '5px',
	cursor: 'pointer'
}

interface Props {}

export default function SideBar({}: Props) {

	const positions = useAppSelector((state: RootState) => state.positionReducer);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch({ type: PositionActionTypes.POSITION_ACTION_PENDING })
	}, [])

	if (positions.loading) {
		return <LinearProgress />
	}

	if (positions.error) {
		return <Typography variant='body2' >{ positions.errorTxt } Please Reaload The Page</Typography>
	}

	const handleClick = (title: string) => {
		dispatch({ type: EmployeesActionTypes.EMPLOYEES_ACTION_FILTER, payload: title })
	}

	return (
		<Paper sx={paper}>
			<Divider light={false} sx={{ height: '65px', display: 'block' }}/>

			<Stack spacing={1} >
				{
					positions.positions.map(i => (
						<Typography
							key={i.id}
							sx={jobs}
							variant='body1'
							textAlign='center'
							onClick={() => handleClick(i.title)}
						>
							{ i.title }
						</Typography>
					))
				}
			</Stack>
		</Paper>
	)
}
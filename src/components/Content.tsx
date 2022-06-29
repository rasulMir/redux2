import { Grid, LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store'
import { EmployeesActionTypes } from '../types'
import EmployeesCard from './EmployeesCard'

interface Props {}

export default function Content({}: Props) {

	const employees = useAppSelector((state: RootState) => state.employeesReducer)
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch({ type: EmployeesActionTypes.EMPLOYEES_ACTION_PENDING })
	}, [])

	React.useEffect(() => {
		if (employees.employees.length) {
			dispatch({ type: EmployeesActionTypes.EMPLOYEES_ACTION_FILTER, payload: 'Supervisor' })
		}
	}, [employees.employees])

	if (employees.error) {
		return <Typography variant='body1' >{ employees.errorTxt }</Typography>
	}
	
	if (employees.loading) {
		return <LinearProgress />
	}

	return (
		<Box sx={{ padding: '30px' }}>
			<Grid container spacing={2}>
				{
					employees.jobsFiltered.map(i => (
						<Grid key={i.id} item md={4} xl={3}>
							<EmployeesCard 
								{...i}
							/>
						</Grid>
					))
				}
			</Grid>
		</Box>
	)
}
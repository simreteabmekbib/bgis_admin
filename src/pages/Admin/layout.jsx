import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';

import GeneralLayout from '../../layout'

function AdminLayout(props) {

	const mdTheme = createTheme();
	const menu = [
	    {
			link: '/Admin/AdminRegistration',
			title: 'Register Admin'
		},
		{
			link: '/Admin/StudentRegistration/Step1',
			title: 'Register Student'
		},
		{
			link: '/Admin/AddDates',
			title: 'Add Important Dates'
		},
		{
			link: '/Admin/ViewStudents',
			title: 'View Students'
		},
		{
			link: '/Admin/AddBranch',
			title: 'Add Branch'
		},
	]

	return (

		<ThemeProvider theme={mdTheme}>
			<GeneralLayout menu={menu} children={props.children} />
		</ThemeProvider>

	);
}

export default AdminLayout;
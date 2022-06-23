import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';

import GeneralLayout from '../../layout'

function StudentLayout(props) {

	const mdTheme = createTheme();

	const menu = [
		{
			link: '/Student/ViewResult',
			title: 'View Result'
		},
		{
			link: '/Student/EditProfile',
			title: 'Edit Profile'
		},
		
	]

	return (

		<ThemeProvider theme={mdTheme}>
			<GeneralLayout menu={menu} children={props.children} />
		</ThemeProvider>

	);
}

export default StudentLayout;
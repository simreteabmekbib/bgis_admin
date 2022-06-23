import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';

import GeneralLayout from '../../layout'

function CommonLayout(props) {

	const mdTheme = createTheme();
	const menu = [
		{
			link: '/Common/Profile',
			title: 'Profile'
		},
	]
	return (

		<ThemeProvider theme={mdTheme}>
			<GeneralLayout menu={menu} children={props.children} />
		</ThemeProvider>

	);
}

export default CommonLayout;
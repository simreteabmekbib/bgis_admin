import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';

import GeneralLayout from '../../layout'
import StudentLayout from './layout';
import AdminLayout from './layout';

function Index(props) {

	

	return (

		<AdminLayout>
            Hello Admin
        </AdminLayout>

	);
}

export default Index;
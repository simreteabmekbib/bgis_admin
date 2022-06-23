import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GeneralLayout from '../../layout'
import StudentLayout from './layout';
import TeacherLayout from './layout';
import ParentLayout from './layout';
import CommonLayout from './layout';

function Index(props) {



        return (

                <CommonLayout>
                        Hello Profile
                </CommonLayout>

        );
}

export default Index;
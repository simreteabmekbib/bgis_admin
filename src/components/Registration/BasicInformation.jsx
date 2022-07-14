import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';
import { userCompleteProfileStart } from '../../redux/auth/auth.actions';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicInformation = (props) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [gradeLevel, setGradeLevel] = useState('');
    const [nationality, setNationality] = useState('');
    const [gender, setGender] = useState('');
    const [branch, setBranch] = useState('');
    const [branchData, setBranchData] = useState([]);
    const [country, setCountry]= useState([
    "Ethiopia",
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan (Province of China)",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"]);

    const onSubmit = (data) => {
        //console.log(data);
        router.push({
            pathname: props.nextPage,
            query: {branch: data.branch, birthDate: data.birth_date, gender: data.gender, nationality: data.nationality, gradeLevel: data.grade_level}
        }, props.nextPage );


    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleBranchChange = (event) => {
        setBranch(event.target.value);
    };
    const handleGradeLevelChange = (event) => {
        setGradeLevel(event.target.value);
    }; 

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };
    const handleInitialData = async () => {
    
        const res = await fetch("https://localhost:7247/api/Admission/GetAllBranches/GetAllBranches", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          // redirect
          const data = await res.json();
    
          console.log(data)
          await setBranchData(data)
    
        } else {
          // display an error
        }
    };
    useEffect(() => {
    handleInitialData();
    }, []);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} columns={12} marginTop={1}>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                            Basic Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="branch_label">Branch Name</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Branch Name'
                                labelId="branch_label"
                                id="branch"
                                {...register('branch', { required: 'Required' })}
                                error={!!errors?.branch}
                                helperText={errors?.branch ? errors.branch.message : null}
                                value={branch}
                                label="Branch Name"
                                onChange={handleBranchChange}
                                required
                            >
                                 {branchData.map((elem) => (
                                <MenuItem value={elem.name}>{elem.name}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disableFuture
                                fullwidth
                                label="Date of Birth"
                                {...register('birth_date', { required: 'Required' })}
                                error={!!errors?.birth_date}
                                helperText={errors?.birth_date ? errors.birth_date.message : null}
                                value={selectedDate}
                                onChange={(newValue) => {
                                    setSelectedDate(newValue);
                                }}
                                renderInput={(params) => <TextField sx={{ width: '100%' }} required {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="gender_label">Gender</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Gender'
                                labelId="gender_label"
                                id="gender"
                                {...register('gender', { required: 'Required' })}
                                error={!!errors?.gender}
                                helperText={errors?.gender ? errors.gender.message : null}
                                value={gender}
                                label="Gender"
                                onChange={handleGenderChange}
                                required
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    
                    {/* <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            fullWidth label="Nationality" id="nationality" required
                            {...register('nationality', { required: 'Required' })}
                            error={!!errors?.nationality}
                            helperText={errors?.nationality ? errors.nationality.message : null}
                        />

                    </Grid> */}
                    <Grid item xs={12} sm={6} md={6}>
                    <FormControl
                            fullWidth
                        >
                            <InputLabel id="nationality">Nationality</InputLabel>
                            <Select
                                fullWidth
                                placeholder='nationality'
                                labelId="nationality"
                                id="nationality"
                                value={nationality}
                                {...register('nationality', { required: 'Required' })}
                                error={!!errors?.nationality}
                                helperText={errors?.nationality ? errors.nationality.message : null}
                                label="Nationaliry"
                                onChange={handleNationalityChange}
                                required
                            >
                                {
                     country.map( (getcon)=>(
                   <MenuItem key={getcon} value={ getcon }> { getcon}</MenuItem>
                     ))
                }
                            </Select>
                        </FormControl></Grid>
                        <Grid item xs={12} sm={3} md={3}></Grid>

                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="grade_level">Expected Grade Level</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Expected Grade Level'
                                labelId="grade_level"
                                id="grade_level"
                                value={gradeLevel}
                                {...register('grade_level', { required: 'Required' })}
                                error={!!errors?.grade_level}
                                helperText={errors?.grade_level ? errors.grade_level.message : null}
                                label="Expected Grade Level"
                                onChange={handleGradeLevelChange}
                                required
                            >
                                <MenuItem value='one'>1</MenuItem>
                                <MenuItem value='two'>2</MenuItem>
                                <MenuItem value='three'>3</MenuItem>
                                <MenuItem value='four'>4</MenuItem>
                                <MenuItem value='five'>5</MenuItem>
                                <MenuItem value='six'>6</MenuItem>
                                <MenuItem value='seven'>7</MenuItem>
                                <MenuItem value='eight'>8</MenuItem>
                                <MenuItem value='nine'>9</MenuItem>
                                <MenuItem value='ten'>10</MenuItem>
                                <MenuItem value='11'>11</MenuItem>
                                <MenuItem value='12'>12</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                </Grid>
                <Box sx={{ marginTop: 7, marginBottom: 7 }} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" color="success" align='center' size="large" type="submit" >
                        Next
                    </Button>
                </Box>

            </form>


    );
}

export default BasicInformation;
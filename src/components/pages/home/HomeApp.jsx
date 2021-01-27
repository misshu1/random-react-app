import React from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    withStyles,
} from '@material-ui/core';

import { useUserDataContext } from 'contexts';
import { Container } from './style';
import { PrimaryButton } from 'components/common/Buttons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'components/common';

const StyledTableCell = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        color: 'inherit',
        padding: '1rem',
        whiteSpace: 'nowrap',
    },
    head: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontWeight: 900,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
})(TableRow);

const useStyles = makeStyles({
    table: {
        display: 'table',
        '@media only screen and (max-width: 450px)': {
            display: 'block',
        },
        overflowX: 'auto',
    },
});

export function HomeApp() {
    const { userData, isLoggedIn } = useUserDataContext();
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <Container>
            {!isLoggedIn && (
                <PrimaryButton onClick={() => navigate(ROUTES.LOGIN)}>
                    Go to Login
                </PrimaryButton>
            )}
            {isLoggedIn && (
                <PrimaryButton onClick={() => navigate(ROUTES.LOGOUT)}>
                    Go to Logout
                </PrimaryButton>
            )}
            {userData.length !== 0 && (
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell align='right'>
                                Year
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map(({ email, year }, index) => (
                            <StyledTableRow key={email + index}>
                                <StyledTableCell align='left'>
                                    {email}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {year}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            {userData.length === 0 && (
                <div className='no-data'>There is no data to show!</div>
            )}
        </Container>
    );
}

import React, {FC} from 'react'
import { Grid, Box } from '@mui/material';



interface Props {
    children: JSX.Element;
}


export const MainLayout: FC<Props> = ({children}) => (

        <Box sx={{ flexGrow: 1, marginTop: {xs: '45px', sm: 0, md: 0, lg: 0, xl: 0} }} >
            <Grid container spacing={{ xs: 2, md: 3, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 25 }}>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                    <p>LEWA</p>
                </Grid>
                <Grid item xs={4} sm={8} md={9} lg={9} xl={24}>
                    <main>{children}</main>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                    <p>PRAWA</p>
                </Grid>
            </Grid>
        </Box>
    )


import React from 'react'
import Head from 'next/head'
import {AppBar, Toolbar, Typography, Container, Link, createTheme, ThemeProvider, CssBaseline} from '@mui/material'
import useStyles from "../styles/styles"
import NextLink from 'next/link'

const Layout = ({title, children, description}) => {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.7rem',
                fontWeight: 400,
                // margin: '2rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    })
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>{title? `${title} - My Catalog`: 'My Catalog'}</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography className={classes.brand}>My Catalog</Typography>
                            </Link>
                        </NextLink>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>
                    {children}
                </Container>
                <footer className={classes.footer}>
                    <Typography>All rights reserved.</Typography>
                </footer>
            </ThemeProvider>
        </div>
    )
}

export default Layout
import Layout from '../components/Layout'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material"
import data from "../utils/data"
import useStyles from "../styles/styles"
import NextLink from "next/link"

export default function Home() {
    const classes = useStyles()
    return (
        <Layout>
            <h1>Products</h1>
            <Grid container spacing={3}>
                {data.products.map((product) => (
                    <Grid item md={4} key={product.name}>
                        <Card>
                            <NextLink href={`/product/${product.slug}`} passHref>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    title={product.name}/>
                                <CardContent>
                                    <Typography fontWeight='bold'>
                                        {product.brand}
                                    </Typography>
                                    <Typography className={classes.long}>
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            </NextLink>
                            <CardActions>
                                <Typography>₽ {product.price}</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>

    )
}

import React from 'react'
import {useRouter} from "next/router"
import data from "../../utils/data"
import Layout from "../../components/Layout"
import useStyles from "../../styles/styles"
import NextLink from "next/link"
import {Button, Card, Grid, Link, List, ListItem, Typography} from "@mui/material"
import Image from "next/image"


const ProductScreen = () => {
    const classes = useStyles()
    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find(a => a.slug === slug)
    if (!product) {
        return <div>Product not Found</div>
    }
    return (
        <Layout title={product.name} description={product.description + '!' + ' ' + product.name + ' ' + product.brand}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>
                        <Typography>Каталог</Typography>
                    </Link>
                </NextLink>
            </div>
            <div>
                <Typography component='h1' variant='h1' sx={{ m: '2rem 0'}}>
                    {product.name} {product.brand}
                </Typography>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={800}
                        layout="responsive">
                    </Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography>Category: {product.category}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Brand: {product.brand}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Rating: {product.raiting} stars ({product.numReviews} reviews)
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Description: {product.discount ? `${product.description}! ${product.name} ${product.brand} со скидкой ${product.discount}%` : `${product.name} ${product.brand}`}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Цена:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontWeight: 'bold'}}>₽ {product.price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>В наличии:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.instock>0 ? 'Да':'Нет на складе'}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant='contained' color='primary' sx={{ fontWeight: 'bold'}}>
                                    Купить сейчас
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ProductScreen
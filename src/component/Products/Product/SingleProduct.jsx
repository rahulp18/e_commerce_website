import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyle from './style'
const SingleProduct = ({product,onAddCart}) => {
    // console.log(product);
     
    const classes=useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h6' gutterBottom>
                           {product.name}
                    </Typography>
                    <Typography variant='h6' >
                           {product.price.formatted_with_symbol}
                    </Typography>

                
                </div>
                <Typography  dangerouslySetInnerHTML={{ __html:product.description}} variant='body2' color='textSecondary'  />
                     
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
      <IconButton aria-label='Add to Cart' onClick={()=>onAddCart(product.id,1)}><AddShoppingCart/></IconButton>
            </CardActions>
        </Card>
    )
}

export default SingleProduct

//? CSS AND IMGS
import { StyledProducts } from './styles'
import Button from '../Button'
import UINumber from '../UINumber'

const Product = ({ product, handleClick }) => {
  return (
    <StyledProducts>
      <div id='productImgBox'>
        <img src={product.img} alt='' />
      </div>
      <div id='productInfoBox'>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>
          <UINumber format='0.0,'>{product.price}</UINumber>
        </span>
        <Button green onClick={() => handleClick(product.id)}>
          Adicionar
        </Button>
      </div>
    </StyledProducts>
  )
}

export default Product

import { StyledCartTotal } from './styles'
import Button from '../Button'
import UINumber from '../UINumber'

const CartTotal = ({ cartTotal, width, setModalClearCart }) => {
  return (
    <StyledCartTotal width={width}>
      <div>
        <p>Total</p>
        <span>
          <UINumber format='0.0,'>{cartTotal}</UINumber>
        </span>
      </div>

      <Button onClick={() => setModalClearCart(true)}>Remover Todos</Button>
    </StyledCartTotal>
  )
}

export default CartTotal

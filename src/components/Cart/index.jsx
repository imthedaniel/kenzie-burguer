import { StyledCart } from './styles'
import CartProduct from '../CartProduct'
import CartTotal from '../CartTotal'

const Cart = ({
  currentSale,
  setModalClearCart,
  handleCartProduct,
  cartTotal,
}) => {
  return (
    <StyledCart>
      <div id='titleCart'>
        <h3>Carrinho de compras</h3>
      </div>

      {currentSale.length > 0 ? (
        <>
          <ul>
            {currentSale
              .map((prod) => (
                <li key={prod.id}>
                  <CartProduct
                    prod={prod}
                    handleCartProduct={handleCartProduct}
                  />
                </li>
              ))
              .reverse()}
          </ul>
          <CartTotal
            cartTotal={cartTotal}
            setModalClearCart={setModalClearCart}
          />
        </>
      ) : (
        <ul id='emptyCartBox'>
          <div id='emptyCartInfo'>
            <h3>O seu carrinho está vazio.</h3>
            <p>Adicione itens</p>
          </div>
        </ul>
      )}
    </StyledCart>
  )
}

export default Cart

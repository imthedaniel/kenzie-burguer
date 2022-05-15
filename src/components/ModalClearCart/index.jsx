import { StyledModal } from './styles'

const ModalClearCart = ({ modalClearCart, setModalClearCart, clearCart }) => {
  return (
    <StyledModal>
      <div className={`modal ${modalClearCart ? 'open' : ''}`}>
        <article className='content-wrapper'>
          <button
            onClick={() => setModalClearCart(false)}
            className='close'
          ></button>
          <header className='modal-header'>
            <h2>Alerta</h2>
          </header>
          <div className='content'>
            <p>Limpar todos os itens do carrinho?</p>
          </div>
          <footer className='modal-footer'>
            <button onClick={clearCart} className='action'>
              Sim
            </button>
            <button onClick={() => setModalClearCart(false)} className='action'>
              Não
            </button>
          </footer>
        </article>
      </div>
    </StyledModal>
  )
}

export default ModalClearCart

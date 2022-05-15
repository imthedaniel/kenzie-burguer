//* COMPONENTES
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

//? CSS AND IMGS
import { GlobalStyle } from './styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css'
import { StyledApp } from './styles'

//! LIBS AND OTHERS
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import api from './services/api'
import ModalClearCart from './components/ModalClearCart'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [modalClearCart, setModalClearCart] = useState(false)

  useEffect(() => {
    api
      .get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => setProducts(response.data))
    totalCurrentSale()
  }, [currentSale])

  // * FUNCTIONS
  const removeSpecial = (str) => {
    const nStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return nStr.toLowerCase()
  }

  const showProducts = (string) => {
    const newString = removeSpecial(string)

    const prodFound = products.filter((prod) => {
      return (
        removeSpecial(prod.name).includes(newString) ||
        removeSpecial(prod.category).includes(newString)
      )
    })
    setFilteredProducts(prodFound)
  }

  const handleClick = (productId) => {
    const checkProdCart = currentSale.find((prod) => prod.id === productId)
    let prodName = ''

    if (checkProdCart === undefined) {
      const selectedProd = products.find((prod) => {
        prodName = prod.name
        return prod.id === productId
      })
      setCurrentSale([...currentSale, selectedProd])

      toast.success(`${prodName} adicionado ao carrinho.`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.error('Produto já existente no carrinho!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleCartProduct = (productId, productName) => {
    const newCurrentSale = currentSale.filter((prod) => prod.id !== productId)
    setCurrentSale(newCurrentSale)

    toast.success(`${productName} removido do carrinho.`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const totalCurrentSale = () => {
    const result = currentSale.reduce((acc, prod) => acc + prod.price, 0)
    setCartTotal(result)
  }

  const clearCart = () => {
    setCurrentSale([])

    setModalClearCart(false)

    toast.success('Carrinho limpo com sucesso.', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <>
      <ModalClearCart
        modalClearCart={modalClearCart}
        setModalClearCart={setModalClearCart}
        clearCart={clearCart}
      />
      <ToastContainer />
      <GlobalStyle />
      <Header
        showProducts={showProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <StyledApp>
        <section>
          <ProductsList
            products={filteredProducts.length > 0 ? filteredProducts : products}
            handleClick={handleClick}
          />
        </section>
        <aside>
          <Cart
            currentSale={currentSale}
            cartTotal={cartTotal}
            handleCartProduct={handleCartProduct}
            setModalClearCart={setModalClearCart}
          />
        </aside>
      </StyledApp>
    </>
  )
}

export default App

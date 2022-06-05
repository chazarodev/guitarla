import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])

  const agregarCarrito = producto => {

    //Identificar si un elemento ya está en el carrito utilizando el método some que nos retorna true o false
    if (carrito.some(articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map(articulo => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }

  }

  return (
    <Component 
      {...pageProps} 
      carrito={carrito} //estado se extrae en ./carrito
      agregarCarrito={agregarCarrito} //Función se extrae en ./guitarras/[url].js
    />
  )
}

export default MyApp

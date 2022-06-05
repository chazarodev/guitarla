import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])

  //Utilizando useEffect para inicializar el estado con los datos de LocalStorage
  useEffect(() => { //En caso de estar vacío LS (??) iniciamos como arreglo vacío
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
    setCarrito(carritoLS)
  }, [])
  

  useEffect(() => { //Agregando el carrito a localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

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

  //Función para actualizar cantidad del select
  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map(articulo => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  return (
    <Component 
      {...pageProps} 
      carrito={carrito} //estado se extrae en ./carrito
      agregarCarrito={agregarCarrito} //Función se extrae en ./guitarras/[url].js
      actualizarCantidad={actualizarCantidad} //Función se extrae en ../../components/Carrito.js
    />
  )
}

export default MyApp

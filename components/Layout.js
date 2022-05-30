import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
          <title>Guitar LA - {pagina}</title>
          <meta name="description" content="Sitio web de ventas de guitarras" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Maitree:wght@200;400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Header 
          guitarra={guitarra}
        />
        {children}
        <Footer />
    </div>
  )
}

//Definir un prop por defecto para las rutas donde no pasemos la guitarra en el Layout
Layout.defaultProps = {
  guitarra: null
}

export default Layout
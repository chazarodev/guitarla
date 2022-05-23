import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => { //Extraemos las entradas de la consulta a la API

    console.log(entradas)//Esta información ya se verá en el lado del cliente

    /** 
    
    La manera tradicional de hacer un fecth a la url

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'http://localhost:1337/blogs'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
        }
    }, [])

    */
    
    return (
        <Layout
            pagina={'Blog'}
        >
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>
                <div className={styles.blog}>
                    {entradas.map(entrada => (
                        <Entrada 
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticProps() { //Función para consultar datos de una API en NEXT.js

    //getServerSideProps consulta al servidor en cada request
    //getStaticProps realiza una consulta al compilar el proyecto en el build y mantiene la información estática

    /*Nota: Esta función esta corriendo en el servidor, es decir, esta utilizando server side rendering
    por lo que, realizar un console.log para ver la información por consola del browser (cliente) de la API no resultará */
    
    //Realizamos la consulta a la API
    const url = 'http://localhost:1337/blogs'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    console.log(entradas); //La infromación se verá en la consola donde corre el servidor, no en la del cliente (browser)

    return { //Siempre se debe de retornar un objeto
        props: { //Al ser una función que se está exportando, automáticamente los props se hacen disponibles en este componente
            entradas
        }
    }
}

export default Blog
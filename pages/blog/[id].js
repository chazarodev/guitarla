import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers/index"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({entrada}) => {

    const {contenido, imagen, published_at, titulo} = entrada

    // const router = useRouter()
    // console.log(router.query) Leemos la información del router

    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image 
                        layout="responsive"
                        width={800}
                        height={600}
                        src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
                        alt={`Imagen ${titulo}`}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

/*
ServerSideProps automáticamente toma query por el routeing dinámico, por lo que, lo podemos pasar por props {}
export async function getServerSideProps({query: {id}}) { 

    const url = `http://localhost:1337/blogs/${id}`
    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}
*/

//Función staticPaths, se utiliza en conjunto con getStaticProps
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    //iterar sobre cada una de las entradas
    const paths = entradas.map(entrada => ({
        params: {id: entrada.id.toString()}//Convertir el id en string para poder ser leído en las rutas
    }))

    return { //Lo que se retorna, se hace disponible en getStaticProps
        paths,
        fallback: false
    }
}

//Código con staticProps con routing dinámico
export async function getStaticProps({params: {id}}) {//Al retornar paths una función arriba, lo reemplazamos por query 
    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

export default EntradaBlog
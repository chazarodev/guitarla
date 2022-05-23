import { useRouter } from "next/router"

const EntradaBlog = () => {

    const router = useRouter()

    console.log(router.query)//Leemos la información del router

    return (
        <div>
            <h1>Desde entrada</h1>
        </div>
    )
}

//ServerSideProps automáticamente toma query por el routeing dinámico, por lo que, lo podemos pasar por props {}
// export async function getServerSideProps({query: {id}}) { 

//     const url = `http://localhost:1337/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }


//Función staticPaths, se utiliza en conjunto con getStaticProps
export async function getStaticPaths() {
    const url = 'http://localhost:1337/blogs'
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

    const url = `http://localhost:1337/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

export default EntradaBlog
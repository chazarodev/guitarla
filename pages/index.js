import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
  return (
    <Layout 
      pagina={'Inicio'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <Listado 
          guitarras={guitarras}
        />
      </main>
      <Curso 
        curso={curso}
      />
      <section className='contenedor'>
        <ListadoBlog 
          entradas={entradas}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  //Consumir más de una url al mismo tiempo
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc` //Aplicar filtro para limitar la respuesta

  //Utilizamos un promise para realizar un fetch a cada una de las url's
  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])
  //Utilizamos un promise para obtener la respuesta json
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props : {
      guitarras,
      curso,
      entradas
    }
  }
}

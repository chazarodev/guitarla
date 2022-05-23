import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina={'Nosotros'}
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src={'/img/nosotros.jpg'} alt={'Imagen sobre nosotros'} />
          <div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis, ipsum et ornare hendrerit, sapien lectus elementum ante, vitae efficitur quam nunc at orci. Aenean blandit metus ac tortor luctus, vel ultrices velit consectetur. Morbi et cursus enim. Ut pulvinar diam ac maximus euismod. Duis eu massa id lectus malesuada aliquet. Nunc eu ligula laoreet, scelerisque neque eget, semper enim. Phasellus rutrum ullamcorper erat, non molestie justo varius eu. Nullam sollicitudin mi ut neque porttitor, eu varius elit posuere. Donec convallis ullamcorper risus, nec consequat purus dapibus sit amet. Vestibulum in nibh sit amet erat tempor gravida. Mauris vel fermentum quam. Fusce ac pharetra lacus. Quisque euismod metus ac egestas accumsan. Sed malesuada mauris lorem, sed molestie quam egestas nec. Vestibulum facilisis nisi ut metus convallis porta.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
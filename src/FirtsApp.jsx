
import PropTypes from 'prop-types'

export const FirtsApp = ({title, subtitle, name}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}



FirtsApp.propTypes ={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string 
}

FirtsApp.defaultProps ={
  title: 'No hay Titulo',
  name: 'Henry Gonzalez',
  subtitle: 'No ha subtitulo'
}

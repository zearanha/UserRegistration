import PropTypes from 'prop-types'
import { Button } from './style'

function DefaultButton({ children, theme, ... props }){

    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}


DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton
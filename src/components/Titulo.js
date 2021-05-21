import React, {Fragment} from 'react'
import { Text} from 'react-native'
import Estilo from './estilo'

export default props => {
    
    return (
        //React.Fragment retorna várias props
        <Fragment>
            <Text style={Estilo.fontG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    )
}
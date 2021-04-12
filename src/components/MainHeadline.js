import { Component } from 'react'; 
import Box from '@material-ui/core/Box'

class MainHeadline extends Component {

    render() {

        return (
            <div style={{ marginLeft: '0%', marginTop: '60px', width:'100%' }}>
            <Box color= "white" bgcolor= "#9e9e9e" p={1}>
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>
            </Box>
            </div>
        )
    }
}

export default MainHeadline
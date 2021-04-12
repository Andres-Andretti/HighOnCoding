import { Component } from 'react';
import Box from '@material-ui/core/Box'

class Menu extends Component {

    render() {

        return (
            <div style={{ marginLeft: '0%', marginTop: '10px', width:'100%'}}>
            <Box color= "white" bgcolor= "palevioletred" p={1}>
                <h2><b>HighOnCoding</b> | Home | Categories</h2>
            </Box>
            </div>
        )
    }

}

export default Menu
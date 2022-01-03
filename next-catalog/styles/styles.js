import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(
    {
        navbar: {
            backgroundColor: '#2a2f38',
            '& a': {
                color: '#fede21',
            },
        },
        main: {
            minHeight: '80vh',
        },
        footer: {
            backgroundColor: '#d3d1cb',
            textAlign: 'center',
            color: '#fff',
        },
        brand: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '1.5rem',
        },
        long: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: '1.0rem',
            color: '#2a2a2a',
            lineHeight: '1.4',
            // wordWrap: 'break-word',
            // textTransform: 'none',
            // marginBottom: '8px',
            marginTop: '4px',
            // fontWeight: '400',
        },
        section: {
            margin: '10px 0',
            // marginBottom: 10,
        }
    }
)

export default useStyles
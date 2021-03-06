export const preloaderStyle = theme => {
    return ({
        container: {
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        },
        loader: {
            border: '16px solid #f3f3f3',
            borderRadius: '50%',
            borderTop: '16px solid #3498db',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite'
        },
        '@keyframes spin': {
            '0% ': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        }

    })
}
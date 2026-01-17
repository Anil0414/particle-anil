export const Alert = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: '#f8d7da',
                color: 'black',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #f5c6cb',
                marginBottom: '10px',
            }}
        >
            {children}
        </div>
    );
};

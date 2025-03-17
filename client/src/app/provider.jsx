import AuthProvider from './context/AuthProvider.jsx';

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AppProvider;
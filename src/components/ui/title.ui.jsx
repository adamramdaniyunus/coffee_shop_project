const Title = ({ children, isUppercase }) => {
    return (
        <h1 className={`text-xl md:text-5xl font-bold mb-4 ${isUppercase && 'uppercase'}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {children}
        </h1>
    )
}

export default Title
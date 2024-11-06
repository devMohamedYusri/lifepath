
function Container({className,children,...rest}) {
    return (
        <div className={`bg-white rounded-md ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Container

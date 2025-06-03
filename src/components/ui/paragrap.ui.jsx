const Paragraph = ({ children, hasMarginBottom, isLarge}) => {
  return (
    <p className={`text-third ${isLarge ? "text-lg" : "text-md"} ${hasMarginBottom && 'mb-6'}`}>
      {children}
    </p>
  )
}

export default Paragraph
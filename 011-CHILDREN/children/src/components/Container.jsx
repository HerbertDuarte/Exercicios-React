const Container = ({children}) => {
  return (
    <div>
      <h2>Container title</h2>
      <div>
        <p>here my children prop ={'>'} {children}</p>
      </div>
    </div>
  )
}

export default Container
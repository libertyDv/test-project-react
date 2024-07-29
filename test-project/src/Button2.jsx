function Button2(){

    const handleClick = (e) => e.target.textContent = "ay"

    return (<button onClick={(e) => handleClick(e)}>Click me 🐱‍💻</button>)



}

export default Button2
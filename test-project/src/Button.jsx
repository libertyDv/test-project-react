function Button() {

    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count ++;
            console.log(`${name} you clicked me ${count} times`)
        } else {
            console.log(`${name} para`)
        }

    }

    return (<button onClick={() => handleClick("tu")}>Click me 🐱‍💻</button>)

}

export default Button
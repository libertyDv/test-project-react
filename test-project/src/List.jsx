function List() {
    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 }]; // tengo un array de objetos

    //fruits.sort((a, b) => a.name.localeCompare(b.name)) // ordena por nombre alfabeticamente
    //fruits.sort((a, b) => b.name.localeCompare(a.name)) // ordena por nombre alfabeticamente del reves
    // fruits.sort((a, b) => a.calories - b.calories) // ordena numericamente
    //fruits.sort((a, b) => b.calories - a.calories) // ordena numericamente del reves

    const lowCalFruits = fruits.filter(fruit => fruit.calories <100); // poniendo esto, solo se muestran las calorias inferiores a 100l 

    // le añado una key ya que react pide una key unica para cada elemento
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
        {lowCalFruit.calories}</li>) // creo una constante y le hago un map y convierto cada elemento de fruits en lista

    return (<ul>{listItems}</ul>)
}

export default List
// React.createElement( /* type */, /* props */, /* content */ );

const food = [
    { id: '0', product: 'Milk' },
    { id: '1', product: 'Coffee' },
    { id: '2', product: 'Bread' }
]

const element = React.createElement('ol', {
        // properties
        className: 'welcome-message'
    },
    // NESTING
    food.map((product) => (
        React.createElement('li', {
            key: product.id
        }, 
        product.product)
    ))
);

ReactDOM.render(
    element,
    document.querySelector('#root')
)


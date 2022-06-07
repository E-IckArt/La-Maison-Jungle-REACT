import { useState } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';

const App = () => {
    const [cart, updateCart] = useState([]);

    return (
        <div>
            <Banner />
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList />
            <Footer />
        </div>
    );
};

export default App;

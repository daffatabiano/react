import Navbar from "../components/Navbar";
import '../style.css'

const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="home">
            <img src="https://i.pinimg.com/originals/cb/11/5c/cb115c5c17fd5b8193effa816c01a6c6.jpg" alt="outside of restaurant" />

            <div className="descHom">
            <h1>RestauRient!</h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, non ex. Atque aliquam doloribus fugit consequuntur perferendis quibusdam dolore veniam magnam quisquam voluptas similique voluptatem eos voluptatibus, nulla deserunt consequatur suscipit ex ipsa laboriosam! Eos voluptatibus veniam hic? Praesentium, ducimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quam quibusdam voluptatem, unde commodi quod earum voluptates molestias necessitatibus quaerat aliquam magnam reiciendis dolore corrupti!</p>
            </div>
            </div>

        </div>
    )
}

export default Home;
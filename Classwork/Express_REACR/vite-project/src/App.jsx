import {useState, useEffect} from 'react'

const App = () => {
  const[products, setProducts] = useState([]);
  const[name,setName] = useState('');
  const[price,setPrice] = useState('');
  const[category,setCategory] = useState('');

  const getProducts= async()=>{
    const response= await fetch('http://localhost:4000/api/products');
    const data= await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct=async(e)=>{
    e.preventDefault();
    const product={
      name:name,
      price:price,
      category:category
    };
    await fetch('http://localhost:4000/api/products', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product)
    });
    setName('');
    setPrice('');
    setCategory('');
    getProducts();
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:4000/api/products/${id}`, {
      method: "DELETE"
    });
    getProducts();
  }

  return (
    <div>
      <h1>Product Management APP</h1>
     <form onSubmit={addProduct}>
      <input type="text" placeholder='product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="number" placeholder='price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/> 
      <input type="text" placeholder='category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
      <button type="submit">Add product</button>
     </form>
     <hr/>
      <table border="1" cellPadding={10} >
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {products.map((product)=>(
           <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td><button onClick={()=>{deleteProduct(product.id)}}>delete product</button></td>
           </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
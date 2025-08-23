
const products = [
    { id: 1, name: 'Narayanisilks', price: 12999, description: 'A cool product.', image: 'https://narayanisilks.in/cdn/shop/products/sa-pa-h10531644-lipi-fl-1_53892a58-bc00-4a2c-96bf-354ea1036ca8.jpg?v=1698747134    ' },
    { id: 2, name: 'Narayanisilks', price: 5899, description: 'Another great product.', image: 'https://grabandpack.com/wp-content/uploads/2023/12/Weaving-Silk-Kalamkari-Pattu-Saree-gnp230022.jpg' },
    { id: 3, name: 'Narayanisilks', price: 7899, description: 'Amazing product for you.', image: 'https://subhamgrand.in/cdn/shop/files/4J9A6003copy.jpg?v=1713267500&width=600' },
    { id: 4, name: 'Narayanisilks', price: 13999, description: 'Amazing product for you.', image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/g/o/golden-weaved-zari-broad-border-silk-saree-for-wedding-sarv177894-1.jpg'},
    { id: 5, name: 'Narayanisilks', price: 15849, description: 'Amazing product for you.', image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/s/i/silk-weaved-zari-broad-border-teal-green-saree-sarv180272-1.jpg'},
    { id: 6, name: 'Narayanisilks', price: 12499, description: 'Amazing product for you.', image: 'https://assets0.mirraw.com/images/11495793/image_zoom.jpeg?1683879820'},
    { id: 7, name: 'Narayanisilks', price: 24999, description: 'Amazing product for you.', image: 'https://rooprekha.com/cdn/shop/products/photo_2021-09-07_12-50-02.jpg?v=1680672133&width=1445'},
    { id: 8, name: 'Narayanisilks', price: 13649, description: 'Amazing product for you.', image: 'https://rukminim2.flixcart.com/image/750/900/kxjav0w0/sari/l/x/v/free-rajdhani-designer-saree-designer-blouse-designer-lehenga-original-imag9yqupbfkqupu.jpeg?q=20&crop=false'},
  ];
  
  
  
  
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      
  
      const isInCart = cart.some(item => item.id === product.id);
      
      productCard.innerHTML = `
        <div class="card mb-4 product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>₹${product.price.toFixed(2)}</strong></p>
          </div>
          <div class="card-footer">
            ${isInCart ? 
              `<button class="btn btn-success btn-sm" onclick="goToCart()">Go to Cart</button>` : 
              `<button class="btn btn-custom btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>`}
            <button class="btn btn-warning btn-sm" onclick="buyNow(${product.id})">Buy Now</button>
          </div>
        </div>
      `;
      productList.appendChild(productCard);
    });
  }
  
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
      renderProducts(); 
    }
  }
  
  
  
  function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    addToCart(productId);
      showPage('cart'); 
      document.getElementById('order-form').reset();
    
      
      
    }
  
  
  
  function goToCart() {
    const cartLink = document.getElementById('cart-link');
    cartLink.click();
  }
  
  
  function updateCart() {
    
    const cartLink = document.getElementById('cart-link');
    cartLink.innerHTML = `Cart (${cart.length})`;
  
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
  
    let total = 0;
    cart.forEach(item => {
      total += item.price;
      const cartItem = document.createElement('li');
      cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      cartItem.innerHTML = `
        ${item.name} - ₹${item.price.toFixed(2)}
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = total.toFixed(2);
  }

  
  function showPage(page) {
    const homePage = document.getElementById('home-page');
    const shopPage = document.getElementById('shop-page');
    const cartPage = document.getElementById('cart-page');
    const contactPage = document.getElementById('contact-us');
    
    
    // Hide all pages
    homePage.style.display = 'none';
    shopPage.style.display = 'none';
    cartPage.style.display = 'none';
    contactPage.style.display = 'none';
  
    // Show the selected page
    if (page === 'home') {
      homePage.style.display = 'block';
    } else if (page === 'shop') {
      shopPage.style.display = 'block';
    } else if (page === 'cart') {
      cartPage.style.display = 'block';
    } else if (page === 'contact') {
      contactPage.style.display = 'block';
    }
}

// Event listeners for navigation links
document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    showPage('home');
});

document.getElementById('shop-link').addEventListener('click', function (e) {
    e.preventDefault();
    showPage('shop');
});

document.getElementById('cart-link').addEventListener('click', function (e) {
    e.preventDefault();
    showPage('cart');
});

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault();
    showPage('contact');
});
// Example Shop Now button integration:
document.getElementById('shop-now-button').addEventListener('click', function(e) {
  e.preventDefault();
  showPage('shop');
});

  
  
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('customer-name').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const address = document.getElementById('delivery-address').value.trim();
  const phone = document.getElementById('mobile-number').value.trim();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  let total = 0;
  cart.forEach(item => total += Number(item.price));

  if (name && email && address && phone && cart.length > 0) {
    const orderData = {
      name,
      email,
      address,
      phone,
      items: cart,
      total
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Order request failed');
      }
      return response.json();
    })
    .then(data => {
      alert(`✅ Order placed successfully! Your Order ID: ${data.orderId}`);
      localStorage.removeItem('cart');
      window.location.reload();
    })
    .catch(err => {
      console.error('❌ Order error:', err);
      alert('❌ Failed to place order. Please try again later.');
    });
  } else {
    alert('Please fill out all fields and make sure your cart is not empty.');
  }
});


  //sdad
 

  renderProducts();
  updateCart();
  showPage('shop');
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart)); 
      updateCart();
      renderProducts(); 
    }
  }
  
  
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCart();
    renderProducts(); 
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
  });
  
  
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    
    if (name && email && message) {
      
      alert("Your message has been successfully sent!");
  
      
      document.getElementById('contact-form').reset();
    } else {
      
      alert("Please fill in all fields before submitting.");
    }
  });
  
  
  renderProducts();
  
  
  showPage('shop');

  



// Define Order Schema


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'store.html'));
});

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Narayanisilks', price: 12999, description: 'A cool product.', image: 'https://narayanisilks.in/cdn/shop/products/sa-pa-h10531644-lipi-fl-1_53892a58-bc00-4a2c-96bf-354ea1036ca8.jpg?v=1698747134' },
    { id: 2, name: 'Narayanisilks', price: 5899, description: 'Another great product.', image: 'https://grabandpack.com/wp-content/uploads/2023/12/Weaving-Silk-Kalamkari-Pattu-Saree-gnp230022.jpg' },
    { id: 3, name: 'Narayanisilks', price: 7899, description: 'Amazing product for you.', image: 'https://subhamgrand.in/cdn/shop/files/4J9A6003copy.jpg?v=1713267500&width=600' },
    { id: 4, name: 'Narayanisilks', price: 13999, description: 'Amazing product for you.', image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/g/o/golden-weaved-zari-broad-border-silk-saree-for-wedding-sarv177894-1.jpg'},
    { id: 5, name: 'Narayanisilks', price: 15849, description: 'Amazing product for you.', image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/s/i/silk-weaved-zari-broad-border-teal-green-saree-sarv180272-1.jpg'},
    { id: 6, name: 'Narayanisilks', price: 12499, description: 'Amazing product for you.', image: 'https://assets0.mirraw.com/images/11495793/image_zoom.jpeg?1683879820'},
    { id: 7, name: 'Narayanisilks', price: 24999, description: 'Amazing product for you.', image: 'https://rooprekha.com/cdn/shop/products/photo_2021-09-07_12-50-02.jpg?v=1680672133&width=1445'},
    { id: 8, name: 'Narayanisilks', price: 13649, description: 'Amazing product for you.', image: 'https://rukminim2.flixcart.com/image/750/900/kxjav0w0/sari/l/x/v/free-rajdhani-designer-saree-designer-blouse-designer-lehenga-original-imag9yqupbfkqupu.jpeg?q=20&crop=false'},
  ];
  res.json(products);
});

// Save order to MongoDB


  
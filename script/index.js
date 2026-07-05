// API: 'https://dummyjson.com/products'
const ProductFetch = async () => {
  try {
    let Res = await fetch('https://dummyjson.com/products')
    let data = await Res.json()
    console.log(data?.products)
    display(data?.products)
  } catch (error) {
    console.log(error)
  }
}

ProductFetch()

// create an display function to map and display product

function display(data) {
  if (!data) return
  let container = document.getElementById('Product_grid')
  container.innerHTML = null

  data?.map((el) => {
    let box = document.createElement('div')
    box.classList.add('product_inner');
    
    box.addEventListener("click", ()=>{
       routeRedirect(el);
    })

    let image = document.createElement('img')
    image.setAttribute('src', el.thumbnail)

    let Title = document.createElement('h4')
    Title.innerText = el.title

    let category = document.createElement('p')
    let categorySpan = document.createElement('span')
    categorySpan.innerText = `Category: ${el.category}`
    categorySpan.style.color = 'red'
    category.append(categorySpan)

    let price = document.createElement('p')
    price.innerText = `Price: ${Math.floor(el.price)}`

    box.append(image, Title, category, price)

    container.append(box)
  })
}

function routeRedirect(el){
   const id = el.id
   console.log(id);
}
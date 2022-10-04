


window.addEventListener('DOMContentLoaded', function() {

    let products = document.querySelectorAll('.card'),
    buttons = document.querySelectorAll('button'),
    openBtn = document.querySelector('.basket');
    let counter = document.querySelector('.counter');
    let state = 0;

    function createCart() {
        let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closeBtn = document.createElement('button');
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');


        heading.textContent = 'In your cart:';
        closeBtn.textContent = "Close";

       document.body.appendChild(cart);


       cart.appendChild(heading);
       cart.appendChild(field);
       cart.appendChild(closeBtn);
       
    }
    
    createCart();



    let field = document.querySelector('.cart-field'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.close')

    function openCart() {
        cart.style.display = 'block';
        if(state === 0) {
            alert("Your basket is empty")
        } 
        
    }

    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);
   

    function render () {
        counter.textContent = state.toString(); 
    }


   function createbtn() {
    const showMoreBtn = document.createElement("button");
            showMoreBtn.classList.add('showBtn');
            showMoreBtn.textContent = "Show more";
            cart.appendChild(showMoreBtn);
   }


    
    
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let item = products[i].cloneNode(true),
            btn = item.querySelector('button');
            
            

            btn.remove();
            field.appendChild(item);
            state++;
            render();
            // products[i].remove();
        })
    }

    
});




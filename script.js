function header(){
    // creat header of the page
    let header = document.createElement("div")
    header.className = "header";

    // create logo of the page 
    let logo = document.createElement("h2");
    logo.className = "logo";
    logo.innerHTML = "Product"
    header.appendChild(logo)

    // create links of the page
    let links = document.createElement("ul");
    links.className = "links";

    // create element of the links
    let li1 = document.createElement("li");
    li1.innerHTML = "Home";
    let li2 = document.createElement("li");
    li2.innerHTML = "About";
    let li3 = document.createElement("span");
    li3.innerHTML = "Contact";
    let li4 = document.createElement("li");
    li4.innerHTML = "Login";

    // add element to the links
    links.appendChild(li1)
    links.appendChild(li2)
    links.appendChild(li2)
    links.appendChild(li4)

    // styling on division header
    header.style.cssText = "display:flex; justify-content:space-between; padding:10px 20px;align-items:center";

    // styling on logo
    logo.style.cssText = "color:#2196f3; font-size:30px; cursor:pointer;margin:0;padding:0";

    // styling on links
    links.style.cssText="list-style:none; display:flex; gap:15px ;color:#777;padding:0;margin:0"
    header.appendChild(links)
    document.body.appendChild(header)
}
header()

function landing(){
    // creat landing of the page
    let landing =document.createElement("div");
    landing.className="landing";

    for(let i=1;i<=15;i++){
        // create product of the page
        let product = document.createElement("div");
        product.className = "product";

        // Create Elements of product
        let h2 = document.createElement("h2")
        h2.innerHTML = `${i}`
        h2.style.cssText="font-size:35px;margin:0 "
        let span=document.createElement("span")
        span.innerHTML="product"
        span.style.cssText="color:#777 ;font-size:15px"
        // add to product
        product.appendChild(h2)
        product.appendChild(span)
        landing.appendChild(product)
        // styling on product
        product.style.cssText = " background:white;text-align:center;padding:15px 0;"
    }

    // styling on landing
    landing.style.cssText ="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:20px;background:#777;padding:20px;";



    document.body.appendChild(landing)
}
landing()

function footer(){
    // create footer of the page
    let footer = document.createElement("div");
    footer.className = "footer";
    let p = document.createElement("p");
    p.innerHTML = "Copyright 2024 ";
    p.style.cssText = "color:white; font-size:15px;"
    footer.appendChild(p)
    footer.style.cssText="text-align:center;background:green;padding:20px 0"
    document.body.appendChild(footer)
}
footer()
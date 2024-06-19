

let products = ` [
    {
      "image": "grid pic 5.webp",
      "title": "Mechanical Keyboard",
      "description": "A high-quality mechanical keyboard with customizable RGB lighting and Cherry MX switches.",
      "price": 99.99
    },
    {
      "image": "card pic 7.jpg",
      "title": "Wireless Gaming Mouse",
      "description": "Ergonomic wireless gaming mouse with adjustable DPI settings and programmable buttons.",
      "price": 49.99
    },
    {
      "image": "grid pic 1.webp",
      "title": "27-inch 4K Monitor",
      "description": "Ultra HD 4K monitor with HDR support, 1ms response time, and 144Hz refresh rate.",
      "price": 399.99
    },
    {
      "image": "grid pic 7.jpeg",
      "title": "Gaming Headset",
      "description": "Surround sound gaming headset with noise-canceling microphone and comfortable ear cushions.",
      "price": 79.99
    },
    {
      "image": "card pic 14.jpg",
      "title": "USB-C Hub",
      "description": "Multi-port USB-C hub with HDMI, USB 3.0, and Ethernet ports, compatible with all USB-C devices.",
      "price": 29.99
    },
    {
      "image": "webcam.jpg",
      "title": "HD Webcam",
      "description": "1080p HD webcam with built-in microphone, perfect for video conferencing and streaming.",
      "price": 59.99
    },
    {
      "image": "https://example.com/images/external-drive.jpg",
      "title": "External SSD",
      "description": "Portable external SSD with 1TB capacity, USB 3.1 Gen 2 interface for fast data transfer.",
      "price": 149.99
}]
`
let parseproduct = JSON.parse(products)
console.log(parseproduct);
        for (let i = 0; i < 6; i++) {
            document.querySelector(".row-one").innerHTML +=
                `
            <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
             <div class="card" style="width: 18rem; height: 18rem;">
             <img src="${parseproduct[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
           <h4 class="card-title">${parseproduct[i].title}</h4>
          </div>
         </div>
            </div>
     `
        }
















// let link = "https://fakestoreapi.com/products"
// fetch(link)
// .then(Response => Response.json())
//     .then(data => {
//  console.log(data);
//        for (let i = 6; i < 12; i++) {
//             document.querySelector(".row-two").innerHTML +=
//                 `
//             <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
//              <div class="card">
//              <img src="${data[i].image}" class="card-img-top" alt="...">
//              <div class="card-body">
//              <h4 class="card-title">${data[i].title}</h4>
//               </div>
//              </div>
//             </div>
//        `
//         }
//       })
//     .catch(error => {
//         console.log(error);
//     })
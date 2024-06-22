let products = ` [
  {
    "image": "Mechanical Keyboard.webp",
    "title": "Mechanical Keyboard",
    "description": "A high-quality mechanical keyboard with customizable RGB lighting and Cherry MX switches.",
    "price": 99.99,
    "Product_Page":"Mechinalkeyboard.html"
  },
  {
    "image": "Wireless Gaming Mouse.jpg",
    "title": "Gaming Mouse",
    "description": "Ergonomic wireless gaming mouse with adjustable DPI settings and programmable buttons.",
    "price": 49.99
  },
  {
    "image": "27-inch 4K Monitor.webp",
    "title": "27-inch 4K Monitor",
    "description": "Ultra HD 4K monitor with HDR support, 1ms response time, and 144Hz refresh rate.",
    "price": 399.99
  },
  {
    "image": "Gaming Headset.jpeg",
    "title": "Gaming Headset",
    "description": "Surround sound gaming headset with noise-canceling microphone and comfortable ear cushions.",
    "price": 79.99
  },
  {
    "image": "USB-C Hub.jpg",
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
    "image": "external ssd.jpeg",
    "title": "External SSD",
    "description": "Portable external SSD with 1TB capacity, USB 3.1 Gen 2 interface for fast data transfer.",
    "price": 149.99
  },
  {
    "image": "LED Desk Lamp.png",
    "title": "LED Desk Lamp",
    "description": "Adjustable LED desk lamp with touch control, multiple brightness levels, and USB charging port.",
    "price": 39.99
  },
  {
    "image": "Standing Desk Converter.jpeg",
    "title": "Standing Desk Converter",
    "description": "Adjustable standing desk converter for a healthier workspace setup, fits dual monitors.",
    "price": 199.99
  },
  {
    "image": "Wireless Charger.jpeg",
    "title": "Wireless Charger",
    "description": "Fast wireless charger for smartphones and other Qi-enabled devices, sleek and compact design.",
    "price": 25.99
  },
  {
    "image": "Gaming Mouse Pad.jpg",
    "title": "Gaming Mouse Pad",
    "description": "Large gaming mouse pad with non-slip base and smooth surface for precise mouse movements.",
    "price": 19.99
  },
  {
    "image": "Cable Organizer.jpeg",
    "title": "Cable Organizer",
    "description": "Silicone cable organizer for managing and organizing various cables and cords on your desk.",
    "price": 10.99
  },
  {
    "image": "Laptop Stand.jpg",
    "title": "Laptop Stand",
    "description": "Ergonomic laptop stand with adjustable height and angle for improved posture and comfort.",
    "price": 49.99
  },
  {
    "image": "Bluetooth Speakers.webp",
    "title": "Bluetooth Speakers",
    "description": "Portable Bluetooth speakers with powerful sound, long battery life, and waterproof design.",
    "price": 89.99
  },
  {
    "image": "USB Microphone.jpeg",
    "title": "USB Microphone",
    "description": "Professional USB microphone for streaming, podcasting, and voice recording with clear sound quality.",
    "price": 69.99
  },
  {
    "image": "External Hard Drive.jpeg",
    "title": "External Hard Drive",
    "description": "4TB external hard drive with fast data transfer rates and reliable storage solution for your files.",
    "price": 109.99
  },
  {
    "image": "Laptop Cooling Pad.jpeg",
    "title": "Laptop Cooling Pad",
    "description": "Laptop cooling pad with quiet fans and adjustable height for optimal cooling and comfort.",
    "price": 29.99
  },
  {
    "image": "Portable Projector.jpeg",
    "title": "Portable Projector",
    "description": "Compact portable projector with HDMI input, 1080p resolution, and built-in speakers.",
    "price": 249.99
  },
  {
    "image": "USB Flash Drive.jpeg",
    "title": "USB Flash Drive",
    "description": "64GB USB flash drive with fast read/write speeds and durable metal casing.",
    "price": 14.99
  },
  {
    "image": "Wi-Fi Router.jpeg",
    "title": "Wi-Fi Router",
    "description": "High-speed dual-band Wi-Fi router with wide coverage and support for multiple devices.",
    "price": 79.99
  },
  {
    "image": "Surge Protector.jpeg",
    "title": "Surge Protector",
    "description": "8-outlet surge protector with USB ports and overload protection for safeguarding your electronics.",
    "price": 24.99
  },
  {
    "image": "lcs.jpg",
    "title": "LCD Monitor",
    "description": "24-inch LCD monitor with Full HD resolution and ultra-slim design.",
    "price": 129.99
  },
  {
    "image": "curved monitor.avif",
    "title": "Curved LCD Monitor",
    "description": "32-inch curved LCD monitor with WQHD resolution and immersive viewing experience.",
    "price": 349.99
  },
  {
    "image": "headphones.jpg",
    "title": "Headphones",
    "description": "Wireless noise-cancelling headphones with long battery life and superior sound quality.",
    "price": 199.99
  },
  {
    "image": "gaming mouse.jpg",
    "title": "Gaming Mouse",
    "description": "Wired gaming mouse with high-precision sensor, customizable buttons, and RGB lighting.",
    "price": 59.99
  },
  {
    "image": "cpu.webp",
    "title": "Desktop CPU",
    "description": "Powerful desktop CPU with multiple cores, high clock speed, and excellent multitasking capabilities.",
    "price": 299.99
  },
  {
    "image": "gaming cpu.jpg",
    "title": "Gaming CPU",
    "description": "High-end gaming CPU with advanced cooling, overclocking potential, and exceptional gaming performance.",
    "price": 499.99
  },
  {
    "image": "mouse.webp",
    "title": "Mouse Bungee",
    "description": "Mouse bungee to keep your mouse cable tangle-free and ensure smooth, uninterrupted movements.",
    "price": 19.99
  },
  {
    "image": "keyboard.jpg",
    "title": "Ergonomic Keyboard",
    "description": "Split-design ergonomic keyboard with wrist rest for comfortable typing and reduced strain.",
    "price": 79.99
  },
  {
    "image": "Wireless Speaker.webp",
    "title": "Wireless Speaker",
    "description": "Portable wireless speaker with Bluetooth connectivity, delivering rich and clear sound quality. Features include long battery life, water resistance, and compatibility with various devices for music streaming.",
    "price": 89.99
}
    ]
`
let parseproduct = JSON.parse(products)
console.log(parseproduct);
for (let i = 0; i < 6; i++) {
document.querySelector(".row-one").innerHTML +=
  `
          <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
           <div class="card">
           <img src="${parseproduct[i].image}" class="card-img-top" alt="Product imagessss...">
          <div class="card-body">
      <a href="${parseproduct[i].Product_Page}"><h4 class="card-title">${parseproduct[i].title}</h4></a>
      <h5>Rs.${parseproduct[i].price}</h5>
        </div>
       </div>
          </div>
   `
}
//             document.getElementById("viewmore").addEventListener("click",()=>{
//       document.getElementById("viewmore").style.display="none";
//       document.getElementById("viewless").style.display="block";
//       document.querySelector(".row-two").style.display="flex"
//       for (let i = 6; i < 12; i++) {
//         document.querySelector(".row-two").innerHTML +=
//             `
//         <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
//          <div class="card" style="width: 18rem; height: 18rem;">
//          <img src="${parseproduct[i].image}" class="card-img-top" alt="Product imagessss...">
//         <div class="card-body">
//       <a href="store.html"><h4 class="card-title">${parseproduct[i].title}</h4></a>
//       <h5>Rs.${parseproduct[i].price}</h5>
//       </div>
//      </div>
//         </div>
//  `
//     }})

let productsShown = false;  // Add a flag to check if products have already been shown

document.getElementById("viewmore").addEventListener("click", () => {
if (!productsShown) {  // Check if products have not been shown yet
  console.log('View More button clicked.'); // Debug log

  document.getElementById("viewmore").style.display = "none";
  document.getElementById("viewless").style.display = "block";
  document.querySelector(".row-two").style.display = "flex";

  if (!Array.isArray(parseproduct) || parseproduct.length < 12) {
    console.error('parseproduct array is not valid or does not have enough items.');
    return;
  }

  // Add the products to the container
  for (let i = 6; i < 12; i++) {
    if (!parseproduct[i]) {
      console.error(`Product at index ${i} is not defined.`);
      continue;
    }

    const productHTML = `
                <div class="col col-lg-4 col-md-6 col-sm-6 mt-3 product-item">
                    <div class="card" style="width: 18rem; height: 18rem;">
                        <img src="${parseproduct[i].image}" class="card-img-top" alt="Product image">
                        <div class="card-body">
                            <a href="store.html"><h4 class="card-title">${parseproduct[i].title}</h4></a>
                            <h5>Rs.${parseproduct[i].price}</h5>
                        </div>
                    </div>
                </div>
            `;

    document.querySelector(".row-two").innerHTML += productHTML;
  }

  productsShown = true;  // Set the flag to true after showing the products
} else {
  document.querySelector(".row-two").style.display = "flex";
  document.getElementById("viewmore").style.display = "none";
  document.getElementById("viewless").style.display = "block";
}
});
// view less button
document.getElementById("viewless").addEventListener("click", () => {
document.getElementById("viewmore").style.display = "block";
document.getElementById("viewless").style.display = "none";
document.querySelector(".row-two").style.display = "none"
})


























// let link = "https://fakestoreapi.com/products"
// // let url = "https://api.escuelajs.co/api/v1/products";
// fetch(link)
// .then(Response => Response.json())
//     .then(data => {
//  console.log(data);
//        for (let i = 0; i < 6; i++) {
//             document.querySelector(".row-one").innerHTML +=
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
    // .catch(error => {
    //     console.log(error);
    // })
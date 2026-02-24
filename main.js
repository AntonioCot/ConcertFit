// Datos de productos
const products = [
    {
        id: 1,
        name: "Polo Álvaro Díaz Sayonara Tour 2025",
        artist: "Álvaro Díaz",
        price: 40.00,
        category: "reggaeton",
        image: "images/product1.jpg",
        images: [
            "images/product1.jpg",
            "images/product1-thumb1.jpg",
            "images/product1-thumb2.jpg",
            // "images/product1-thumb3.jpg"
        ],
        description: "El Polo Álvaro Díaz Sayonara Tour 2025 es una prenda oversize de algodón 20/1, perfecta para los fans del artista puertorriqueño Álvaro Díaz, una de las figuras más innovadoras del reggaetón y hip-hop latino. Inspirado en su álbum Sayonara, este diseño combina un estilo minimalista en el frente con un impactante arte gráfico en la espalda, destacando la esencia visual del disco. Una pieza exclusiva que fusiona comodidad y tendencia urbana."
    },
    {
        id: 2,
        name: "Polo Álvaro Díaz Sayonara Tour 2025",
        artist: "Álvaro Díaz",
        price: 40.00,
        category: "reggaeton",
        image: "images/product2.jpg",
        images: [
            "images/product2.jpg",
            "images/product2-thumb1.jpg",
            "images/product2-thumb2.jpg",
            // "images/product2-thumb3.jpg"
        ],
        description: "El Polo Álvaro Díaz Sayonara Tour 2025 es una prenda oversize de algodón 20/1, perfecta para los fans del artista puertorriqueño Álvaro Díaz, una de las figuras más innovadoras del reggaetón y hip-hop latino. Inspirado en su álbum Sayonara, este diseño combina un estilo minimalista en el frente con un impactante arte gráfico en la espalda, destacando la esencia visual del disco. Una pieza exclusiva que fusiona comodidad y tendencia urbana."
    },
    {
        id: 3,
        name: "Polo Álvaro Díaz Sayonara Tour 2025",
        artist: "Álvaro Díaz",
        price: 40.00,
        category: "reggaeton",
        image: "images/product3.jpg",
        images: [
            "images/product3.jpg",
            "images/product3-thumb1.jpg",
            "images/product3-thumb2.jpg",
            // "images/product3-thumb3.jpg"
        ],
        description: "El Polo Álvaro Díaz Sayonara Tour 2025 es una prenda oversize de algodón 20/1, perfecta para los fans del artista puertorriqueño Álvaro Díaz, una de las figuras más innovadoras del reggaetón y hip-hop latino. Inspirado en su álbum Sayonara, este diseño combina un estilo minimalista en el frente con un impactante arte gráfico en la espalda, destacando la esencia visual del disco. Una pieza exclusiva que fusiona comodidad y tendencia urbana."
    },
    {
        id: 4,
        name: "Polo Bad Bunny DTMF Tour 2026",
        artist: "Bad Bunny",
        price: 40.00,
        category: "reggaeton",
        image: "images/product4.jpg",
        images: [
            "images/product4.jpg",
            "images/product4-thumb1.jpg",
            "images/product4-thumb2.jpg",
            //"images/product4-thumb3.jpg"
        ],
        description: "El Polo Bad Bunny DTMF Tour 2026 es una prenda oversize de algodón 20/1, creada para los verdaderos fans del ícono global de la música urbana. Inspirado en la estética y energía de su gira DTMF, este diseño presenta un estilo minimalista en el frente y un potente arte gráfico en la espalda que captura la esencia visual del tour. Una pieza exclusiva que combina comodidad, actitud y el auténtico estilo streetwear que define la nueva era del reggaetón."
    },
    {
        id: 5,
        name: "Polo Bad Bunny DTMF Tour 2026",
        artist: "Bad Bunny",
        price: 40.00,
        category: "reggaeton",
        image: "images/product5.jpg",
        images: [
            "images/product5.jpg",
            "images/product5-thumb1.jpg",
            "images/product5-thumb2.jpg",
            //"images/product4-thumb3.jpg"
        ],
        description: "El Polo Bad Bunny DTMF Tour 2026 es una prenda oversize de algodón 20/1, creada para los verdaderos fans del ícono global de la música urbana. Inspirado en la estética y energía de su gira DTMF, este diseño presenta un estilo minimalista en el frente y un potente arte gráfico en la espalda que captura la esencia visual del tour. Una pieza exclusiva que combina comodidad, actitud y el auténtico estilo streetwear que define la nueva era del reggaetón."
    },
    {
        id: 6,
        name: "Polo Bad Bunny DTMF Tour 2026",
        artist: "Bad Bunny",
        price: 40.00,
        category: "reggaeton",
        image: "images/product6.jpg",
        images: [
            "images/product6.jpg",
            "images/product6-thumb1.jpg",
            "images/product6-thumb2.jpg",
            //"images/product4-thumb3.jpg"
        ],
        description: "El Polo Bad Bunny DTMF Tour 2026 es una prenda oversize de algodón 20/1, creada para los verdaderos fans del ícono global de la música urbana. Inspirado en la estética y energía de su gira DTMF, este diseño presenta un estilo minimalista en el frente y un potente arte gráfico en la espalda que captura la esencia visual del tour. Una pieza exclusiva que combina comodidad, actitud y el auténtico estilo streetwear que define la nueva era del reggaetón."
    },
    // {
    //     id: 7,
    //     name: "Polo Quevedo Buenas Noches Tour",
    //     artist: "Quevedo",
    //     price: 40.00,
    //     category: "reggaeton",
    //     image: "images/new-product-coming-soon.jpg",
    //     images: [
    //         "images/new-product-coming-soon.jpg",
    //         "images/product7-thumb1.jpg",
    //         "images/product7-thumb2.jpg",
    //         "images/product7-thumb3.jpg"
    //     ],
    //     description: "El Polo Quevedo Buenas Noches Tour es una prenda oversize de algodón 20/1, ideal para los fans del artista español Quevedo, una de las voces más influyentes del reggaetón y la música urbana. Inspirado en su gira Buenas Noches Tour, este diseño presenta un estilo minimalista en el frente y un arte visual llamativo en la espalda, capturando la esencia de sus shows. Una pieza exclusiva que combina comodidad y tendencia."
    // },
    // {
    //     id: 8,
    //     name: "Polo Duki Ameri Tour",
    //     artist: "Duki",
    //     price: 40.00,
    //     category: "trap",
    //     image: "images/new-product-coming-soon.jpg",
    //     images: [
    //         "images/new-product-coming-soon.jpg",
    //         "images/product8-thumb1.jpg",
    //         "images/product8-thumb2.jpg",
    //         "images/product8-thumb3.jpg"
    //     ],
    //     description: "El Polo Duki Ameri Tour es una prenda oversize de algodón 20/1, perfecta para los seguidores de Duki, pionero del trap argentino y referente de la música urbana. Inspirado en su gira Ameri Tour, este diseño fusiona un estilo minimalista en el frente con un impactante arte gráfico en la espalda, reflejando la energía y esencia de sus shows. Una pieza exclusiva que combina comodidad y actitud."
    // },
    // {
    //     id: 9,
    //     name: "Polo Daft Punk Legacy",
    //     artist: "Daft Punk",
    //     price: 40.00,
    //     category: "electronica",
    //     image: "images/new-product-coming-soon.jpg",
    //     images: [
    //         "images/new-product-coming-soon.jpg",
    //         "images/product9-thumb1.jpg",
    //         "images/product9-thumb2.jpg",
    //         "images/product9-thumb3.jpg"
    //     ],
    //     description: "El *Polo Daft Punk Legacy* rinde homenaje al legendario dúo francés que revolucionó la música electrónica. Fabricado en algodón premium, ofrece un ajuste oversize y un diseño minimalista con los icónicos cascos en el frente. Una pieza esencial para los fans del house y el electro."
    // },
    // {
    //     id: 10,
    //     name: "Polo Billie Eilish World Tour",
    //     artist: "Billie Eilish",
    //     price: 40.00,
    //     category: "pop",
    //     image: "images/new-product-coming-soon.jpg",
    //     images: [
    //         "images/new-product-coming-soon.jpg",
    //         "images/product10-thumb1.jpg",
    //         "images/product10-thumb2.jpg",
    //         "images/product10-thumb3.jpg"
    //     ],
    //     description: "El *Polo Billie Eilish World Tour* captura la esencia única de la artista con un diseño auténtico y vanguardista. Hecho de algodón orgánico, combina comodidad y estilo, con detalles gráficos inspirados en su gira mundial. Ideal para los fans de su estética innovadora."
    // },
    // {
    //     id: 11,
    //     name: "Polo AC/DC Power Up Tour",
    //     artist: "AC/DC",
    //     price: 40.00,
    //     category: "rock",
    //     image: "images/new-product-coming-soon.jpg",
    //     images: [
    //         "images/new-product-coming-soon.jpg",
    //         "images/product11-thumb1.jpg",
    //         "images/product11-thumb2.jpg",
    //         "images/product11-thumb3.jpg"
    //     ],
    //     description: "El *Polo AC/DC Power Up Tour* es un tributo a una de las bandas más icónicas del rock. Confeccionado en algodón resistente, presenta el legendario logo de AC/DC en el frente y un diseño conmemorativo en la espalda. Perfecto para quienes llevan el rock en la piel."
    // }
];

// Datos de artistas
const artists = [
    {
        id: 1,
        name: "Álvaro Díaz",
        image: "images/artist1.jpg",
        description: "Rapper y compositor puertorriqueño, una de las figuras más destacadas del movimiento urbano alternativo. Su música combina influencias del hip-hop, trap y R&B con letras introspectivas y narrativas envolventes. Conocido por su enfoque conceptual en los álbumes y su estilo cinematográfico en videos, ha revolucionado la escena musical con una estética única y una propuesta artística innovadora."
    },
    {
        id: 2,
        name: "Bad Bunny",
        image: "images/artist2.jpg",
        description: "Benito Antonio Martínez Ocasio, conocido artísticamente como Bad Bunny, es un cantante, compositor y productor puertorriqueño que ha revolucionado la industria de la música latina. Es una de las figuras más influyentes del reggaetón y el trap latino, fusionando estos géneros con estilos como el rock, la electrónica y la música alternativa. Con su estética vanguardista y su actitud disruptiva, ha marcado tendencia no solo en la música, sino también en la moda y la cultura pop global."
    },
    {
        id: 3,
        name: "Quevedo",
        image: "images/artist3.jpg",
        description: "Pedro Luis Domínguez Quevedo, conocido como Quevedo, es un cantante y compositor español que ha emergido como una de las voces más prominentes del reggaetón y la música urbana en España. Su estilo se caracteriza por una fusión de trap, reggaetón y elementos melódicos, destacándose por su distintiva voz grave y letras que exploran el amor, la fiesta y la vida cotidiana. Su éxito internacional llegó con colaboraciones con grandes exponentes del género, consolidándolo como una figura clave en la nueva ola de la música urbana."
    },
    {
        id: 4,
        name: "Duki",
        image: "images/artist4.jpg",
        description: "Mauro Ezequiel Lombardo Quiroga, conocido como Duki, es un rapero, cantante y compositor argentino, pionero del movimiento del trap en Argentina y uno de los artistas urbanos más influyentes de habla hispana. Su carrera despegó en las batallas de freestyle, donde su estilo agresivo y su capacidad lírica lo destacaron rápidamente. Desde entonces, ha evolucionado hacia una propuesta musical que fusiona trap, reggaetón y pop, logrando un impacto masivo en la escena internacional con múltiples éxitos y giras mundiales."
    },
    {
        id: 5,
        name: "Rauw Alejandro",
        image: "images/artist5.jpg",
        description: "Cantante y compositor puertorriqueño Raúl Alejandro Ocasio Ruiz, nacido en 1993, reconocido por ser una de las figuras más innovadoras de la música urbana y el reguetón. Rauw Alejandro ha conquistado el panorama musical con éxitos como Todo de Ti, Tattoo y Desesperados. Su estilo fusiona reguetón, pop y ritmos electrónicos, destacando por su versatilidad, energía en el escenario y su capacidad para reinventar el género. A lo largo de su carrera, ha logrado múltiples premios y una gran base de seguidores, consolidándose como un referente de la nueva generación de artistas latinos."
    },
    {
        id: 6,
        name: "Daft Punk",
        image: "images/artist6.jpg",
        description: "Dúo francés de música electrónica formado por Thomas Bangalter y Guy-Manuel de Homem-Christo. Daft Punk revolucionó la escena con su fusión de house, funk, disco y electro, creando himnos atemporales como *One More Time*, *Harder, Better, Faster, Stronger* y *Get Lucky*. Con su identidad enmascarada y una estética futurista, redefinieron la cultura musical con su innovadora producción y sus espectaculares shows en vivo. Su legado sigue marcando la industria incluso tras su separación en 2021."
    },
    {
        id: 7,
        name: "Billie Eilish",
        image: "images/artist7.jpg",
        description: "Billie Eilish Pirate Baird O'Connell es una cantante y compositora estadounidense que ha redefinido el pop contemporáneo con su estilo oscuro, introspectivo y vanguardista. Desde su irrupción con *Ocean Eyes*, ha conquistado la industria con álbumes innovadores como *When We All Fall Asleep, Where Do We Go?* y *Happier Than Ever*. Con una estética única, una voz etérea y letras profundas, ha sido galardonada con múltiples premios Grammy y se ha consolidado como una de las artistas más influyentes de su generación."
    },
    {
        id: 8,
        name: "AC/DC",
        image: "images/artist8.jpg",
        description: "Banda australiana de hard rock fundada en 1973 por los hermanos Malcolm y Angus Young. AC/DC es una de las agrupaciones más legendarias del rock, con himnos como *Highway to Hell*, *Back in Black* y *Thunderstruck*. Su sonido potente, riffs eléctricos y la enérgica presencia de sus vocalistas han influenciado generaciones de músicos. A lo largo de décadas, han mantenido su esencia rebelde y su impacto en la música sigue siendo inquebrantable."
    },
]

// Funcionalidad para el carrusel de anuncios
function setupAnnouncementBar() {
    const announcements = document.querySelector('.announcements');
    if (!announcements) return;

    // Clonar los anuncios para crear un efecto infinito
    const clonedAnnouncements = [...announcements.children].map(item => item.cloneNode(true));
    clonedAnnouncements.forEach(item => {
        announcements.appendChild(item);
    });
}

// Agregar esta función después de setupAnnouncementBar()

function setupHeroBackgroundSlider() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const backgroundImages = [
        'images/hero-bg.jpg',
        'images/hero-bg-2.jpg'
    ];

    let currentImageIndex = 0;

    setInterval(() => {
        // Cambiar al siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        
        // Resetear la animación
        hero.classList.remove('slide-next');
        
        // Forzar reflow para reiniciar la animación
        void hero.offsetWidth;
        
        // Cambiar la imagen y aplicar animación
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImages[currentImageIndex]}')`;
        hero.classList.add('slide-next');
    }, 5000);
}

// Funcionalidad para el menú hamburguesa
function setupMobileMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (!hamburgerMenu || !nav || !overlay) return;

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Funcionalidad para filtrar productos
function setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Añadir clase active al botón clickeado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Recargar los productos filtrados
            loadProducts(filter);
        });
    });
}

// Funcionalidad para la página de detalles del producto
function setupProductDetails() {
    // Obtener el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) return;

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) return;

    // Actualizar la información del producto en la página
    const productTitle = document.getElementById('product-title');
    const productArtist = document.getElementById('product-artist');
    const productPrice = document.getElementById('product-price');
    const mainImage = document.querySelector('.main-image');

    if (productTitle) productTitle.textContent = product.name;
    if (productArtist) productArtist.textContent = product.artist;
    if (productPrice) productPrice.textContent = `$${product.price}`;
    if (mainImage) mainImage.src = product.image;

    // Cambiar las miniaturas en la galería
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (thumbnails.length && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Remover clase active de todas las miniaturas
                thumbnails.forEach(t => t.classList.remove('active'));

                // Añadir clase active a la miniatura clickeada
                thumb.classList.add('active');

                // Cambiar la imagen principal
                mainImage.src = thumb.src;
            });
        });
    }

    // Funcionalidad para seleccionar talla
    const sizeOptions = document.querySelectorAll('.size-option');

    if (sizeOptions.length) {
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remover clase active de todas las opciones
                sizeOptions.forEach(opt => opt.classList.remove('active'));

                // Añadir clase active a la opción clickeada
                option.classList.add('active');
            });
        });
    }

    // Funcionalidad para cambiar cantidad
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity');

    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    }
}

// Funcionalidad para añadir al carrito
function setupAddToCart() {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart, .add-to-cart-btn');
    const cartCount = document.querySelector('.cart span');

    if (!addToCartButtons.length || !cartCount) return;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Incrementar el contador del carrito
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;

            // Mostrar mensaje de confirmación
            alert('¡Producto añadido al carrito!');
        });
    });
}

// Funcionalidad para la navegación de artistas
function setupArtistNavigation() {
    const artistElements = document.querySelectorAll('.artist');

    if (!artistElements.length) return;

    artistElements.forEach(artistElement => {
        artistElement.addEventListener('click', () => {
            const artistName = artistElement.querySelector('h3').textContent;
            window.location.href = `artist.html?name=${encodeURIComponent(artistName)}`;
        });
    });
}

// Funcionalidad para la página de artista
function setupArtistPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get('name');

    if (!artistName) {
        console.error("No se encontró el nombre del artista en la URL.");
        return;
    }

    // Buscar el artista por nombre exacto
    const artist = artists.find(a => a.name.trim().toLowerCase() === artistName.trim().toLowerCase());

    if (!artist) {
        console.error("Artista no encontrado:", artistName);
        return;
    }

    // Actualizar la información del artista en la página
    document.getElementById('artist-name').textContent = artist.name;
    document.getElementById('artist-description').textContent = artist.description;
    document.querySelector('.artist-image').src = artist.image;

    // Obtener contenedor de productos
    const productGrid = document.querySelector('.artist-products .product-grid');

    if (!productGrid) {
        console.error("No se encontró el contenedor de productos.");
        return;
    }

    // *** Evitar que se carguen productos globales ***
    productGrid.innerHTML = ''; // Limpiar antes de agregar productos nuevos

    // Filtrar productos por artista
    const artistProducts = products.filter(p => p.artist.trim().toLowerCase() === artist.name.trim().toLowerCase());

    if (artistProducts.length === 0) {
        const productGrid = document.querySelector('.product-grid');

        // Insertar el mensaje dentro de .product-grid
        productGrid.innerHTML = '<div class="custom-message">Próximamente saldrán productos de este artista.</div>';

        // Asegurar que .product-grid sea un contenedor flex y centre el contenido
        productGrid.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        `;

        // Aplicar estilos a .custom-message para mejor apariencia
        document.querySelector('.custom-message').style.cssText = `
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #333;
            padding: 20px;
            max-width: 600px;
            border: 2px solid #000;
            border-radius: 10px;
            background-color: #f8f8f8;
        `;
    }

    // Insertar solo los productos de este artista
    artistProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
    
        productCard.innerHTML = `
            <a href="product-details.html?id=${product.id}" class="card-link">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-artist">${product.artist}</p>
                    <p class="product-price">S/. ${product.price.toFixed(2)}</p>
                </div>
            </a>
            <button class="btn-add-cart" onclick="window.open('https://wa.me/51991934736?text=Hola! Estoy interesado en uno de los polos de mis artistas favoritos. ¿Podrías darme más información?', '_blank')">Contactar</button>
        `;
    
        productGrid.appendChild(productCard);
    });

    console.log("Productos añadidos al HTML:", productGrid.innerHTML);

    // setupAddToCart(); // Habilitar funcionalidad de carrito
}


// Funcionalidad para cargar los producto al HTML
function loadProducts(filter = "all") {
    const productGrid = document.querySelector('.product-grid');

    if (!productGrid) return;

    // Resetear los estilos de `.product-grid` antes de modificar su contenido
    productGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        width: 100%;
        min-height: auto;
    `;

    // Limpiar el contenedor antes de agregar productos
    productGrid.innerHTML = '';

    // Filtrar productos si se selecciona una categoría específica
    const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

    // Si no hay productos, mostrar el mensaje de "Próximamente..."
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="custom-message">Próximamente saldrán productos de esta categoría</div>';

        // Aplicar estilos a `.product-grid` para centrar el mensaje
        productGrid.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 200px;
        `;

        // Aplicar estilos a `.custom-message` para mejorar la apariencia
        document.querySelector('.custom-message').style.cssText = `
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #333;
            padding: 20px;
            max-width: 600px;
            border: 2px solid #000;
            border-radius: 10px;
            background-color: #f8f8f8;
        `;

        return;
    }

    // Recorrer el array de productos y generar las tarjetas dinámicamente
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
        <a href="product-details.html?id=${product.id}" class="card-link">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-artist">${product.artist}</p>
                <p class="product-price">S/. ${product.price.toFixed(2)}</p>
            </div>
        </a>
        <button class="btn-add-cart" onclick="window.open('https://wa.me/51991934736?text=Hola! Estoy interesado en uno de los polos de mis artistas favoritos. ¿Podrías darme más información?', '_blank')">Contactar
        </button>
    `;

        productGrid.appendChild(productCard);
    });

    // Reinicializar la funcionalidad de añadir al carrito después de actualizar productos
    // setupAddToCart();
}


function loadFeaturedArtists() {
    const artistSlider = document.querySelector('.artist-slider');
    if (!artistSlider) return;

    // Limpiar contenido anterior
    artistSlider.innerHTML = '';

    // Generar dinámicamente cada artista
    artists.forEach(artist => {
        const artistElement = document.createElement('div');
        artistElement.className = 'artist';
        artistElement.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
        `;

        // Evento de clic para redirigir a la página del artista
        artistElement.addEventListener('click', () => {
            window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
        });

        artistSlider.appendChild(artistElement);
    });

    setupArtistSlider(); // Inicializa el desplazamiento
}

// Funcionalidad para mover el slider de artistas
function setupArtistSlider() {
    const slider = document.querySelector('.artist-slider');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    if (!slider || !prevBtn || !nextBtn) return;

    let scrollAmount = 0;
    const scrollStep = 250; // Distancia a mover por cada clic

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
}

// Funcionalidad de cargar a los artistas y redirigirlos
function loadArtists() {
    const artistContainer = document.getElementById('all-artists');
    if (!artistContainer) return;

    // Limpiar el contenedor antes de agregar artistas
    artistContainer.innerHTML = '';

    // Recorrer el array de artistas y generar las tarjetas dinámicamente
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <div class="artist-info">
                <h3>${artist.name}</h3>
            </div>
        `;

        // Agregar evento de clic para redirigir a artist.html
        artistCard.addEventListener('click', () => {
            window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
        });

        artistContainer.appendChild(artistCard);
    });
}

function setupProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error("No se encontró el ID del producto en la URL.");
        return;
    }

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Producto no encontrado:", productId);
        return;
    }

    // Actualizar la información del producto en la página
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-artist').textContent = product.artist;
    document.getElementById('product-price').textContent = `S/. ${product.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description;

    // Cargar la imagen principal
    const mainImage = document.getElementById('product-main-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Cargar las miniaturas dinámicamente
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = ''; // Limpiar antes de insertar nuevas miniaturas

    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Miniatura ${index + 1}`;
        thumbnail.classList.add('thumbnail');

        // La primera imagen se marca como activa
        if (index === 0) {
            thumbnail.classList.add('active');
        }

        // Evento para cambiar la imagen principal al hacer clic en la miniatura
        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    console.log("Detalles del producto cargados:", product);
}

// Asegurar que se ejecute cuando se cargue `product-details.html`
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("product-details.html")) {
        setupProductDetails();
    } else {
        loadProducts(); // Solo carga productos en páginas donde se necesite
    }
});


// Inicializar todas las funcionalidades cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada, ejecutando setupArtistPage...");

    // Ejecutar setupArtistPage solo en artist.html
    if (window.location.pathname.includes("artist.html")) {
        setupArtistPage();
    } else {
        loadProducts(); // Solo se ejecuta en páginas que NO sean artist.html
    }

    setupAnnouncementBar();
    setupHeroBackgroundSlider(); // ← Agregar esta línea
    setupMobileMenu();
    setupProductFilters();
    setupProductDetails();
    setupAddToCart();
    setupArtistNavigation();
    loadFeaturedArtists();
    loadArtists();
});

document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.getElementById('logo');
    if (logoElement) {
        logoElement.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});


// Asegúrate de que este código se ejecute una vez cargado el DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("Se está ejecutando la lógica de tallas y cantidad.");

    // 1) Seleccionar TODAS las tallas
    const sizeOptions = document.querySelectorAll('.size-option');

    // Verificar si hay elementos .size-option
    if (sizeOptions.length > 0) {
        sizeOptions.forEach(option => {
            // Al hacer click en cualquier talla...
            option.addEventListener('click', () => {
                console.log("Click en la talla:", option.textContent);

                // Quitar 'active' de todas las tallas
                sizeOptions.forEach(opt => opt.classList.remove('active'));

                // Poner 'active' en la talla clickeada
                option.classList.add('active');
            });
        });
    }

    // 2) Seleccionar los botones +, - y el input
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity');

    // Verificar si existen en el DOM
    if (decreaseBtn && increaseBtn && quantityInput) {
        // Botón -
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        // Botón +
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    }
});

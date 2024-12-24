import React, { useState } from 'react'
import "../assets/css/fornecedor_visualizer.css"
import { Link } from 'react-router-dom';


export default function Fornecedor_Visualizer() {
    const [selectedImage, setSelectedImage] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState(0);
  const [zoom, setZoom] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [loading, setLoading] = React.useState(false);
  const [addedToCart, setAddedToCart] = React.useState(false);

  // Enhanced product data 
  const product = {
    id: "PRD001",
    name: "Câmera Profissional DSLR Z9",
    category: "Fotografia Profissional",
    originalPrice: "R$ 7.999,00",
    price: "R$ 5.999,00",
    description: "Câmera profissional de última geração com recursos avançados para fotografia de casamento. Ideal para capturar momentos especiais com qualidade excepcional.",
    features: [
      "Sensor CMOS Full-Frame de 45.7MP",
      "Sistema AF avançado com 493 pontos",
      "Gravação de vídeo 8K 30fps",
      "ISO nativo de 64-25600",
      "Monitor LCD touchscreen de 3.2\"",
      "Dual card slots CFexpress",
      "Construção resistente a intempéries"
    ],
    rating: 4.8,
    reviewCount: 128,
    specs: [
      { label: "Resolução", value: "45.7MP" },
      { label: "Tipo de Sensor", value: "CMOS Full-Frame" },
      { label: "ISO", value: "64-25600 (expansível até 102400)" },
      { label: "Vídeo", value: "8K 30fps / 4K 120fps" },
      { label: "Sistema AF", value: "493 pontos de foco" },
      { label: "Monitor", value: "LCD touchscreen 3.2\"" },
      { label: "Armazenamento", value: "Dual CFexpress" },
      { label: "Bateria", value: "EN-EL18d Li-ion" }
    ],
    colors: [
      { name: "Preto Profissional", hex: "#000000" },
      { name: "Grafite", hex: "#787878" },
      { name: "Titânio", hex: "#383838" }
    ],
    images: [
      "https://via.placeholder.com/800x800?text=Camera+Pro+1",
      "https://via.placeholder.com/800x800?text=Camera+Pro+2",
      "https://via.placeholder.com/800x800?text=Camera+Pro+3",
      "https://via.placeholder.com/800x800?text=Camera+Pro+4"
    ],
    reviews: [
      {
        id: 1,
        user: "João Silva",
        rating: 5,
        date: "2024-01-15",
        comment: "Excelente câmera para fotografia profissional! Superou todas as expectativas."
      },
      {
        id: 2,
        user: "Maria Santos",
        rating: 4,
        date: "2024-01-10", 
        comment: "Ótima qualidade de imagem, apenas o preço que é um pouco salgado."
      }
    ],
    inStock: true,
    stockQuantity: 5,
    deliveryEstimate: "3-5 dias úteis",
    warranty: "2 anos de garantia",
    relatedProducts: [
      {
        id: 1,
        name: "Lente 24-70mm f/2.8",
        price: "R$ 2.999,00",
        image: "https://via.placeholder.com/400x400",
        rating: 4.7
      },
      {
        id: 2,
        name: "Flash Profissional TTL",
        price: "R$ 1.299,00",
        image: "https://via.placeholder.com/400x400",
        rating: 4.5
      },
      {
        id: 3,
        name: "Tripé Profissional",
        price: "R$ 899,00",
        image: "https://via.placeholder.com/400x400",
        rating: 4.8
      },
      {
        id: 4,
        name: "Battery Grip",
        price: "R$ 699,00",
        image: "https://via.placeholder.com/400x400",
        rating: 4.6
      }
    ]
  };

  const handleImageZoom = (e) => {
    if (!zoom) return;
    const image = e.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setMousePosition({ x, y });
  };

  const handleAddToCart = () => {
    setLoading(true);
    // Simulando uma chamada de API
    setTimeout(() => {
      setLoading(false);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }, 1000);
  };

  return (
    <div className="product-page-visualize">
      <main className="main-content-visualize">
        <div className="header-bar-visualize">
          <h1 className='product-name-fornecedor'>{product.name}</h1>
          <div className="user-profile-visualize">
            
            <Link to={'/fornecedor-perfil'} className="btn-visualize btn-secondary-visualize">
            <span>Ver Perfil do forncedor</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#9d4edd', transform: '', msfilter: ''}}><path d="M21 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1zm-9 9c-3.309 0-6-2.691-6-6h2c0 2.206 1.794 4 4 4s4-1.794 4-4h2c0 3.309-2.691 6-6 6z" /></svg>
 </Link>
          </div>
        </div>

        <div className="product-info">
          <section className="product-gallery">
            <div className="thumbnail-list thumbnail-list-visualize">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImage(idx)}
                  alt={`${product.name} ${idx + 1}`}
                />
              ))}
            </div>
            
            <div 
              className={`main-image-container ${zoom ? 'zoomed' : ''}`}
              onMouseMove={handleImageZoom}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onClick={() => setModalOpen(true)}
            >
              <img
                src={product.images[selectedImage]}
                className="main-image"
                alt={product.name}
                style={{
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                }}
              />
              <div className="image-controls">
                <button onClick={() => setZoom(!zoom)}>
                  <i className={`fas fa-${zoom ? 'search-minus' : 'search-plus'}`}></i>
                </button>
                <button onClick={() => setModalOpen(true)}>
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>
          </section>

          <section className="product-details">
            <div className="product-header">
              <span className="product-category">{product.category}</span>
              <div className="stock-status">
                {product.inStock ? (
                  <span className="in-stock">
                    <i className="fas fa-check-circle"></i>
                    Em estoque ({product.stockQuantity} unidades)
                  </span>
                ) : (
                  <span className="out-of-stock">
                    <i className="fas fa-times-circle"></i>
                    Fora de estoque
                  </span>
                )}
              </div>
            </div>

            <div className="price-container">
              <div className="original-price">{product.originalPrice}</div>
              <div className="product-price">
                {product.price}
                <span className="discount-tag">-25%</span>
              </div>
            </div>

            <div className="rating-container">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}
                  ></i>
                ))}
                <span className="rating-value">{product.rating}</span>
              </div>
              <span className="rating-count">
                {product.reviewCount} avaliações verificadas
              </span>
            </div>

            <div className="product-features">
              <h3>Principais características</h3>
              <ul>
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="color-selection">
              <h3>Cor</h3>
              <div className="color-options">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`color-option ${selectedColor === idx ? 'active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(idx)}
                    title={color.name}
                  >
                    {selectedColor === idx && <i className="fas fa-check"></i>}
                  </div>
                ))}
              </div>
              <span className="selected-color-name">
                {product.colors[selectedColor].name}
              </span>
            </div>

            <div className="quantity-selection">
              <h3>Quantidade</h3>
              <div className="quantity-selector">
                <button 
                  className="btn-visualize btn-secondary-visualize"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span>{quantity}</span>
                <button 
                  className="btn-visualize btn-secondary-visualize"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= product.stockQuantity}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            <button
              className={`add-to-cart-btn ${loading ? 'loading' : ''} ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={loading || !product.inStock}
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : addedToCart ? (
                <div className="button-content">
                  <i className="fas fa-check"></i>
                  Adicionado ao carrinho!
                </div>
              ) : (
                <Link to={'/contratar-fornecedor'} className="button-content">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
  {/* Cabeça */}
  <circle cx={12} cy={8} r={4} />
  {/* Corpo */}
  <path d="M12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" />
  {/* Marca de seleção */}
  <path d="M16.5 17.5l-2-2-1.4 1.4 3.4 3.4 5.4-5.4-1.4-1.4z" />
</svg>
                   Contratar
                </Link>
              )}
            </button>

            <div className="delivery-info">
              <div className="info-item">
                <i className="fas fa-truck"></i>
                <span>Entrega estimada: {product.deliveryEstimate}</span>
              </div>
            </div>
          </section>
        </div>

        <section className="product-specs">
          <h2 className="section-title">Especificações Técnicas</h2>
          <div className="specs-table">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="product-reviews">
          <h2 className="section-title">Avaliações dos Clientes</h2>
          <div className="reviews-container">
            {product.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="reviewer-name">{review.user}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < review.rating ? 'active' : ''}`}
                      ></i>
                    ))}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="related-products">
          <h2 className="section-title">Produtos Relacionados</h2>
          <div className="related-products-grid">
            {product.relatedProducts.map(item => (
              <div key={item.id} className="related-product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="related-product-rating">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < item.rating ? 'active' : ''}`}
                    ></i>
                  ))}
                </div>
                <p className="related-product-price">{item.price}</p>
                <button className="btn-visualize btn-secondary-visualize">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <button className="modal-close">
            <i className="fas fa-times"></i>
          </button>
          <img src={product.images[selectedImage]} alt={product.name} />
        </div>
      )}
    </div>
  );
}

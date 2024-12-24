import React from 'react'
import "../assets/css/contratar.css"

const Contratar_Fornecedor = () => {
    const [selectedPlan, setSelectedPlan] = React.useState(null);
    const [formData, setFormData] = React.useState({
      eventDate: '',
      location: '',
      guestCount: '',
      eventType: '',
      additionalNotes: '',
      paymentMethod: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    });
  
    return (
      <div className="hire-page-visualize">
        <main className="main-content-visualize">
          <div className="header-bar-visualize-cc">
            <h1>Contratar Fornecedor</h1>
            <div className="user-profile-visualize">
              <span>Tech Cameras Pro</span>
              <img src="https://via.placeholder.com/40" alt="Supplier avatar" className="user-avatar" />
            </div>
          </div>
  
          <div className="supplier-overview-visualize">
            <div className="supplier-card-visualize">
              <img src="https://via.placeholder.com/150" alt="Supplier" className="supplier-image-visualize" />
              <div className="supplier-details-visualize">
                <h2>Tech Cameras Pro</h2>
                <div className="rating-visualize">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>(4.8)</span>
                </div>
                <p className="supplier-description-visualize">
                  Especialista em cobertura fotográfica profissional para eventos
                </p>
                <div className="supplier-tags-visualize">
                  <span><i className="fas fa-camera"></i> Fotografia</span>
                  <span><i className="fas fa-video"></i> Videografia</span>
                  <span><i className="fas fa-drone"></i> Drone</span>
                </div>
              </div>
            </div>
          </div>
  
          <div className="pricing-section-visualize">
            <h2>Escolha seu Pacote</h2>
            <div className="pricing-grid-visualize">
              <div className={`pricing-card-visualize ${selectedPlan === 'basic' ? 'selected' : ''}`}
                   onClick={() => setSelectedPlan('basic')}>
                <div className="pricing-header-visualize">
                  <h3>Básico</h3>
                  <p className="price-visualize">R$ 1.500</p>
                </div>
                <ul className="features-list-visualize">
                  <li><i className="fas fa-check"></i> 4 horas de cobertura</li>
                  <li><i className="fas fa-check"></i> 100 fotos editadas</li>
                  <li><i className="fas fa-check"></i> Entrega digital</li>
                  <li><i className="fas fa-check"></i> 1 fotógrafo</li>
                </ul>
              </div>
  
              <div className={`pricing-card-visualize premium ${selectedPlan === 'premium' ? 'selected' : ''}`}
                   onClick={() => setSelectedPlan('premium')}>
                <div className="pricing-header-visualize">
                  <span className="recommended-badge-visualize">Mais Popular</span>
                  <h3>Premium</h3>
                  <p className="price-visualize">R$ 2.500</p>
                </div>
                <ul className="features-list-visualize">
                  <li><i className="fas fa-check"></i> 8 horas de cobertura</li>
                  <li><i className="fas fa-check"></i> 300 fotos editadas</li>
                  <li><i className="fas fa-check"></i> Álbum digital + Impressão</li>
                  <li><i className="fas fa-check"></i> 2 fotógrafos</li>
                  <li><i className="fas fa-check"></i> Drone</li>
                </ul>
              </div>
  
              <div className={`pricing-card-visualize ${selectedPlan === 'platinum' ? 'selected' : ''}`}
                   onClick={() => setSelectedPlan('platinum')}>
                <div className="pricing-header-visualize">
                  <h3>Platinum</h3>
                  <p className="price-visualize">R$ 4.000</p>
                </div>
                <ul className="features-list-visualize">
                  <li><i className="fas fa-check"></i> 12 horas de cobertura</li>
                  <li><i className="fas fa-check"></i> 500 fotos editadas</li>
                  <li><i className="fas fa-check"></i> Álbum premium + Videos</li>
                  <li><i className="fas fa-check"></i> 3 fotógrafos</li>
                  <li><i className="fas fa-check"></i> Drone + Making of</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="booking-form-visualize">
            <h2>Detalhes do Evento</h2>
            <form className="event-form-visualize">
              <div className="form-group-visualize">
                <label>Data do Evento</label>
                <input 
                  type="date" 
                  value={formData.eventDate}
                  onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                />
              </div>
              
              <div className="form-group-visualize">
                <label>Local do Evento</label>
                <input 
                  type="text" 
                  placeholder="Digite o endereço completo"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
  
              <div className="form-row-visualize">
                <div className="form-group-visualize">
                  <label>Número de Convidados</label>
                  <input 
                    type="number" 
                    placeholder="Ex: 100"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                  />
                </div>
  
                <div className="form-group-visualize">
                  <label>Tipo de Evento</label>
                  <select 
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option value="">Selecione</option>
                    <option value="casamento">Casamento</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
  
              <div className="form-group-visualize">
                <label>Informações Adicionais</label>
                <textarea 
                  placeholder="Descreva detalhes importantes sobre seu evento..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                ></textarea>
              </div>
  
              <div className="payment-section-visualize">
                <h3>Método de Pagamento</h3>
                <div className="payment-methods-visualize">
                  <div className={`payment-method-card-visualize ${formData.paymentMethod === 'credit' ? 'selected' : ''}`}
                       onClick={() => setFormData({...formData, paymentMethod: 'credit'})}>
                    <i className="fas fa-credit-card"></i>
                    <span>Cartão de Crédito</span>
                  </div>
                  <div className={`payment-method-card-visualize ${formData.paymentMethod === 'pix' ? 'selected' : ''}`}
                       onClick={() => setFormData({...formData, paymentMethod: 'pix'})}>
                    <i className="fas fa-qrcode"></i>
                    <span>PIX</span>
                  </div>
                  <div className={`payment-method-card-visualize ${formData.paymentMethod === 'boleto' ? 'selected' : ''}`}
                       onClick={() => setFormData({...formData, paymentMethod: 'boleto'})}>
                    <i className="fas fa-barcode"></i>
                    <span>Boleto</span>
                  </div>
                </div>
  
                {formData.paymentMethod === 'credit' && (
                  <div className="credit-card-form-visualize">
                    <div className="form-row-visualize">
                      <div className="form-group-visualize">
                        <label>Número do Cartão</label>
                        <input 
                          type="text" 
                          placeholder="0000 0000 0000 0000"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        />
                      </div>
                      <div className="form-group-visualize">
                        <label>Nome no Cartão</label>
                        <input 
                          type="text" 
                          placeholder="Nome como está no cartão"
                          value={formData.cardName}
                          onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-row-visualize">
                      <div className="form-group-visualize">
                        <label>Data de Validade</label>
                        <input 
                          type="text" 
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        />
                      </div>
                      <div className="form-group-visualize">
                        <label>CVV</label>
                        <input 
                          type="text" 
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                )}
  
                {formData.paymentMethod === 'pix' && (
                  <div className="pix-payment-visualize">
                    <div className="qr-code-container-visualize">
                      <i className="fas fa-qrcode fa-8x"></i>
                      <p>Escaneie o QR Code para pagar</p>
                    </div>
                    <div className="pix-info-visualize">
                      <p>Ou copie a chave PIX:</p>
                      <div className="pix-key-visualize">
                        <code>123e4567-e89b-12d3-a456-426614174000</code>
                        <button className="copy-btn-visualize">
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
  
                {formData.paymentMethod === 'boleto' && (
                  <div className="boleto-payment-visualize">
                    <p>Após clicar em "Solicitar Orçamento", você receberá o boleto por email.</p>
                    <div className="boleto-info-visualize">
                      <i className="fas fa-info-circle"></i>
                      <span>O boleto tem vencimento em 3 dias úteis</span>
                    </div>
                  </div>
                )}
              </div>
  
              <button type="submit" className="submit-btn-visualize">
                Solicitar Orçamento
              </button>
            </form>
          </div>
  
          <div className="testimonials-section-visualize">
            <h2>Avaliações de Clientes</h2>
            <div className="testimonials-grid-visualize">
              <div className="testimonial-card-visualize">
                <div className="testimonial-header-visualize">
                  <img src="https://via.placeholder.com/50" alt="Cliente" />
                  <div>
                    <h4>Ana Silva</h4>
                    <div className="rating-visualize">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>"Equipe extremamente profissional. As fotos ficaram incríveis!"</p>
              </div>
  
              <div className="testimonial-card-visualize">
                <div className="testimonial-header-visualize">
                  <img src="https://via.placeholder.com/50" alt="Cliente" />
                  <div>
                    <h4>Carlos Santos</h4>
                    <div className="rating-visualize">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>"Superou todas as expectativas! Recomendo fortemente."</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

export default Contratar_Fornecedor
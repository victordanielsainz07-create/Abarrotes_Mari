        document.getElementById('toggleHorario').addEventListener('click', function() {
            const horarioDiv = document.getElementById('horario');
            const button = document.getElementById('toggleHorario');
            
            if (horarioDiv.innerHTML.includes('Lunes')) {
                mostrarHorarioHoy();
                button.textContent = 'Ver Horario Completo';
            } else {
                mostrarHorarioCompleto();
                button.textContent = 'Ver Solo Hoy';
            }
        });
        
        function mostrarHorarioHoy() {
            const hoy = new Date();
            const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const diaActual = dias[hoy.getDay()];
            
            let horarioHTML = `<h5>${diaActual}:</h5>`;
            
            if (diaActual === 'Domingo') {
                horarioHTML += `<p class="mb-0"><strong>8:00 AM - 3:00 PM</strong></p>`;
            } else {
                horarioHTML += `<p class="mb-0"><strong>7:00 AM - 9:00 PM</strong></p>`;
            }
            
            document.getElementById('horario').innerHTML = horarioHTML;
        }
        
        function mostrarHorarioCompleto() {
            const horarios = [
                {dia: 'Lunes', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Martes', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Miércoles', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Jueves', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Viernes', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Sábado', horario: '7:00 AM - 9:00 PM'},
                {dia: 'Domingo', horario: '8:00 AM - 3:00 PM'}
            ];
            
            const hoy = new Date();
            const diaActual = hoy.getDay();
            
            let horarioHTML = '';
            horarios.forEach((item, index) => {
                const esHoy = index === diaActual;
                horarioHTML += `
                    <div class="row ${esHoy ? 'today' : ''} py-2 border-bottom">
                        <div class="col-6">${item.dia}:</div>
                        <div class="col-6 text-end">${item.horario}</div>
                    </div>
                `;
            });
            
            document.getElementById('horario').innerHTML = horarioHTML;
        }
        
        mostrarHorarioHoy();
        
        const promociones = [
            "Hoy tenemos un 20% de descuento en todos los productos lácteos. ¡No te lo pierdas!",
            "Compra 2 kilos de tortilla y lleva el tercero gratis. Oferta válida solo hoy.",
            "Descuento del 15% en frutas y verduras de temporada. ¡Aprovecha!",
            "Lleva 3 productos enlatados y paga solo 2. Oferta por tiempo limitado.",
            "Hoy ofrecemos envío gratis en compras mayores a $300. ¡Aprovecha esta promoción!"
        ];
        
        document.getElementById('changePromo').addEventListener('click', function() {
            const promoText = document.getElementById('promo-text');
            const currentPromo = promoText.textContent;
            let newPromo;
            
            do {
                newPromo = promociones[Math.floor(Math.random() * promociones.length)];
            } while (newPromo === currentPromo && promociones.length > 1);
            
            promoText.textContent = newPromo;
        });
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Gracias ${name}, hemos recibido tu mensaje. Te contactaremos en ${email} pronto.`);
            
            document.getElementById('contactForm').reset();
        });
        
        document.getElementById('subscribeBtn').addEventListener('click', function() {
            const email = document.getElementById('newsletterEmail').value;
            
            if (email && email.includes('@')) {
                alert(`¡Gracias por suscribirte con el email ${email}! Recibirás nuestras ofertas pronto.`);
                document.getElementById('newsletterEmail').value = '';
            } else {
                alert('Por favor, ingresa un email válido.');
            }
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSectionId = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSectionId = '#' + section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentSectionId) {
                    link.classList.add('active');
                }
            });
        });
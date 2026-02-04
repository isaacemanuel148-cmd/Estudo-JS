(() => {
	const btn = document.getElementById('actionBtn');
	const toastEl = document.getElementById('toast');
	let toastTimer = null;

	function showToast(message, duration = 3000) {
		if (!toastEl) return;
		toastEl.textContent = message;
		toastEl.classList.add('show');
		if (toastTimer) clearTimeout(toastTimer);
		toastTimer = setTimeout(() => {
			toastEl.classList.remove('show');
			toastTimer = null;
		}, duration);
	}

	if (btn) {
		btn.addEventListener('click', () => {
			// Animação sutil
			btn.animate([
				{ transform: 'translateY(0) scale(1)' },
				{ transform: 'translateY(-4px) scale(1.02)' },
				{ transform: 'translateY(0) scale(1)' }
			], { duration: 220, easing: 'ease-out' });

			showToast('Você clicou no botão!');
		});
	}
	// Cursor follower (suave)
	const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
	if (!isTouch) {
		const follower = document.createElement('div');
		follower.className = 'cursor-follower';
		document.body.appendChild(follower);

		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let posX = mouseX;
		let posY = mouseY;

		document.addEventListener('mousemove', (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			follower.style.opacity = '1';
		});

		document.addEventListener('mouseleave', () => {
			follower.style.opacity = '0';
		});

		document.addEventListener('mousedown', () => follower.classList.add('active'));
		document.addEventListener('mouseup', () => follower.classList.remove('active'));

		function animateFollower() {
			posX += (mouseX - posX) * 0.14;
			posY += (mouseY - posY) * 0.14;
			follower.style.transform = `translate3d(${posX - 18}px, ${posY - 18}px, 0)`;
			requestAnimationFrame(animateFollower);
		}

		requestAnimationFrame(animateFollower);
	}

		// Tabs: alterna entre 'interaction' e 'profile'
		const tabButtons = document.querySelectorAll('.tab-btn');
		function setActiveTab(name){
			const interaction = document.getElementById('tab-interaction');
			const profile = document.getElementById('tab-profile');
			if(name === 'profile'){
				interaction.style.display = 'none';
				profile.style.display = '';
			}else{
				interaction.style.display = '';
				profile.style.display = 'none';
			}
			tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
		}

		tabButtons.forEach(b => b.addEventListener('click', () => setActiveTab(b.dataset.tab)));

		// Perfil: edição simples inline
		const editBtn = document.getElementById('editProfile');
		if(editBtn){
			editBtn.addEventListener('click', async () => {
				const nameEl = document.getElementById('profileName');
				const bioEl = document.getElementById('profileBio');
				const newName = prompt('Nome:', nameEl.textContent) || nameEl.textContent;
				const newBio = prompt('Bio:', bioEl.textContent) || bioEl.textContent;
				nameEl.textContent = newName;
				bioEl.textContent = newBio;
				showToast('Perfil atualizado');
			});
		}

		const logoutBtn = document.getElementById('logout');
		if(logoutBtn){
			logoutBtn.addEventListener('click', () => showToast('Logout (exemplo)'));
		}

		// Avatar upload / preview (persistido em localStorage)
		const avatarEl = document.querySelector('.profile-avatar');
		const avatarInputEl = document.getElementById('avatarInput');

		function setAvatarDataURL(dataURL){
			if(!avatarEl) return;
			avatarEl.style.backgroundImage = `url('${dataURL}')`;
			avatarEl.classList.add('has-image');
			localStorage.setItem('profileAvatar', dataURL);
		}

		// carregar avatar salvo
		const savedAvatar = localStorage.getItem('profileAvatar');
		if(savedAvatar){
			setAvatarDataURL(savedAvatar);
		}

		// clique na imagem abre seletor
		if(avatarEl){
			avatarEl.addEventListener('click', () => {
				if(avatarInputEl) avatarInputEl.click();
			});
		}

		const changeBtn = document.getElementById('changeAvatar');
		const removeBtn = document.getElementById('removeAvatar');

		if(changeBtn){
			changeBtn.addEventListener('click', () => avatarInputEl && avatarInputEl.click());
		}

		if(avatarInputEl){
			avatarInputEl.addEventListener('change', (ev) => {
				const file = ev.target.files && ev.target.files[0];
				if(!file) return;
				const reader = new FileReader();
				reader.onload = () => setAvatarDataURL(reader.result);
				reader.readAsDataURL(file);
			});
		}

		if(removeBtn){
			removeBtn.addEventListener('click', () => {
				if(avatarEl){
					avatarEl.style.backgroundImage = '';
					avatarEl.classList.remove('has-image');
				}
				localStorage.removeItem('profileAvatar');
				showToast('Foto removida');
			});
		}

		})();
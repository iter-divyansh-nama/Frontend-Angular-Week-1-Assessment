const team = [
  {
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Alex is a visionary leader with 15+ years of experience building world-class tech companies. He drives strategy, culture, and growth at Visionary."
  },
  {
    name: "Sarah Williams",
    role: "Technical Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sarah leads all engineering initiatives with a passion for clean architecture and scalable systems. She holds a PhD in Computer Science from MIT."
  },
  {
    name: "Michael Chen",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Michael crafts beautiful, human-centered designs. With a background in industrial design, he brings a unique perspective to every product experience."
  },
  {
    name: "Emily Davis",
    role: "Head of Product",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Emily bridges user needs and business goals. She has shipped 20+ products and believes great products are built at the intersection of empathy and data."
  }
];

const grid = document.getElementById('teamGrid');

team.forEach((member, index) => {
  const card = document.createElement('div');
  card.className = 'team-card';
  card.innerHTML = `
    <div class="avatar-wrap">
      <img
        src="${member.img}"
        alt="${member.name}"
        loading="lazy"
        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4a7fc1&color=fff&size=100'"
      />
    </div>
    <h3>${member.name}</h3>
    <p class="role">${member.role.toUpperCase()}</p>
  `;
  card.addEventListener('click', () => openModal(index));
  grid.appendChild(card);
});

function openModal(index) {
  const m = team[index];
  const modalImg = document.getElementById('modalImg');

  modalImg.src = m.img;
  modalImg.alt = m.name;
  modalImg.onerror = function () {
    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4a7fc1&color=fff&size=100`;
  };

  document.getElementById('modalName').textContent = m.name;
  document.getElementById('modalRole').textContent = m.role.toUpperCase();
  document.getElementById('modalBio').textContent = m.bio;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

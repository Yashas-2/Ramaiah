const pages = document.querySelectorAll('.page');
const postList = document.getElementById('postList');
const articleContent = document.getElementById('articleContent');
const yearElements = document.querySelectorAll('.year');
const backBtns = document.querySelectorAll('.backBtn');
const navLinks = document.querySelectorAll('nav a');

const articles = [
  {
    title: "The Art of Simplicity",
    content: "<p>Simplicity is the ultimate sophistication. It's about finding the beauty in less, and stripping away the unnecessary to reveal the essential.</p>"
  },
  {
    title: "Focus in a Distracted World",
    content: "<p>In a world filled with noise and distractions, true focus is a rare and valuable commodity. Learning to cultivate it is a superpower.</p>"
  },
  {
    title: "Designing Without Color",
    content: "<p>The elegance of grayscale aesthetics can be more powerful than a full spectrum of colors. It forces a focus on form, texture, and light.</p>"
  }
];

yearElements.forEach(yearEl => {
  yearEl.textContent = new Date().getFullYear();
});

function showPage(id) {
  pages.forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function renderPosts() {
  postList.innerHTML = '';
  articles.forEach((article, index) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.dataset.id = index;
    postDiv.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.content.substring(0, 50)}...</p>
    `;
    postList.appendChild(postDiv);

    postDiv.addEventListener('click', () => openArticle(index));
  });
}

function openArticle(index) {
  const article = articles[index];
  articleContent.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (link.id.includes('home')) {
      showPage('homePage');
    } else if (link.id.includes('about')) {
      showPage('aboutPage');
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => showPage('homePage'));
});

renderPosts();
showPage('homePage');

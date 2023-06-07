document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');
    var sections = document.querySelectorAll('section');
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = event.target.getAttribute('href').substring(1);
        
        for (var j = 0; j < sections.length; j++) {
          sections[j].classList.remove('tela-ativa');
          if (sections[j].getAttribute('id') === target) {
            sections[j].classList.add('tela-ativa');
          }
        }
      });
    }
  });
var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
}  
function openModal(modalId) {
  var modal = document.getElementById("modal" + modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById("modal" + modalId);
  modal.style.display = "none";
}


function updateProgress(subjectId, progress) {
  var progressElement = document.getElementById("progresso" + subjectId);
  progressElement.style.width = progress + "%";
}


updateProgress(1, 100);
updateProgress(2, 70); 
updateProgress(3, 60); 
updateProgress(4, 40); 
updateProgress(5, 40); 
updateProgress(6, 40); 
updateProgress(7, 40); 

// Função para rolar suavemente para o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar ou ocultar o botão de voltar ao topo com base na posição da página
window.addEventListener('scroll', function() {
  var button = document.querySelector('.back-to-top');
  if (window.scrollY > 200) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});
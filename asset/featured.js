
document.addEventListener('DOMContentLoaded', function() {
  const projectBoxes = document.querySelectorAll('.grid-item-featured');
  
  const projectLinks = {
    'grid-item-featured-1': '#',
    'grid-item-featured-2': '#',
    'grid-item-featured-3': '#',
    'grid-item-featured-4': '#',
    'grid-item-featured-5': '#',
    'grid-item-featured-6': '#',
    'grid-item-featured-7': '#',
  };
  
  projectBoxes.forEach(box => {
    box.addEventListener('click', function(e) {
      let linkClass = null;
      for (let i = 0; i < this.classList.length; i++) {
        if (this.classList[i].startsWith('grid-item-featured-')) {
          linkClass = this.classList[i];
          break;
        }
      }
      
      const link = projectLinks[linkClass];
      if (link && link !== '#') {
        window.open(link, '_blank');
      }
    });
    
    box.style.cursor = 'pointer';
  });
});
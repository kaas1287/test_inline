export const greenLineBatton = document.querySelectorAll('.header-main__items');
greenLineBatton.forEach(box => {
    
    box.addEventListener('click', function () {
        greenLineBatton.forEach(elem => {
            elem.style.borderBottom = '0px solid green';
        });
      box.style.borderBottom = '4px solid green';
      
    });
  });
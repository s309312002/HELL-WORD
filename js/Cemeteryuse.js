$(window).on('click', e => {
    const target = e.target
  
    if (target.matches('.user-btn')) { 
      return $('.profile').toggleClass('show') 
    }
    
    if (!target.matches('[data-inside]')) { 
      $('.profile').removeClass('show') 
    }
  })
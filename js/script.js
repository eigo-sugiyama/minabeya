  //ハンバーガーメニューの開閉
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });

  // スライダーをクリックしたときに次のスライドに進む
  $('.slider').on('click', function() {
    $(this).slick('slickNext');
  });

  
  window.addEventListener('load', function() {
    const siteTitle = document.querySelector('.site-title');
    
    // 遅延を与えてアニメーションを開始
    setTimeout(function() {
      siteTitle.style.transform = 'scale(1)'; // 1倍の大きさにする
      siteTitle.style.opacity = '1'; // 透明度を完全にする
    }, 500); // 0.5秒後にアニメーションを開始
  });

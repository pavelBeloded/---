let photos = document.querySelectorAll('.photo');
photos[0]
photos[0].addEventListener('mouseover', (e)=>{
   photos[0].firstElementChild.style.display = 'none';
   photos[0].lastElementChild.style.display = 'block';

})
photos[0].addEventListener('mouseout', (e)=>{
    photos[0].firstElementChild.style.display = 'block';
    photos[0].lastElementChild.style.display = 'none';
 
 })

 photos[1].addEventListener('mouseover', (e)=>{
    photos[1].firstElementChild.style.border= '10px solid red';

 
 })
 photos[1].addEventListener('mouseout', (e)=>{
    photos[1].firstElementChild.style.border= '0';

  })


  photos[2].addEventListener('mouseover', (e)=>{
    photos[2].firstElementChild.setAttribute('src', './3.png');
 
 })
 
 photos[2].addEventListener('mouseout', (e)=>{
    photos[2].firstElementChild.setAttribute('src', './2.png');

  })


  document.querySelector('#but').addEventListener('click', (e)=>{
   e.preventDefault();
   document.querySelectorAll('select').forEach((item, index)=>{
      let value = item.value;

      document.querySelectorAll('li')[index].innerHTML = value;
   })
  })






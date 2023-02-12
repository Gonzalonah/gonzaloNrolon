
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
      
document.getElementById('ima')=innerHTML+="<img src="+results.picture.large+">";
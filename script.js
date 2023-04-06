function requestViews() {
      fetch('/views', { method : 'POST' })//views에 POST 요청
      .then(response => { 
            if (response.status === 200) {
                  console.log('성공.');
            } else if(response.status === 403){
                  console.log('실패.');
            }
            return response;
      })
      .catch(error => { //에러 처리
            console.error('에러.', error);
      });          
}

function getViews() {
      fetch('/views')
      .then(response => {
            if (response.ok){ //응답이 성공했는지
                  return response.json();
            } else{
                  throw new Error('실패.');
            }
      })
      .then(data => {//조회수 출력
            const views = data.views;
            document.getElementById('getViews').textContent = views;
      })
      .catch(error => { //에러 처리
            console.error('에러.', error);
      });  
}
function requestViews() {
      fetch('http://13.231.197.171:8000/views', { method : 'POST' })//views에 POST 요청
      .then(response => { 
            if (response.status === 200) {
                  console.log('POST 요청 성공');
            } else if(response.status === 403){
                  console.log('POST 요청 실패');
            }
            return response;
      })
      .catch(error => { //에러 처리
            console.error('POST 요청 에러', error);
      });          
}

function getViews() {
      fetch('http://13.231.197.171:8000/views')
      .then(response => {
            if (response.ok){ //응답이 성공했는지
                  console.log('GET 요청 성공');
                  return response.json();
            } else{
                  throw new Error('GET 요청 실패');
            }
      })
      .then(data => {//조회수 출력
            const views = data.views;
            document.getElementById('getViews').textContent = views;
      })
      .catch(error => { //에러 처리
            console.error('GET 요청 에러', error);
      });  
}
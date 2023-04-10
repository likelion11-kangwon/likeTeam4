window.onload = function() {
      var Container = document.getElementById('lion-fur');
      for (var i = 0; i < 10; i++) { //10번 반복
        var fur = document.createElement('div');
        fur.className = 'fur';
        Container.appendChild(fur); //div 요소 추가
        animatefall(fur);
      }
      function animatefall(fur) { //사자 털이 내리는 애니메이션 효과
        var x = Math.random() * window.innerWidth;
        var y = Math.random();
        var speed = 1.5 + Math.random(); //기본 속도 1.5
        function fall() {
          y += speed;
          if (y > window.innerHeight) { //y가 화면 높이를 넘어가면
            x = Math.random() * window.innerWidth;
            y = Math.random()-50;
          }
          fur.style.transform = `translate(${x}px, ${y}px)`;
          requestAnimationFrame(fall);
        }
        fall();
      }

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
    };
    

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

function clickAlert() {
      alert("구현 예정입니다");
}


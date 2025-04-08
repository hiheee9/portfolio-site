window.addEventListener("load", () => {
  // Isotope 인스턴스 객체 생성
  const grid = new Isotope(".work-list", {
    // options
    itemSelector: "article", // 배치할 요소
    transitionDuration: "0.3s",
    masonry: {
      columsWidth: "article",
      gutter: 20,
    },
  });

  // 클릭할 모든 버튼 요소 변수에 저장
  const btns = document.querySelectorAll(".work-nav ul li");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // 변수 sort에 클릭한 대상의 자신인 a요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      //grid 객체에 저장된 결괏값을 불러와 재정렬 기능 연결
      grid.arrange({
        //options
        filter: sort,
      });
      // 모든 버튼의 갯수만큼 반복을 돌면서
      btns.forEach((el) => {
        // 클래스명 "on" 제거
        el.classList.remove("on");
      });

      // 클릭한 대상만 클래스명 "on" 추가해 활성화
      e.currentTarget.classList.add("on");
    });
  });

  // 클릭시 맨위로 스크롤 되기
  document.querySelector(".button").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

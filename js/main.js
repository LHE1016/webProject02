// main.js

// 퀵메뉴 이미지
// for문 이용해서 img를 qucik01_00000 ~ 04_00019.png 생성
// span에 넣기

const quickSpan = document.querySelectorAll(".content1>ul>li>a>span");

for(let k=0; k<quickSpan.length; k++){ // 대분류: 0 1 2 3
    let imgCode = "";

    for(let i=0; i<20; i++){ // 소분류
        if(i<10){
            imgCode += `<img src="images/quick0${k+1}/quick0${k+1}_0000${i}.png" />`
        }else{
            imgCode += `<img src="images/quick0${k+1}/quick0${k+1}_000${i}.png" />`
        }
    }
    quickSpan[k].innerHTML = imgCode;
}

// span.login > a.appear에 
// <img src = "images/appear/appear_00000~00056.png" />,
//  a.loop에 
// <img src = "images/loop/loop_00000~00081.png" />,

const appear = document.querySelector("span.login > a.appear");
const loop = document.querySelector("a.loop");
let appearImg = "";
let loopImg = "";

for(let i=0; i<57; i++){
    if(i<10){
        appearImg += `<img src = "images/appear/appear_0000${i}.png" alt="로그인버튼${i}" />` 
    }else{
        appearImg += `<img src = "images/appear/appear_000${i}.png" alt="로그인버튼${i}"/>` 
    }
    appear.innerHTML = appearImg;
}

for(let i=0; i<82; i++){
    if(i<10){
        loopImg += `<img src = "images/loop/loop_0000${i}.png" alt="로그인버튼${i}" />` 
    }else{
        loopImg += `<img src = "images/loop/loop_000${i}.png" alt="로그인버튼${i}" />` 
    }
    loop.innerHTML = loopImg;
}


// 로그인 애니메이션
// appear 0~56
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1; ... delay시간 0.05초씩 증가
// 총 애니메이션 시간 => 0.05*57 = 2.85

// loop 0~81
// appear가 먼저 나타났다 사라지고 난 뒤부터 등장
// 0.05 * 82 = 4.1
// animation: ani 4.1s linear 2.85s infinite; ... delay시간 0.5초씩 증가

const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img")
const loopImgs  = document.querySelectorAll(".loop>img");

for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}


// 고객센터 누르면 class on이 toggle됨
// title="고객센터 열기" -> "고객센터 닫기"
const customer = document.querySelector("dl.top_menu > dd:nth-of-type(5)");

customer.addEventListener("click", e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기");
    }
});


// 주메뉴 마우스 오버하면 
// header_wrap 에 .on
// nav.gnb > ul>li>ul.on
// 탑메뉴 고객센터, 검색박스에 .on이 붙어있으면 on이 지워짐
const headerWrap = document.querySelector('.header_wrap');
const gnbMenu = document.querySelectorAll('nav.gnb>ul>li');
const gnbMenuUls = document.querySelectorAll("nav.gnb> ul ul")
console.log(gnbMenuUls);

for (let i = 0; i < gnbMenu.length; i++) {
  gnbMenu[i].addEventListener('mouseover', e => {

    if(customer.classList.contains("on")){
        customer.classList.remove("on");
    }

    if(formSrch.classList.contains("on")){
        formSrch.classList.remove("on");
        btnSrch.classList.remove("on");
    }

    headerWrap.classList.add('on');

    gnbMenuUls.forEach(item =>{
        item.classList.add("on");
    });
   
  });

  gnbMenu[i].children[0].addEventListener('focus', e => {
    headerWrap.classList.add('on');
    gnbMenuUls.forEach(item =>{
        item.classList.add("on");
    });
  });

  gnbMenu[i].addEventListener('mouseout', e => {
    headerWrap.classList.remove('on');
    gnbMenuUls.forEach(item =>{
        item.classList.remove("on");
    });
  });

  gnbMenu[i].children[0].addEventListener('blur', e => {
    headerWrap.classList.remove('on');
    gnbMenuUls.forEach(item =>{
        item.classList.remove("on");
    });
  });


}// for문


// 검색입력서식 toggle - title까지 변경
const btnSrch = document.querySelector("span.srch_open");
const formSrch = document.querySelector("form.srch");

btnSrch.addEventListener("click", e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title", "검색입력서식 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title", "검색입력서식 열기");
    }
    formSrch.classList.toggle("on");
});


// banner background
// background: url(images/banner/banner0000.jpg);
const sections = document.querySelectorAll(".banner_frame > section");
console.log(sections);
let sectionImg = "";

for(let i=0; i<sections.length; i++){ //0~11
    if(i<10){
        sectionImg = `url(images/banner/banner000${i}.jpg) no-repeat 50% 0`
    }else{
        sectionImg = `url(images/banner/banner00${i}.jpg) no-repeat 50% 0`
    }
    console.log(sectionImg);
    sections[i].style.background = sectionImg;
}


// banner
// next버튼 누르면 다음 배너로 넘어가고(bnnIndx++), 마지막 배너번호보다 크면 0으로, 배너프레임 left 값이 -
const btnPrev = document.querySelector("a.btn_prev");
const btnNext = document.querySelector("a.btn_next");
const bnnFrame = document.querySelector(".banner_frame");
const btnPlay = document.querySelector(".banner_rolling > p");

const bnnRoll = document.querySelectorAll(".banner_rolling ul > li");
const bnnArrowA = document.querySelectorAll(".banner_arrow > a")
console.log(bnnArrowA);

let bnnIdx = 0; 
let lastIdx = sections.length -1; //11
let w = document.querySelector("body>section").offsetWidth;
console.log(w);

// rolling 클릭
const bnnRolling = document.querySelectorAll(".banner_rolling ul > li");
for(let r=0; r<bnnRolling.length; r++){
    bnnRolling[r].addEventListener("click", e=>{
        bnnIdx = r;
        clearTimeout(autoBnn);
        flag = false;
        btnPlay.classList.add("play")
        bnnAction(r);
    });
}

// play/pause버튼
let flag = true;
btnPlay.addEventListener("click", e=>{
    if(flag){
        e.currentTarget.classList.add("play"); // true면 버튼이 재생버튼으로 바뀜
        clearTimeout(autoBnn);
        flag = false;
    }else{
        e.currentTarget.classList.remove("play"); // false면 버튼이 일시정지버튼으로 바뀜
        setTimeout(autoBanner,5000);
        flag = true;
    }
});


// secwhite 함수
let secWhite = bnnNum =>{
    if(sections[bnnNum].classList.contains("white")){
        bnnArrowA.forEach(item=>{
            item.classList.add("white");
        })
        bnnRoll.forEach(item =>{
            item.classList.add("white");
        })
        btnPlay.classList.add("white");
    }else{
        bnnArrowA.forEach(item=>{
            item.classList.remove("white");
        })
        bnnRoll.forEach(item =>{
            item.classList.remove("white")
        })
        btnPlay.classList.remove("white");
    }
}
secWhite(0);


// bnnAction 함수
let bnnAction = (idx) =>{
    bnnFrame.style.left = `-${w*idx}px`; //프레임 이동

    bnnRoll.forEach(item =>{ // 롤링.on
        item.classList.remove("on")
    });
    bnnRoll[idx].classList.add("on");

    if(sections[idx].classList.contains("white")){ //화이트
        bnnArrowA.forEach(item=>{
            item.classList.add("white");
        })
        bnnRoll.forEach(item =>{
            item.classList.add("white");
        })
        btnPlay.classList.add("white");
    }else{
        bnnArrowA.forEach(item=>{
            item.classList.remove("white");
        })
        bnnRoll.forEach(item =>{
            item.classList.remove("white")
        })
        btnPlay.classList.remove("white");
    }
}

window.addEventListener("resize", ()=>{
    w = document.querySelector("body>section").offsetWidth;
})


// next버튼
btnNext.addEventListener("click", e=>{
    e.preventDefault();
    bnnIdx++;
    if(bnnIdx > lastIdx) bnnIdx = 0; // 1~11
    bnnAction(bnnIdx);
});


// prev버튼
btnPrev.addEventListener("click", e=>{
    e.preventDefault();
    bnnIdx--;
    if(bnnIdx < 0) bnnIdx = lastIdx;
    bnnAction(bnnIdx);
});


// 오토배너
function autoBanner(){
    bnnIdx++;
    if(bnnIdx > lastIdx) bnnIdx = 0; // 1~11
    bnnAction(bnnIdx);
    autoBnn = setTimeout(autoBanner,5000);
}
let autoBnn = setTimeout(autoBanner,5000);


// content1 애니메이션
// quick01~04 하나하나에 마우스 오버하면 해당 quickAni 실행 ( 0.05초씩 20개 = 1초 동안 실행 )
// quick01~04 하나하나에 마우스 아웃하면 해당 애니메이션 none
const quickList = document.querySelectorAll(".content1 > ul > li"); // 0,1,2,3
console.log(quickList);

for(let i=0; i<quickList.length; i++){
    quickList[i].addEventListener("mouseover", e=>{ //i번째 li에 마우스 오버하면 

        for(let k=0; k<20; k++){    // i번째 li 하위 span > 이미지에 0~19번째 애니메이션 실행 
           let spanImg = e.currentTarget.children[0].children[0].children;
           spanImg[k].style.animation = `ani 1s linear ${delay*k}s 1`
        } 
    });
}

// quickList.forEach(item =>{
//     item.addEventListener("mouseover", e=>{ //i번째 li에 마우스 오버하면 
//         for(let k=0; k<20; k++){    // i번째 li 하위 span > 이미지에 0~19번째 애니메이션 실행 
//            let spanImg = e.currentTarget.children[0].children[0].children;
//            spanImg[k].style.animation = `ani 1s linear ${delay*k}s 1`
//         } 
//     });
// })



for(let i=0; i<quickList.length; i++){
    quickList[i].addEventListener("mouseout", e=>{ //i번째 li에 마우스 오버하면 

        for(let k=0; k<20; k++){    // i번째 이미지에 0~19번째 애니메이션 실행 
           let spanImg = e.currentTarget.children[0].children[0].children;
           spanImg[k].style.animation = "none";
        } 
    });
}


// circle_wrap
window.addEventListener("scroll", ()=>{
   let scroll = document.querySelector("html").scrollTop;
    //도넛
    const combine_Left = document.querySelector(".combine_Left");
    const doughnut_Left_S = document.querySelector(".dougnnut_Left_S");
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");

    combine_Left.style.top = `${scroll*0.7}px`;
    doughnut_Left_S.style.top = `${scroll*0.5}px`;
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`

    const dougnnut_Center_S = document.querySelector(".dougnnut_Center_S");
    const doughnut_Center_M = document.querySelector(".doughnut_Center_M");

    dougnnut_Center_S.style.top = `${scroll*0.3}px`;
    doughnut_Center_M.style.top = `${1310-scroll*0.5}px`

    const combine_Right = document.querySelector(".combine_Right");
    const dougnnut_Right_S = document.querySelector(".dougnnut_Right_S");

    combine_Right.style.top = `${scroll*0.7}px`;
    dougnnut_Right_S.style.top = `${scroll*0.1}px`;
});


// content3
// li하나하나 마우스 오버하면 해당 li에만 class on이붙어라
// 단, 마우스 오버한 li가 6의 배수에 해당하면
const content3List = document.querySelectorAll(".content3_inner > div > ul > li");
console.log(content3List);



function activation(index,list){
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

for(let i=0; i<content3List.length; i++){
    content3List[i].addEventListener("mouseover", e=>{
        e.preventDefault();
        activation(i,content3List);
    });
}

for(let i=0; i<content3List.length; i++){
    content3List[i].addEventListener("mouseout", e=>{
        e.preventDefault();
        content3List[i].classList.remove("on");
    });
}

// 카테고리(li)를 클릭하면 
// 해당 li의 클래스 속성 값을 가져와서 변수에 저장(li.all, li.ent, li)
// 변수값과 div li의 클래스 속성값이 정확하게 일치하면(switch case)
// 해당 li만 보임(이를 위해 각 클래스 이름에 해당하는 li만 따로 모아 저장해놔야 함)
const group = document.querySelectorAll(".content3_inner > ul > li > a"); //전체, 엔터, 쇼핑, 외식, 유통
const all = document.querySelectorAll(".content3_inner > div > ul > li");
const ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
const shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
const dining = document.querySelectorAll(".content3_inner > div > ul > li.dining");
const box = document.querySelectorAll(".content3_inner > div > ul > li.box");

for(let k=0; k<group.length; k++){
    group[k].addEventListener("click", e=>{
        e.preventDefault();
        
        group.forEach(item =>{
            item.classList.remove("on");
        });
        e.currentTarget.classList.add("on");

        let className = e.currentTarget.parentElement.getAttribute("class"); // all. ent shop dining box

        all.forEach(item =>{
            item.style.display = "none";
        });

        switch (className) {
            case "all":
                all.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "ent":
                ent.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "shop":
                shop.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "dining":
                dining.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "box":
                box.forEach(item =>{
                    item.style.display = "block";
                });
                break;
        } // switch case
    }); //click
} //for문


// dd.family site 누르면 class에 on이 toggle됨 + title도 바뀜
const famSite = document.querySelector(".foot_inner > dl > dd.family_site");
console.log(famSite);

famSite.addEventListener("click", e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","열기");
    }
})


// top버튼 누르면 scroll top이 0이 됨
// 스크롤이 0보다 커지면 .top에 .on이 붙고, 더 내려가면 .on사라지고 .ab붙음
const btnTop = document.querySelector(".top");

btnTop.addEventListener("click",e=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", e=>{

    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll);

    if(scroll > 0){
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }
    if(scroll > 2200){
        btnTop.classList.remove("on");
        btnTop.classList.add("ab");
    }
})


// mobile 햄버거 버튼
// 클릭하면 div.mob에 .on이 붙고, 바디, bg에 .on이 붙음
const btnMob = document.querySelector("div.mobBtn > a");
const btnMobClose = document.querySelector("div.mobBtn_close");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
const mob = document.querySelector("div.mob");
console.log(btnMob);

btnMob.addEventListener("click", e=>{
    mob.classList.add("on");
    body.classList.add("on");
    bg.classList.add("on");
    btnMobClose.classList.add("on");
});

btnMobClose.addEventListener("click", e=>{
    mob.classList.remove("on");
    body.classList.remove("on");
    bg.classList.remove("on");
    btnMobClose.classList.remove("on");
});


// mob_topmenu
// 고객센터 누르면 클래스 on붙음
const cs = document.querySelector("dl.mob_topMenu > dd:nth-of-type(5)");
cs.addEventListener("click", e=>{
    e.currentTarget.classList.toggle("on");
})

// mob_gnb
// i번째 li클릭하면 다른 li의 클래스 온 지워지고 해당 li에 .on이 토글되고, 
const mobGnbList = document.querySelectorAll(".mob_gnb > ul > li");

function activation(index,list){
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.toggle("on");
}

for(let i=0;i<mobGnbList.length;i++){
    mobGnbList[i].addEventListener('click',e=>{
        e.preventDefault();
        activation(i,mobGnbList);
    })
}


/*
const brandLi = document.querySelectorAll('.content3_inner>div>ul>li');

let htmlWidth = document.querySelector('html').offsetWidth;
let classLeft = '';
window.addEventListener('resize', () => {
  htmlWidth = document.querySelector('html').offsetWidth;
  if (htmlWidth > 768) {
    classLeft = 6;
  } else {
    classLeft = 4;
  }
});

brandLi.forEach((item, idx) => {
  item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.add('on');
    } else {
      e.currentTarget.classList.add('left');
    }
  });
  item.addEventListener('mouseout', (e) => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.remove('on');
    } else {
      e.currentTarget.classList.remove('left');
    }
  });
});

*/


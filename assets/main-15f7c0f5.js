import{_ as n}from"./back-888361ac.js";import{n as o}from"./index-84e5a1c7.js";const l=""+new URL("../images/gen-story.png",import.meta.url).href;const d={data(){return{brands:[{iconName:"ele1",img:"ele1"},{iconName:"ele2",img:"ele2-2"},{iconName:"ele3",img:"ele3"},{iconName:"ele4",img:"ele4"},{iconName:"ele4",img:"ele4-3"},{iconName:"ele3",img:"ele3-2"},{iconName:"ele3",img:"ele3-3"}],randomDraggableBrands:[],totalDraggableItems:9,totalMatchingPairs:4,correct:0,total:0}},mounted(){this.initiateGame()},methods:{initiateGame(){this.randomDraggableBrands=this.generateRandomItemsArray(this.totalDraggableItems,this.brands);const a=document.querySelectorAll(".draggable"),t=document.querySelectorAll(".droppable");a.forEach(e=>{e.addEventListener("dragstart",this.dragStart)}),t.forEach(e=>{e.addEventListener("dragenter",this.dragEnter),e.addEventListener("dragover",this.dragOver),e.addEventListener("dragleave",this.dragLeave),e.addEventListener("drop",this.drop)})},dragStart(a){a.dataTransfer.setData("text",a.target.id)},dragEnter(a){a.target.classList&&a.target.classList.contains("droppable")&&!a.target.classList.contains("dropped")&&a.target.classList.add("droppable-hover")},dragOver(a){a.target.classList&&a.target.classList.contains("droppable")&&!a.target.classList.contains("dropped")&&a.preventDefault()},dragLeave(a){a.target.classList&&a.target.classList.contains("droppable")&&!a.target.classList.contains("dropped")&&a.target.classList.remove("droppable-hover")},drop(a){a.preventDefault(),a.target.classList.remove("droppable-hover");const t=a.dataTransfer.getData("text"),e=a.target.getAttribute("data-brand"),r=this.brands.filter(s=>s.img===t);console.log(r,t,111);const i=r[0].iconName===e;if(this.total++,i){const s=document.getElementById(t);a.target.classList.add("dropped"),a.target.classList.add("data-img"),s.classList.add("dragged"),s.setAttribute("draggable","false"),a.target.innerHTML=`
          <img src="/images/${r[0].img}.png" />
        `,this.correct++,console.log("success",this.correct,this.total)}},generateRandomItemsArray(a,t){const e=[],r=[...t];a>r.length&&(a=r.length);for(let i=1;i<=a;i++){const s=Math.floor(Math.random()*r.length);e.push(r[s]),r.splice(s,1)}return e}}};var c=function(){var t=this,e=t._self._c;return e("main",{key:"2"},[t._m(0),e("section",{staticClass:"draggable-items"},t._l(t.brands,function(r){return e("div",{key:r.img},[t._v(" "+t._s(r.img)+" "),e("img",{staticClass:"draggable",attrs:{id:r.img,draggable:"","data-img":r.img,src:`/images/${r.img}.png`}})])}),0),e("div",{staticClass:"matching-pairs-container"},[e("section",{staticClass:"matching-pairs"},t._l(t.totalMatchingPairs,function(r){return e("div",{key:r,class:`matching-pair pair-${r} droppable`,attrs:{"data-brand":t.brands[r-1].iconName}})}),0)]),t.correct===4?e("div",{staticClass:"gen-story"},[e("router-link",{attrs:{id:"gen-story-btn",to:"/gen"}},[e("img",{attrs:{src:l,alt:""}})])],1):t._e()])},g=[function(){var a=this,t=a._self._c;return t("header",{staticClass:"back-btn"},[t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:n,alt:""}})])])}],m=o(d,c,g,!1,null,"93cd6198",null,null);const h=m.exports;export{h as default};

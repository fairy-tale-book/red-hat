import{n as i}from"./index-9a5b5b1f.js";const g=""+new URL("agj-974eadfc.png",import.meta.url).href,o=""+new URL("ahxdw-f9a07ead.png",import.meta.url).href,l=""+new URL("ayc-68428269.png",import.meta.url).href,_=""+new URL("back-820d11ca.png",import.meta.url).href,c=""+new URL("blank1-c23ec560.png",import.meta.url).href,m=""+new URL("dxr-0a7d8c8e.png",import.meta.url).href,p=""+new URL("ele1-1-8cdebd15.png",import.meta.url).href,d=""+new URL("ele1-80fa7859.png",import.meta.url).href,b=""+new URL("ele2-efdcefaa.png",import.meta.url).href,f=""+new URL("ele2副本-1d090724.png",import.meta.url).href,h=""+new URL("ele3-0decad72.png",import.meta.url).href,u=""+new URL("ele4-51ae9fd5.png",import.meta.url).href,L=""+new URL("ele5-681f057c.png",import.meta.url).href,v=""+new URL("ele6-2380ab13.png",import.meta.url).href,R=""+new URL("elee-c5877242.png",import.meta.url).href,w=""+new URL("gen-story-0cbb9b70.png",import.meta.url).href,U=""+new URL("pair1-8a688ec1.png",import.meta.url).href,y=""+new URL("pair2-593b95d5.png",import.meta.url).href,E=""+new URL("pair3-c74aa653.png",import.meta.url).href,k=""+new URL("pair4-08bb7c2e.png",import.meta.url).href,N=""+new URL("qr-bd40b286.png",import.meta.url).href,x=""+new URL("qxs-5c444c91.png",import.meta.url).href,z=""+new URL("zcjg-ad3244d9.png",import.meta.url).href,A=""+new URL("zs-208b358f.png",import.meta.url).href,q=""+new URL("zztr-9f1192fc.png",import.meta.url).href,C=""+new URL("gen-story-0cbb9b70.png",import.meta.url).href,D=""+new URL("back-820d11ca.png",import.meta.url).href;const I={data(){return{brands:[{iconName:"ele1",img:"ele1"},{iconName:"ele2",img:"ele2"},{iconName:"ele3",img:"ele3"},{iconName:"ele4",img:"ele4"},{iconName:"ele5",img:"ele5"},{iconName:"ele6",img:"ele6"},{iconName:"ele1",img:"elee"}],randomDraggableBrands:[],totalDraggableItems:9,totalMatchingPairs:4,correct:0,total:0}},mounted(){this.initiateGame()},methods:{getAssetsFile(e){return new URL(Object.assign({"../images/agj.png":g,"../images/ahxdw.png":o,"../images/ayc.png":l,"../images/back.png":_,"../images/blank1.png":c,"../images/dxr.png":m,"../images/ele1-1.png":p,"../images/ele1.png":d,"../images/ele2.png":b,"../images/ele2副本.png":f,"../images/ele3.png":h,"../images/ele4.png":u,"../images/ele5.png":L,"../images/ele6.png":v,"../images/elee.png":R,"../images/gen-story.png":w,"../images/pair1.png":U,"../images/pair2.png":y,"../images/pair3.png":E,"../images/pair4.png":k,"../images/qr.png":N,"../images/qxs.png":x,"../images/zcjg.png":z,"../images/zs.png":A,"../images/zztr.png":q})[`../images/${e}`],self.location).href},initiateGame(){this.randomDraggableBrands=this.generateRandomItemsArray(this.totalDraggableItems,this.brands);const e=document.querySelectorAll(".draggable"),t=document.querySelectorAll(".droppable");e.forEach(a=>{a.addEventListener("dragstart",this.dragStart)}),t.forEach(a=>{a.addEventListener("dragenter",this.dragEnter),a.addEventListener("dragover",this.dragOver),a.addEventListener("dragleave",this.dragLeave),a.addEventListener("drop",this.drop)})},dragStart(e){e.dataTransfer.setData("text",e.target.id)},dragEnter(e){e.target.classList&&e.target.classList.contains("droppable")&&!e.target.classList.contains("dropped")&&e.target.classList.add("droppable-hover")},dragOver(e){e.target.classList&&e.target.classList.contains("droppable")&&!e.target.classList.contains("dropped")&&e.preventDefault()},dragLeave(e){e.target.classList&&e.target.classList.contains("droppable")&&!e.target.classList.contains("dropped")&&e.target.classList.remove("droppable-hover")},drop(e){e.preventDefault(),e.target.classList.remove("droppable-hover");const t=e.dataTransfer.getData("text"),a=e.target.getAttribute("data-brand"),r=this.brands.filter(n=>n.img===t);console.log(r,t,111);const s=r[0].iconName===a;if(this.total++,s){const n=document.getElementById(t);e.target.classList.add("dropped"),e.target.classList.add("data-img"),n.classList.add("dragged"),n.setAttribute("draggable","false"),e.target.innerHTML=`
          <img src="../src/images/${r[0].img}.png" />
        `,this.correct++,console.log("success",this.correct,this.total)}},generateRandomItemsArray(e,t){const a=[],r=[...t];e>r.length&&(e=r.length);for(let s=1;s<=e;s++){const n=Math.floor(Math.random()*r.length);a.push(r[n]),r.splice(n,1)}return a}}};var M=function(){var t=this,a=t._self._c;return a("main",{key:"2"},[t._m(0),a("section",{staticClass:"draggable-items"},t._l(t.brands,function(r){return a("div",{key:r.img},[a("img",{staticClass:"draggable",attrs:{id:r.img,draggable:"","data-img":r.img,src:t.getAssetsFile(`${r.img}.png`)}}),t._v(" "+t._s(r.img)+" ")])}),0),a("div",{staticClass:"matching-pairs-container"},[a("section",{staticClass:"matching-pairs"},t._l(t.totalMatchingPairs,function(r){return a("div",{key:r,class:`matching-pair pair-${r} droppable`,attrs:{"data-brand":t.brands[r-1].iconName}},[t._v(" "+t._s(t.brands[r-1].iconName)+" ")])}),0)]),t.correct===4?a("div",{staticClass:"gen-story"},[a("router-link",{attrs:{id:"gen-story-btn",to:"/genStory"}},[a("img",{attrs:{src:C,alt:""}})])],1):t._e()])},$=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"back-btn"},[t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:D,alt:""}})])])}],j=i(I,M,$,!1,null,"5a1199d8",null,null);const S=j.exports;export{S as default};

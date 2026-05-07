
        var arr=[]
        var times= document.getElementById('dates')
        var a=  document.getElementById('ans')
        var nam=  document.getElementById('name')
        var con=document.getElementById('context')
        var rem=  document.getElementById('remove')
        var pop=  document.getElementById('popup')
        var ent= document.getElementById('enter')
        var s= document.getElementById('show')
        var btn=document.getElementById('btn')

        btn.addEventListener('click',()=>
        {
            pop.style.display="flex"
        }
        )

        rem.addEventListener('click',()=>
        { 
            pop.style.display="none"
            document.body.style.backgroundColor=""
            nam.value=""
            con.value=""
        }
        )

        ent.addEventListener('click',()=>{
        if(nam.value==""||con.value=="")
        {alert("INVALID DATA'S")}
        else{
        notemake(nam.value,con.value)

        }
        })
        function notemake(N,C){
        
        pop.style.display="none"
        var space=document.createElement('div')
        space.setAttribute("id","container")
        space.innerHTML=`<h3>${N}</h3> <p>${C}</p>
        <button class='clr'>clear</button>`
        a.appendChild(space)
        arr.push(N,C)
        console.log(arr)
        localStorage.setItem("Notes",JSON.stringify(arr))
        console.log(arr)

        let cl=space.querySelector('.clr')
        cl.addEventListener('click',()=>{
        clear(space)
        arrclear(N)
        
        })
        nam.value=""
        con.value=""
        }

        function clear(data){
        data.remove()
        }
        function arrclear(N){
        var index=arr.indexOf(N)
        arr.splice(index,2)
        localStorage.setItem("Notes",JSON.stringify(arr))
        console.log(arr) 
        }

        window.onload=()=>{

        arr2 = JSON.parse(localStorage.getItem("Notes"))
        if(arr2.length>0){
        //arr2.reduce((N,C)=>{notemake(N,C)})
        for(i=0;i<arr2.length;i += 2){
        notemake(arr2[i],arr2[i+1])}}
        }
        function showbtn(){
        btn.style.opacity="1";
        clearTimeout(timer)

        timer =setTimeout(()=>{
        btn.style.opacity="0"
        },2000)

        }
        let timer;
        window.addEventListener('touchstart', showbtn)


        

       

       

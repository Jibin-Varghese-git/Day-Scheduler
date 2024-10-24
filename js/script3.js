var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 20,
    title: "Push up branch"
}, {
    start: 420,
    duration: 30,
    title: "Push up branch"
}, {
    start: 430,
    duration: 20,
    title: "Push up branch"
}
];

//INPUTS
//sorting
for(let i=0;i<data.length;i++)
    {
       
        for(let j=i+1;j<data.length-1;j++)
        {
            if(data[i].start>data[j].start)
            {
                let temp=data[j];
                data[j]=data[i];
                data[i]=temp
                console.log(temp);
            }
        }
    }

    for(let i=0;i<data.length;i++)
        {
            console.log(data[i].start)
        }

//EOF sorting

let start;
let duration=0;
let overlapParent=[];
let overlapChild=[];
let num=[];
let div=document.createElement("div");
let flag=0;

for( let i=0;i<data.length-1;i++)
    {  
            let diff=data[i+1].start-data[i].start;
            if(data[i].duration>diff)
            {
                overlapParent.push(i);
                overlapChild.push(i+1);
            }
            else{
                num.push(i);
            }
    }

    for( let i=0;i<data.length;i++)
    {      
        let div=document.createElement("div");
        if(overlapChild.includes(i)||overlapParent.includes(i))
        {
          
            if(i%2==0)
                {
                  flag=1;
                }
                else{
                 flag=0;
                }
            if(flag==1 )
            {
                div.style.width="45%";
            }
            else
            {
                div.style.width="45%";
                div.style.left="52%";
            }       
        }
       
        duration=data[i].duration + "px";
        start=data[i].start + "px";

        div.style.height=duration ;
        div.style.top=start ;
        div.innerHTML=data[i].title + ' ' + data[i].start ;
        div.classList.add("time-child-div")
        document.getElementById("time-inner-div").appendChild(div);
    }
    
   
   

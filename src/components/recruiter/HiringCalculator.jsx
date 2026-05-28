import { useState, useEffect } from "react";
import "./HiringCalculator.css";

import ZepcruitLogo from "../../assets/Zepcruit_main_logo.svg";
import Lower from "../../assets/lower.svg";
import Upper from "../../assets/upper.svg";
import Arrow from "../../assets/arrow.svg";

export default function HiringCalculator({ onClose }) {

const [recruiters,setRecruiters]=useState(4);
const [hires,setHires]=useState(3);

const [salary,setSalary]=useState(50000);
const [ctc,setCtc]=useState(800000);

const [agencyFee,setAgencyFee]=useState(10);

const [consultant,setConsultant]=useState(true);

const [consultantPercentage,setConsultantPercentage]=useState(38.21);

const [jobBoardCost,setJobBoardCost]=useState(25000);

const [result,setResult]=useState({

costPerHire:0,
totalHiringCost:0,
zepcruitCost:"",
loss:""

});



useEffect(()=>{

calculateHiring();

},[
recruiters,
hires,
salary,
ctc,
agencyFee,
consultant,
consultantPercentage,
jobBoardCost
]);



function calculateHiring(){

/* Recruiter Cost */

const recruiterCost =

recruiters *
salary *
12;


/* Agency Cost */

let agencyCost = 0;

if(consultant){

agencyCost =

(
ctc *
(agencyFee/100)
)
*
hires
*
(
consultantPercentage/100
);

}


/* Total Hiring Cost */

const totalHiringCost =

recruiterCost
+
agencyCost
+
jobBoardCost;


/* Cost Per Hire */

const costPerHire =

Math.round(

totalHiringCost /

Math.max(
hires,
1
)

);


/* Zepcruit Range based on HIRES */

const zepcruitMin =

5000 *
hires;

const zepcruitMax =

15000 *
hires;


/* Use average of range for loss */

const averageZepcruitCost =

(
zepcruitMin
+
zepcruitMax
)
/
2;


const loss =

Math.round(

totalHiringCost
-
averageZepcruitCost

);


setResult({

costPerHire,

totalHiringCost:
Math.round(
totalHiringCost
),

zepcruitCost:
`₹${zepcruitMin.toLocaleString()} - ₹${zepcruitMax.toLocaleString()}`,

loss:
`₹${loss.toLocaleString()}`

});

}



return(

<div className="hiring-calculator">

<div className="calculatorOverlay">

<div className="calculatorContainer">

<button
className="closeBtn"
onClick={onClose}
>
×
</button>


<div className="logoContainer">

<img
src={ZepcruitLogo}
alt=""
className="logo"
/>

</div>


<h1>
Hiring Cost Calculator
</h1>

<p className="subtitle">
Discover how much traditional hiring is actually costing your company.
</p>


<div className="calculatorContent">

<div className="leftSection">


<div className="inputCard">

<div className="rowTop">

<span>
Number of recruiters in your team
</span>

<div className="counter">

<button
onClick={()=>
setRecruiters(
Math.max(
0,
recruiters-1
)
)
}
>
−
</button>


<input
type="number"
value={
recruiters===0
?
""
:
recruiters
}
onChange={(e)=>{

const value=
e.target.value;

setRecruiters(

value===""

?
0
:
Number(value)

);

}}
className="counterInput"
/>


<button
onClick={()=>
setRecruiters(
recruiters+1
)
}
>
+
</button>

</div>

</div>

</div>





<div className="inputCard">

<label>
Average recruiter salary per month
</label>

<input
type="number"
value={salary}
onChange={(e)=>
setSalary(
Number(
e.target.value
)
)
}
/>

</div>





<div className="inputCard">

<div className="rowTop">

<span>
Number of hires in past 12 months
</span>

<div className="counter">

<button
onClick={()=>
setHires(
Math.max(
0,
hires-1
)
)
}
>
−
</button>


<input
type="number"
value={
hires===0
?
""
:
hires
}
onChange={(e)=>{

const value=
e.target.value;

setHires(

value===""

?
0
:
Number(value)

);

}}
className="counterInput"
/>


<button
onClick={()=>
setHires(
hires+1
)
}
>
+
</button>

</div>

</div>

</div>





<div className="inputCard">

<label>
Average CTC per hire
</label>

<input
type="number"
value={ctc}
onChange={(e)=>
setCtc(
Number(
e.target.value
)
)
}
/>

</div>





<div className="inputCard">

<div className="switchRow">

<span>
Do you use recruitment consultants /
agencies?
</span>

<label className="switch">

<input
type="checkbox"
checked={consultant}
onChange={()=>
setConsultant(
!consultant
)
}
/>

<span className="slider"></span>

</label>

</div>



{consultant&&(

<>

<hr/>

<div className="agencyLabel">

<span>
Agency fee percentage
</span>

<span>
{agencyFee}%
</span>

</div>

<input
className="range"
type="range"
min="0"
max="100"
value={agencyFee}
onChange={(e)=>
setAgencyFee(
Number(
e.target.value
)
)
}
/>

</>

)}

</div>





<div className="inputCard">

<label>

Percentage of hiring through consultants /
agencies

</label>

<input
type="number"
value={consultantPercentage}
onChange={(e)=>
setConsultantPercentage(
Number(
e.target.value
)
)
}
/>

</div>





<div className="inputCard">

<label>
Job Board Subscription cost
</label>

<input
type="number"
value={jobBoardCost}
onChange={(e)=>
setJobBoardCost(
Number(
e.target.value
)
)
}
/>

</div>

</div>






<div className="rightSection">

<div className="topCards">


<div className="smallCard">

<span>
Cost Per Hire
</span>

<h2>
₹{result.costPerHire.toLocaleString()}
</h2>

</div>



<div className="smallCard">

<span>
Total Hiring Cost
</span>

<h2>
₹{result.totalHiringCost.toLocaleString()}
</h2>

</div>

</div>





<div className="zepCard">

<span>
Cost with Zepcruit
</span>

<h2>
{result.zepcruitCost}
</h2>

</div>





<div className="lossCard">

<div className="svgWrap upperCircle">
<img src={Upper} alt="" />
</div>

<div className="svgWrap lowerCircle">
<img src={Lower} alt="" />
</div>

<div className="svgWrap lossArrow">
<img src={Arrow} alt="" />
</div>

<div className="lossContent">

<p>
You are Losing per annum
</p>

<h1>
{result.loss}
</h1>

<span>
Save 60% by switching to Zepcruit
</span>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

);

}
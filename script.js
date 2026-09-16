const input=document.getElementById("videoInput");
const preview=document.getElementById("preview");
const workspace=document.getElementById("workspace");
const result=document.getElementById("result");
const fileInfo=document.getElementById("fileInfo");
const analyze=document.getElementById("analyzeBtn");
const progress=document.getElementById("progress");
const script=document.getElementById("script");

input.addEventListener("change",()=>{
  const file=input.files[0];
  if(!file)return;
  preview.src=URL.createObjectURL(file);
  fileInfo.textContent=`${file.name} · ${(file.size/1024/1024).toFixed(1)} MB`;
  workspace.classList.remove("hidden");
  result.classList.add("hidden");
  workspace.scrollIntoView({behavior:"smooth"});
});

analyze.addEventListener("click",()=>{
  analyze.disabled=true;
  progress.classList.remove("hidden");
  setTimeout(()=>{
    progress.classList.add("hidden");
    analyze.disabled=false;
    result.classList.remove("hidden");
    script.value=`ဒီဗီဒီယိုအတွက် AI Recap Script နမူနာ

အစပိုင်းမှာ ဇာတ်လမ်းရဲ့ အဓိကအကြောင်းအရာကို စတင်မိတ်ဆက်ပေးထားပါတယ်။ ထို့နောက် အရေးကြီးတဲ့ဖြစ်ရပ်တွေကို အစဉ်လိုက် ပြန်လည်ဖော်ပြပြီး နောက်ဆုံးမှာ စိတ်ဝင်စားစရာကောင်းတဲ့ အဆုံးသတ်ကို ချိတ်ဆက်ပေးထားပါတယ်။

မှတ်ချက် — ဒီ Prototype မှာ AI processing ကို demo အနေနဲ့သာ ပြထားပါတယ်။ တကယ့် AI Script / Subtitle / Voice ထုတ်ရန် Backend + AI API ချိတ်ဆက်ရပါမယ်။`;
    result.scrollIntoView({behavior:"smooth"});
  },1600);
});

document.getElementById("newBtn").addEventListener("click",()=>location.reload());
document.getElementById("exportBtn").addEventListener("click",()=>alert("Export system ကို Backend/FFmpeg ချိတ်ပြီးမှ တကယ် Video ထုတ်နိုင်ပါမယ်။"));
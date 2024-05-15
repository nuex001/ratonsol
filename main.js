const copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click",async (e)=>{
    try {
        const addr = e.target.getAttribute("data-addr");
        await navigator.clipboard.writeText(addr);
        console.log("copied Successfully");
        // console.log(e.target.getAttribute("data-addr")); 
    } catch (error) {
        console.log(error);
    }
})
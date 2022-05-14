axios.get("https://54.uz/rang.php").then(function (response) {
    const axiosData=response.data.status;
    const outText=document.querySelector(".outText");
    const body=document.body;
    console.log(axiosData)
    outText.innerHTML=`Background color is ${axiosData}`;
    outText.style.color="#fff";
        switch (axiosData) {
            case "yaxshil":
                body.style.backgroundColor="green";
                return
            case "qizil":
                body.style.backgroundColor="red";
                return;
            case "sariq":
                body.style.backgroundColor="yellow";
                return;
            case "qora":
                body.style.backgroundColor="black";
                return;
            case "ko'k":
                body.style.backgroundColor="blue";
                return;
            default:
                outText.style.color="black";
                return;
        }
})
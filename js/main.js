

request = () => {
    let userInput = document.getElementById('userText').value;
    document.getElementById('userText').value = '';
    $.post('/', {
        userInput
    },(response)=>{
        $("#botAnswer").html(response);
    })
  
}

// var userTxt = $("#userText").val()
// $("#userSendBtn").click(function () {
//     $.post("/",
//         {
//             userTxt
//         },
//         function (data, status) {
//             console.log(data);
//             $("#userText").empty();
//         });
// });
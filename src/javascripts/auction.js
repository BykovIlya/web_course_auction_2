$(document).ready(()=> {
    $('#nickname').click(()=> {
        postNickname()
    })
});



    function postNickname() {
    $.ajax({
        url: '/',
        type: 'POST',
        data:
            {
                nickname: $('#nickname').val()
            },
        success: function (data, status) {
            $(location).attr('href', `http://localhost:4444/user?` +
                `name=${data.nickname}&money=${data.money}`);
        },
        error: function (data, status) {
            $('#alertlabel').text(`${status}: ${data.responseJSON.message}`).show();

        }
    });
}
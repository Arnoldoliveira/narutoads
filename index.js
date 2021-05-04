$(document).ready(
    function () {
        $.ajax({
            type: "GET",
            url:"http://192.168.10.85.9000/users",
            success:function(data){
                $.each(data, function(i, user){
                    $('#narutouzumaki').append(
                    "<tr>,<td>"+user.name+"</td></tr>"
            )
            } )   
        }
    })
    })

$(function() {
     var count;
        count=0;
    var names = [];
    $('body').on('change', '.picupload', function(event) {
        var getAttr = $(this).attr('click-type');

        // alert(getAttr);
        var files = event.target.files;
        var output = document.getElementById("media-list");
        var z = 0
        if (getAttr == 'type1') {

            $('#media-list').html('');
            $('#media-list').html('<li class="myupload"><span><i class="fa fa-plus" aria-hidden="true"></i><input type="file" name="img0[]" click-type="type1" id="picupload" class="picupload" multiple/></span></li>');
            $('#hint_brand').modal('show');

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                names.push($(this).get(0).files[i].name);
                if (file.type.match('image')) {
                    var picReader = new FileReader();
                    picReader.fileName = file.name
                    picReader.addEventListener("load", function(event) {
                        var picFile = event.target;

                        var div = document.createElement("li");


                        div.innerHTML = "<img src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/><div  class='post-thumb1'><div class='inner-post-thumb'><a href='javascript:void(0);' data-id='" + event.target.fileName + "' class='remove-pic'><i class='fa fa-times' aria-hidden='true'></i></a><div></div>";

                        $("#media-list").prepend(div);


                    });
                } else {

                    var picReader = new FileReader();
                    picReader.fileName = file.name
                    picReader.addEventListener("load", function(event) {

                        var picFile = event.target;

                        var div = document.createElement("li");

                        div.innerHTML = "<video src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'></video><div id='" + z + "'  class='post-thumb'><div  class='inner-post-thumb'><a data-id='" + event.target.fileName + "' href='javascript:void(0);' class='remove-pic'><i class='fa fa-times' aria-hidden='true'></i></a><div></div>";
                        $("#media-list").prepend(div);

                    });

                }
                picReader.readAsDataURL(file);
            }
            console.log(names);
        } else if (getAttr == 'type2') {
       
            file_value = $(this).val();
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                // console.log(file);
                names.push($(this).get(0).files[i].name);
                if (file.type.match('image')) {

                    var picReader = new FileReader();
                    picReader.fileName = file.name
                    picReader.addEventListener("load", function(event) {

                        var picFile = event.target;

                        var div = document.createElement("li");
                        
                        // var nameArray = names.toString().split(",");
                        // alert(names);
                        div.innerHTML = "<img src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/><div  class='post-thumb'><div class='inner-post-thumb'><a href='javascript:void(0);' onclick='remove_list("+count+")' data-id='" + event.target.fileName + "' class='remove-pic'><i class='fa fa-times' aria-hidden='true'></i></a><div></div>";

                        $("#media-list").prepend(div);
                        
                        //alert(count);

                    });
                } else {
                    var picReader = new FileReader();
                    picReader.fileName = file.name
                    picReader.addEventListener("load", function(event) {

                        var picFile = event.target;

                        var div = document.createElement("li");

                        div.innerHTML = "<video src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'></video><div class='post-thumb'><div  class='inner-post-thumb'><a href='javascript:void(0);' data-id='" + event.target.fileName + "' class='remove-pic'><i class='fa fa-times' aria-hidden='true'></i></a><div></div>";

                        $("#media-list").prepend(div);

                    });
                }
                picReader.readAsDataURL(file);

            }
            $('#media-list li:last').hide();
            if(count==0){
            div_image = "<li  class='myupload'><span><i class='fa fa-plus' aria-hidden='true'></i><input type='file'  name='img0[]' click-type='type2' id='picupload' class='picupload' multiple/></li>";
            $("#media-list").append(div_image);
            // return array of file name
            console.log(names);
             }else{

                div_image = "<li id='remove"+count+"' class='myupload'><span><i class='fa fa-plus' aria-hidden='true'></i><input type='file'  name='img0[]' click-type='type2' id='picupload' class='picupload' multiple/></li>";
            $("#media-list").append(div_image);
            // return array of file name
            console.log(names);
             }
             // alert(names);
             $('#presentImage').val(names);
            count++;
    
        }

    });

    $('body').on('click', '.remove-pic', function() {
        $(this).parent().parent().parent().remove();
        var removeItem = $(this).attr('data-id');
        var yet = names.indexOf(removeItem);

        if (yet != -1) {
            names.splice(yet, 1);
        }
        // return array of file name
        console.log(names);
        // alert(names);
        $('#presentImage').val(names);
    });
    $('#hint_brand').on('hidden.bs.modal', function(e) {
        names = [];
        z = 0;
    });
});

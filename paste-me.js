

(function (remove_previous_execution, offset) {
    var
        iterator = 0,
        body = document.getElementsByTagName('body')[0],
        imgs_src = [],
        imgs_obj = [],
		ww = window.innerWidth,
		wh = window.innerHeight;

    if (remove_previous_execution && document.getElementById('mycont')) {
        body.removeChild(document.getElementById('mycont'));
    }

    var i = offset?1:0;
    while ( /* i < number of comic_image_pages in web */ ) {

        /* add comic_image_page(i) to imgs_src */

        i++;
    }

    console.log(imgs_src);

    var i = 0;
    while (i < imgs_src.length) {
        if (img_src.match(/\.(?:jpg|png|gif)$/gm)) {
            var obj = document.createElement("img");
            obj.id = "img_"+i;
            obj.src = imgs_src[i];
            obj.style.height = 100+"vh";
            imgs_obj.push(obj);
        }
        i++;
    }

    // console.log(imgs_obj);

    var mycont = document.createElement("div");

    mycont.id = "mycont";
    mycont.style.backgroundColor = "rgba(0,0,0,0.8)";
    mycont.style.position = "absolute";
    mycont.style.top = 0+"px";
	mycont.style.left = 0+"px";
	mycont.style.right = 0+"px";
	mycont.style.bottom = 0+"px";

    body.appendChild(mycont);

    mycont.appendChild(imgs_obj[1]);
    mycont.appendChild(imgs_obj[0]);

    document.onkeydown = function(e) {

        // ARROW RIGHT KEY
        if(e.keyCode == 37) {
            iterator+=2;
            mycont.innerHTML = "";
            if (iterator < imgs_obj.length) {
                if (imgs_obj[iterator+1]) {
                    mycont.appendChild(imgs_obj[iterator+1]);
                    mycont.appendChild(imgs_obj[iterator]);
                } else {
                    mycont.appendChild(imgs_obj[iterator]);
                }
            } else {
                iterator = 0;
                mycont.appendChild(imgs_obj[iterator+1]);
                mycont.appendChild(imgs_obj[iterator]);
            }

        }

        // ARROW LEFT KEY
        if(e.keyCode == 39) {
            iterator-=2;
            mycont.innerHTML = "";
            if (iterator >= 0) {
                    mycont.appendChild(imgs_obj[iterator+1]);
                    mycont.appendChild(imgs_obj[iterator]);

            } else {
                if (imgs_obj.length % 2 == 0) {
                    iterator = imgs_obj.length-2;
                    mycont.appendChild(imgs_obj[iterator+1]);
                    mycont.appendChild(imgs_obj[iterator]);
                } else {
                    iterator = imgs_obj.length-1;
                    mycont.appendChild(imgs_obj[iterator]);
                }
            }

        }

        // ESC KEY
        if(e.keyCode == 27) {
            mycont.parentNode.removeChild(mycont);
        }

    }

})(0, 0);

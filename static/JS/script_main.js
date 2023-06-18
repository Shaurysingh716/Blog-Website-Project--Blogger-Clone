let counter = 0;
function takevalue() {
    let user_input_heading = document.getElementById('user-blog-input-heading').value;
    document.getElementById('user-blog-input-heading').value = '';
    let blog_post_division = document.getElementsByClassName('body-index-blog-division')[0];
    let blogpost_general_info = document.getElementsByClassName('blogpost-general-info')[0];
    if (user_input_heading.length >= 1) {
        counter++


        // let infodiv = document.createElement('div');
        // let geninfo = document.createElement('p');

        
        let newdiv = document.createElement('div');
        let textdiv = document.createElement('div');
        let newHeading = document.createElement('p');
        let status = document.createElement('p');
        let mainImg = document.createElement('img');
        const d = new Date();
        let _date = d.getDate();
        // let _month = d.getMonth();
        let _year = d.getFullYear();
        let full_date = `${_date} June ${_year}`;
        let blogpost_status = `Draft • ${full_date}`;
        // let accImg = document.createElement('img')
        mainImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB2CAMAAADFu/wdAAAAZlBMVEXwajX////wZCrwZi7wbDjwaDHvYCH1po71qZLxcD/wYyf2sJvvXx798OzuUwDxc0TzjWz75N34v6/vWxTvWAv3uafyf1f/+/nxelD73NT6183zk3Txdkn60MX+9fLzh2L0nIH5ybu6kI7XAAAE6klEQVRoge2ba3eqOhCGYzBRQyg3uSOX//8ndwB1o50hCVpcPfu8H7pai3mcXGcmI9nNFEaHruuqqgqCtm3TUXme13Xt+/7pqv1NZND+WdND6nm/rtV7VQttGwRVdbxkcxT5+2t0koJSZxD7JmKt+btVk5TLqgC4PeMrGrcS5YH3xPUq+dPUkSz6B27oiw2oSkweZ9xw72yDVYqPd67nb4dV4OTGDTbq5KtkMXEjuSmWMD8buJmzxUyeSyYDN+EbYwlzMsXd3FxCuLsjxcajO4g5O5JsO5knyYZ09ANcHpJgyz3jzi1Ju/20UtwLST/C7T/GzT/BFT2pP2JvRHzTZ5lDqeB3CS6UN6bcsTWfWxhyGY1FWnUHN0miQUmSuK57HLzPgMT2K1Ek5GRAjf2u9B7c0JmaSyVs9zwTLpN53yDMm9/dUbtdz4Ar/H4ZOpFbq+NFcfeLDzDeYf37pMTGEdZxGTUxdlIhzMEaLqOhMVa5pcR4Yi9zGff0tJmakyl4mXu2sXYE7w27epF7vlhi1bQ2XMjCxbmis8aqqDJ+lcv2hgvoUZ2RxRTn8n4NdtcYhei4vSxfhTWMenB75TpzlaiBwai97KQ5CnC5BiOMcumayTzJ+3qBG5erubuTvqMxLjvZ7ZAPOujPYpSbIm1mjXdT0yALPNIPsOKCcgKowbAds3VkytWpny04GqV+JVlxC0mfkniOjKCPp+fSI/J6BbTXfj/lGIe4+j3ahutB05QDR6X3AhdYvh4BwLz4/uDu/FYu1M9EQnM617odGFccgOaKr2eD2TkBnlMDrFtJVtxdkZ+/5orrHnpMHYYdVf8+xxLjo9wj3OCgbBD+7/tjXlj0R8S3XcO1UgnvmT/ORfwelOu+iwun5X6eG4ID/PNcD3TlMS5/Hxf0Av7DXP9XcMF993/uL+SCfuwbudg6+re4h1/BvbiH8fq/Ch6lXuncCHRCLLnQfpXVMaXXAoBvolTGUNoJOY9suAfNRSI7ARbbcaHztwFX4lxnIEwDvX2cC/hXnja8hHIiYHSDcwH/WW/vFxC0hGDsgHHBeDBZjreYaIE3wZlDjAvH3QfOpeQzyZvUb5SkUG4CDoYxLoM+umrk0vfjZcqg4V6lH3QZVcAZkQLsJJRbr05fPam3sheMp1epAgMVlAsmLlYog68BUa4DD7C1kNwOyiXshcTZTHA3L3Df48l6SMZhwd79O2Y0ln3HuUiqwU5oBm2BO5UNvaYUS+xg/tXY00Tf8LJcNGGouPh9KAU3aXNd8AT4IpfI9Un33ZDuwlte5pL4hblVLmULNVwioXPYSMvXOTouEemqAyLrlnPQWi6hLLG/r7vUGl9McXV1FENZgR25CLRX7gbcoYwid9EqiucODpPUoJ5DcU3qZBiP0+6YRKNTU5ZloRTeNfxVlOWlj45VHRtV9wrXtD6HOWL04+JJ5wdNr0kpTItmFPcz9UjuZ+qvRPLPcT9S1yeiD9Ux9h+q2yyJybX42yUbYnBr+naxekeM6g/eLJ4orrt53TURnuI2mw/wUPmjnNWtDWaON3KzTb++cI1xB+c83HRqTd7xGBSUFiV5L2OD7M7dFWyrXUtWk8d0DYLCfJPtw5G3sPoefLno5fT7qLy+e+N/gz7vwDld84UuIyn/TKazQsGHYLM8BrlBffAKndIuesiY/AHqvlH4Tu0+oAAAAABJRU5ErkJggg==';
        //accImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFhw1IozdxlNNNbqOdRyOZYWK1440AJAiQw&usqp=CAU';


        // infodiv.className = 'general-info-div';
        // geninfo.className = 'general-info-text';


        newdiv.className = 'blogpost-heading-index'; // class name for the newdiv that will hold all the info about the newly added blogs
        mainImg.className = 'data-image-main'; // class name for the main image on the left of the blog heading...can be replaced by the user using node.js
        textdiv.className = 'blogpost-heading-status-division' // class for the div that will withhold the heading and the status of publication
        newHeading.className = 'blogpost-heading-element'; // Heading variable class name for the heading of the blogpost...null input is not allowed
        status.className = 'Draft-or-Published'
        //accImg.className = 'data-image-account'; // class name for the account image of the user...default is set at profile...but default can be changed  
        newHeading.textContent = user_input_heading;
        status.textContent = blogpost_status;


        // geninfo.textContent = `All (${counter})`;
        // blogpost_general_info.appendChild(infodiv);
        // infodiv.appendChild(geninfo);


        blog_post_division.appendChild(newdiv);
        newdiv.appendChild(mainImg);
        newdiv.appendChild(textdiv);
        textdiv.appendChild(newHeading);
        if (blogpost_status == `Draft • ${full_date}`) {
            textdiv.appendChild(status)
        } else {
            
        }
        //newdiv.appendChild(accImg);
    } else {
        alert("Please Enter A Valid Input");
    }
}
// newdiv.style.backgroundColor = 'transparent';
// newdiv.style.width = '70%';
// newdiv.style.margin = '20px';
// newdiv.style.marginRight = '40px';
// newdiv.style.marginLeft = '40px';
// newdiv.style.borderRadius = '5px';
// newdiv.style.padding = '20px';
// newdiv.style.paddingBottom = '40px';
// newHeading.style.marginLeft = '60px';
// newdiv.style.border = '2px solid black';
// newdiv.style.borderColor = 'rgba(0, 0, 0, 0.145)';
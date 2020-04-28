// var body = document.getElementsByTagName("BODY")[0]
// var virus = body.createElement("img");
// virus.src = "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"


// setTimeout(function() {
//     "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"
//     ;},
//     2000);

//Attempt 1
// function bug() {
//     var img = "./virus.jpg",
//         width = img.get(0).width,
//         screenWidth = $(window).width(),
//         duration = 5000;

//     function animatePlane() {
//         img.css("left", -width).animate({
//             "left": screenWidth,\
//         }, duration, animatePlane);
//     }

//     animatePlane();
// }

//Attempt 2
// $(document).ready(function() {
//     var leftVal = 0;
//         if($(window).width()<1400){
//             leftVal = ((1400 - $(window).width())/2)*-1;
//         }
    
//         $('.slideshowWrap').cycle({
//             fx:      'custom',
//             cssBefore: { 
//                 left: leftVal, 
//                 top:  0,  
//                 opacity: 1,
//         display: 'block'
//             },
//             animOut: { 
//                 opacity: 0 
//             },
//             animIn: { 
//                 left: leftVal, 
//                 top: 0, 
//             },
//             cssAfter: { 
//                 zIndex: 0
//             },
//         cssFirst: {
//         left: leftVal
//         },
//             delay: -3000
//         });

//Attempt 3
// var body = document.getElementsByTagName("BODY")[0]
// var virus = body.createElement("img");
// document.body.innerHTML += '<img src="https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg" height="42" width="42">'; 
// function startMoving(img) {
//     var img$ = $(img);
//     var imgWidth = img$.width();
//     var screenWidth = $(window).width();
//     var amount = screenWidth - (parseInt(img$.css("left"), 10) || 0);
//     // if already past right edge, reset to 
//     // just left of left edge
//     if (amount <=0 ) {
//         img$.css("left", -imgWidth);
//         amount = screenWidth + imgWidth;
//     }
//     var moveRate = 300;   // pixels per second to move
//     var time = amount * 1000 / moveRate;
//     img$.stop(true)
//         .animate({left: "+=" + amount}, time, "linear", function() {
//             // when animation finishes, start over
//             startMoving(this);
//         })
// }

// $(document).ready(function() {
//     // readjust if window changes size
//     $(window).resize(function() {
//         $(".mover").each(function() {
//             startMoving(this);
//         });
//     });
// });'

// var fakeWarnings =[

// ]
// $(document).ready(function(){

    

//     function createImage(){
//         var link = document.createElement("virus");
//         link.href = window.location.href;


//         var Dom_img = document.createElement("img");
//         Dom_img.src = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/honeybee.png";
        
//         Dom_img.className = "bug";
        
//         // Dom_img.setAttribute("class", "bug");
        
//         link.appendChild(Dom_img);
//         document.body.appendChild(link);
//     }

    
//     $("p").each( function() {
//         var words = $(this).text().split(' ');
//         createImage(); 
//             var output = '';						
//             for (i=0; i<words.length; i++) {
//                 output += words[i];					
//                 if (Math.random() < 0.01) {	
                
//                     output += '<img src = "' + 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/honeybee.png' + ' ">' + '</img>';	
//                 }
//                 output += ' ';	
//                 }
//             $(this).html(output);
//     })
//     $('img').css({'height': '1.5%','width': '1.5%'});
   
//     // document.addEventListener('mouseover', function(){
//     //     document.getElementById("bug").innerHTML = "hello Worlds"
//     // })

//     var index = Math.floor((Math.random()* fakeWarnings.length));
//     var chosen_text = fakeWarnings[index];

//     const bug = document.getElementById("bug")
    
//     //create tooltip element
//     const ttbox = document.createElement("div");

//     //set style
//     ttbox.id = "bugtooltip";
//     ttbox.style.visibility = "hidden" //make it hidden till mouse over
//     ttbox.style.position = "fixed";
//     ttbox.style.top = "1ex";
//     ttbox.style.left = "1ex";
//     ttbox.style.padding = "0.5em";
//     ttbox.style.width = "30em";
//     ttbox.style.borderRadius = "1em";
//     ttbox.style.border = "solid thin gray";
//     ttbox.style.backgroundColor = "lightgrey";

//     //insert into DOM
//     document.body.appendChild(ttbox);

//     const ttTurnOn = ((evt) => {
//         //get the postion of the hover element
//         const boundBox = evt.target.getBoundingClientRect();
//         const coordX = boundBox.left;
//         const coordY = boundBox.top;

//         //adjust bubble position
//         ttbox.style.left = (coordX +40).toString() + "px";
//         ttbox.style.top = (coordY + 40).toString() + "px";

//         //add bubble content. can include image or link
//         ttbox.innerHTML(chosen_text);

//         //make bubble VISABLE
//         ttbox.style.visibility = "visible";
    
//     });

//     const ttTurnOff = (() => { ttbox.style.visibility = "hidden";});

//     bug.addEventListener("mouseover", ttTurnOn, false);
//     bug.addEventListener("mouseout",ttTurnOff, false);
//     document.getElementById("bugtooltip").addEventListener("click", ttTurnOff, false);


// })

//Attempt 3
    // var overlay = document.getElementById("bug");
    // overlay.style.position = 'absolute';
    // overlay.style.zIndex=  99999999;
    // link.appendChild(Dom_img);

// function interuptText() {
// 			var words = text().split(' ');	
// 			var output = '';						
// 			for (i=0; i<words.length; i++) {
// 				output += words[i];					
// 				if (Math.random() < 0.01) {		
// 					output += '<img src = "' + urls + '">  '+ quotes +' </img>';	
// 				}
// 				output += ' ';	
// 		}
// 			$(this).html(output);


//     }




// var style = document.createElement('style');
// document.head.appendChild(style);
// style.sheet.insertRule('#target {color: darkseagreen}');

//Atempt 5
//sources: https://www.digitalnest.in/blog/15-astonishing-facts-about-data-science-analytics-that-everyone-should-know/
//https://www.pewresearch.org/fact-tank/2019/02/13/7-things-weve-learned-about-computer-algorithms/
//https://www.fast.ai/2019/01/29/five-scary-things/

var fakeWarnings = [
    '10% increase in data accessibility could mean $65 million additional net income for a Fortune 1000 company.accessibility.',
    'US leads data science market projected to need 190,000 data scientist in 2020.',
    'For one single search quarey Google uses around 1,000 computers.',
    'The Data Science analytics sector of India is expected to grow eightfold reaching $16 billion by 2025.',
    'An estimated 1trillion photwers wer taken and billions were shared online.',
    'Most photos will become shareable data online.',
    'Google has 1.2 trillion searches per year.',
    '60,000 search quaries happen per second.',
    'There are nearly as many pieces of data as there are stars in the universe.',
    'Algorithmically based content platforms play a huge role in what infomation most people are exposed to.',
    'Many Facebook users do not know they are classified based on their interest.',
    'Algorithms are often implemented without an ways to address mistakes.',
    'AI makes it easier to not feel responsible.',
    'AI magnifies and encosed biases.',
    'There is no accountablility.'
];

// create div with bee image and tooltip
function createBug(whichWarning) {
    var chosen_text = fakeWarnings[whichWarning];

    var html = '<div class="tooltipContainer">';
    html +=    '  <img src="https://static.wixstatic.com/media/c5f021_d2c276344c3b4c2ca3150bc9ed78eb2e~mv2.png/v1/fill/w_986,h_986,al_c,q_90,usm_0.66_1.00_0.01/c5f021_d2c276344c3b4c2ca3150bc9ed78eb2e~mv2.webp">';
    html +=    '  <span class="tooltipText">' + chosen_text + '</span>';
    html +=    '</div>';
    return html;
}

// once page is loaded
$(document).ready(function() {
    var whichWarning = 0;
    
    

    $('p').each( function() {
        var words = $(this).text().split(' ');
        var output = '';
        for (var i=0; i<words.length; i++) {
            output += words[i];

            // randomly add a bug
            if (Math.random() < 0.09) {
                var bug = createBug(whichWarning);
                
                // update which warning to be shown,
                // wrap to zero if hit the end
                whichWarning += 1;
                if (whichWarning == fakeWarnings.length) {
                    whichWarning = 0;
                }
                output += bug;
            }
            output += ' ';
        }
        $(this).html(output);
    });

    //resize image
    $('img').css({'height': '2%','width': '2%'});
});
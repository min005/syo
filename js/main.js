$(function () {
	$(".mydad_sub_img li").eq(0).addClass("select");

	$(".mydad_sub_img img").click(function () {
		var img = $(this).attr("src");

		$(".mydad_sub_img li").removeClass("select");
		$(this).parent().addClass("select");

		$(".mydad_main img").fadeOut(500, function () {
			$(this).attr("src", img),
				$(this).fadeIn(500)
		});
	});
});

$(function () {
	$(".item").click(function () {
		
		
		var img = $(this).children("img").attr("src");
		var text = $(this).children("p").text();
		
		$(".gallery_zoom").fadeOut(500, function () {
			$(this).children("img").attr("src", img),
			$(this).children("p").text(text),
			$(this).fadeIn(300)
		});
		
		$(".gallery_zoom").addClass("display");
	});

	$(".item").mouseover(function(){
		$(".tab_content").css('z-index','30');
	});
});

// $(function () {
// 	$(".item").eq(0).addClass("select");

// 	$(".item").click(function () {
// 		var img = $(this).children("img").attr("src");

// 		$(".item").removeClass("select");
// 		// $(this).parent().addClass("select");
// 		$(this).addClass("select");
// 		console.log(img);

// 		$(".gallery_zoom img").fadeOut(500, function () {
// 			$(this).attr("src", img),
// 				$(this).fadeIn(500)
// 		});
// 	});
// });




// 横スクロール
// document.addEventListener("DOMContentLoaded", (event) => {
// 	gsap.registerPlugin(ScrollTrigger)
// 	// gsap code here!
// 	const container = document.querySelector('.wrapper');
// 	const slides = document.querySelectorAll('.slides-wrapper');
// 	const containerWidth = container.offsetWidth;
// 	gsap.to(slides, { // slidesに対して以下のアニメーションを設定
// 		xPercent: -110 * (slides.length - 1), // 横に動く方向と距離（この例は右側にスライドの合計幅より少し横スクロール）
// 		ease: "none", //アニメーションの種類をnoneにする
// 		scrollTrigger: {
// 			trigger: container, //containerに到達したら発火
// 			pin: true, // ピン留をtrueにすることでcontainerの縦スクロールが止まる
// 			scrub: 1, //スクロール当たりのアニメーションが動く時間
// 			end: () >; "+=" + containerWidth, // 横スクロールが終わる地点
// 			anticipatePin: 1, // ピン留のタイミング
// 			invalidateOnRefresh: true, // リサイズ時の調整でtrueにしておく
// 		}
// 	})
//    });

// const slides = document.querySelectorAll('.content');

// const message = document.querySelector('.message_box');

// gsap.to('.wrapper', {
// 	xPercent: -800,
// 	scrollTrigger: {
// 		trigger: '.top',
// 		pin: true,
// 		scrub: 1,
// 		markers: true,
// 		pinSpacing: false,
// 		start: 'top top',
// 		endTrigger: message,
// 		anticipatePin: 1,
// 		invalidateOnRefresh: true,
// 	}
// });
$(function()
{
	$(".mydad_sub_img li").eq(0).addClass("select");

	$(".mydad_sub_img img").click(function()
	{
		var img = $(this).attr("src");

		$(".mydad_sub_img li").removeClass("select");
		$(this).parent().addClass("select");

		$(".mydad_main img").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
});
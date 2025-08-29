<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>@yield('title')</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0">
<meta name="description" content="@yield('description')">
<meta name="keywords" content="@yield('keyword')">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="stylesheet" href="/css/style.css?A">
<link rel="stylesheet" href="/css/spinners.css?A" >
<script src="/js/openclose.js"></script>
<script src="/js/ddmenu_min.js" defer></script>
<script src="https://unpkg.com/vue@3.0.5" defer></script>
<script src="https://unpkg.com/vue-router@4.0.11" defer></script>
<script src="js/purchase.js" defer></script>

<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<style>
.option1,.option2,.option3,.new {position:absolute;right:0px;top:0px;padding-top:0px;}
</style>
<![endif]-->
</head>

<body id="main-body">

<header>
<div class="inner">
<h1 id="logo"><a href="/">
    <img src="/images/kagaya_logo.png" alt="SAMPLE JOB">
</a></h1>
<div id="contact">
    <p class="tel"><a href="tel:0254-52-3222">TEL:0254-52-3222</a></p>
</div>
</div>
</header>

@yield('content')


<p id="pagetop" class="inner"><a href="#">↑</a></p>

    @component('components.footer')
    @endcomponent

<!--スマホ用更新情報　800px以下-->
<script>
if (OCwindowWidth() <= 800) {
	open_close("newinfo_hdr", "newinfo");
}
</script>

<!--メニューの３本バー-->
<div id="menubar_hdr" class="close"><span></span><span></span><span></span></div>
<!--メニューの開閉処理条件設定　800px以下-->
<script>
if (OCwindowWidth() <= 800) {
	open_close("menubar_hdr", "menubar-s");
}
</script>
</body>
</html>

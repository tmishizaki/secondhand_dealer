@extends('layout.home')

@section('title', '古物商 加賀　トップページ')
@section('description', '古物商 加賀')
@section('keyword', '古物商, 加賀, トップページ, 買取, 古物')

@section('content')

<x-navi path="home"></x-navi>

<!--メインイメージ-->
<aside id="mainimg">
<img src="/images/mainimg.jpg" alt="" class="pc">
<img src="/images/mainimg_s.jpg" alt="" class="sh">
<p id="btn_job1"><a href="/purchase"><img src="/images/satei_btn1.gif" alt="仕事を探す"></a></p>
{{-- <p id="btn_job2"><a href="info.html"><img src="images/btn_job4.png" alt="求人を掲載する"></a></p> --}}
</aside>

<div class="contents">
<div class="inner">

<div class="main">

<x-whats-new></x-whats-new>

<section>

<h2>美術・骨董　加賀について<span>Read Me</span></h2>

<p>
    当店は買い出し屋です。<br>
    蔵や土蔵、家で眠っている商品を買わせていただいています。<br>
    そのため、骨董品に関しては「うぶもの」（せり、業者等の世に出ていないもの）を中心に取り扱っております。<br>
    <img src="/images/imgrc0083533939.jpg" >
    <br>
    何十年、何百年眠いっている宝物を綺麗に飾ってみると、品物が光って「どうだ！」と言ってるようです。
    これだから蔵出し冥利につきます。

</p>

<h2>査定・買取の流れ</h2>
<div class="card-box-l">
    <div class="card-item">
        <h3>ステップ1<br>査定依頼</h3>
        <img src="/images/kantei_otakara.png" alt="刀装具">
        <p>ホームページから査定したい品目の情報・写真をお送りください。</p>
    </div>
    <div class="card-item">
        <h3>ステップ2<br>概算見積もり</h3>
        <img src="/images/zei_etax.png" alt="刀装具">
        <p>
            写真などから概算見積もりをメールにてお送りいたします。よろしければ、品目をご郵送いただきます。

        </p>
    </div>
    <div class="card-item">
        <h3>ステップ3<br>正式査定</h3>
        <img src="/images/yubin_ukewatashi.png" alt="刀装具">
        <p>ご郵送いただいた品目を査定し、正式な見積もりをさせていただきます。</p>
    </div>
</div>
<br><br>
<div class="section-c">
買取査定はこちらから！<br>
<a href="/purchase"><img src="/images/satei_btn1.gif" alt="査定はこちら"></a>
</div>


</section>

</div>
<!--/main-->

<x-sub-aside></x-sub-aside>

</div>
<!--/inner-->
</div>
<!--/contents-->


@endsection

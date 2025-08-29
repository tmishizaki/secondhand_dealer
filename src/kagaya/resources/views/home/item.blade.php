@extends('layout.home')

@section('title', '古物商 加賀 買取品目')
@section('description', '古物商 加賀 買取品目一覧')
@section('keyword', '古物商, 加賀, 買取品目一覧, 買取, 古物')

@section('content')

<x-navi path="item"></x-navi>

<div class="contents">
<div class="inner">

<div class="main">

<article class="list">

<h2>買取品目</h2>

<div class="card-box">
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/katana_image.jpg" alt="刀装具">
            <p>刀装具</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/bungu_image.jpg" alt="文具">
            <p>文具</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/miritary_image.jpg" alt="ミリタリー">
            <p>ミリタリー</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/garas_image.jpg" alt="ガラス">
            <p>ガラス</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/kaguimage.jpg" alt="家具">
            <p>家具</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/komingu_image.jpg" alt="古民具">
            <p>古民具</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/gangu_image.jpg" alt="玩具">
            <p>玩具</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/furununo_image.jpg" alt="古布">
            <p>古布</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/kimono_image.jpg" alt="着物">
            <p>着物</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/chugoku_image.jpg" alt="中国美術">
            <p>中国美術</p>
        </a><!-- /card-content -->
    </div>
    <div class="card-item">
        <a class="card-link" href="#">
            <img src="/images/kottouhin_image.jpg" alt="骨董品">
            <p>その他骨董品</p>
        </a><!-- /card-content -->
    </div>
</div>
</article>


</div>
<!--/main-->

<x-sub-aside></x-sub-aside>

</div>
<!--/inner-->
</div>
<!--/contents-->

@endsection

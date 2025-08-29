@extends('layout.home')


@section('title', '古物商 加賀 店舗案内')
@section('description', '古物商 加賀 店舗案内')
@section('keyword', '古物商, 加賀, 店舗案内, 買取, 古物, 店舗, アクセス, 場所')

@section('content')

<x-navi path="company"></x-navi>

<div class="contents">
<div class="inner">

<div class="main">

<section>

<h2>会社概要<span>Company</span></h2>

<table class="ta1">
<tr>
<th colspan="2" class="tamidashi">見出しが必要ならここを使います</th>
</tr>
<tr>
    <th>郵便番号</th>
        <td>
            〒958-0872
        </td>
    </tr>
<tr>
<th>所在地</th>
    <td>
        新潟県村上市片町5-20<br>
        美術骨董　加賀
    </td>
</tr>
<tr>
    <th>電話番号</th>
        <td>
            0254-52-3222
        </td>
    </tr>
    <tr>
<tr>
<th>地図</th>
<td>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.5244392554034!2d139.48844417537305!3d38.22939485147274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8b6e4ae12ac829%3A0x68ba1ba27f22f3c6!2z44CSOTU4LTA4NzIg5paw5r2f55yM5p2R5LiK5biC54mH55S677yV4oiS77yS77yQ!5e0!3m2!1sja!2sjp!4v1623917645614!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</td>
</tr>
</table>
<div id="kagaya-tenpo">
    <img src="/images/0002.jpg" alt="加賀店舗入り口" srcset="">
</div>


</div>
<!--/main-->

<x-sub-aside></x-sub-aside>

</div>
<!--/inner-->
</div>
<!--/contents-->

@endsection

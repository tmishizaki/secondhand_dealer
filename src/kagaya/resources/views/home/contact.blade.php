@extends('layout.home')


@section('title', '古物商 加賀 お問い合わせ')
@section('description', '古物商 加賀 お問い合わせ')
@section('keyword', '古物商, 加賀, お問い合わせ, 買取, 古物, 店舗, アクセス, 場所')

@section('content')

<x-navi path="contact"></x-navi>

<div class="contents">
<div class="inner">

<div class="main">

<section id="input-section">
    <h2>お問い合わせ</h2>
    <form action="" id="contact-form">

        <table class="ta1 mb1em">
            <tr>
            <th colspan="2" class="tamidashi">※マークは入力必須です</th>
            </tr>
            <tr>
            <th>お名前※</th>
            <td><input type="text" size="30" class="ws" id="name" required></td>
            </tr>
            <tr>
            <th>メールアドレス※</th>
            <td><input type="text" size="30" class="ws" id="email" required></td>
            </tr>
            <tr>
            <th>お問い合わせ件名※</th>
            <td>
            <input type="text" value="" class="wl" id="title" required>
            </td>
            </tr>
            <tr>
            <th>お問い合わせ詳細※</th>
            <td><textarea id="contactComment" cols="30" rows="10" class="wl" required></textarea></td>
            </tr>
        </table>
        <p class="c">
        <input type="submit" value="内容を確認する">
        </p>
    </form>
</section>

<section id="confirm-section" style="display: none">
    <h2>お問い合わせ内容確認</h2>

        <table class="ta1 mb1em">
            <tr>
            <th>お名前</th>
            <td>
                <span id="name-confirm"></span>
            </td>
            </tr>
            <tr>
            <th>メールアドレス</th>
            <td>
                <span id="email-confirm"></span>
            </td>
            </tr>
            <tr>
            <th>お問い合わせ件名</th>
            <td>
                <span id="title-confirm"></span>
            </td>
            </tr>
            <tr>
            <th>お問い合わせ詳細</th>
            <td>
                <span id="contactComment-confirm"></span>

            </td>
            </tr>
        </table>
        <p class="c">
            <input type="button" id="back-button" value="内容を編集する">
            <input type="submit" id="send-button" value="内容を送信する">
        </p>

</section>

<section id="complete-section" style="display: none">
    <h2>お問い合わせ完了</h2>
    <div>
        お問い合わせありがとうございます。<br>
        後日、担当よりご返信させていただきます。
    </div>
</section>

</div>
<!--/main-->

<script src="js/contact_read.js?hoge" defer></script>

<x-sub-aside></x-sub-aside>

@endsection

@extends('layout.home')

@section('title', '古物商 加賀 買取・査定')
@section('description', '古物商 加賀 買取・査定')
@section('keyword', '古物商, 加賀谷, 買取・査定, 買取, 古物')

@section('content')

<x-navi path="purchase"></x-navi>

@csrf

<div class="contents c1">
<div class="inner">

<div class="main" id="app">

    <router-view></router-view>

</div>
<!--/main-->




@endsection

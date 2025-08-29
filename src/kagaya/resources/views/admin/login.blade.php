<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    <style>
        main {
            width: 100%;
            padding: 100px auto;
        }
    </style>
    <title>加賀　管理ログイン画面</title>
  </head>
  <body>
    <header class="navbar is-link">
        <div class="navbar-brand">
        <span class="navbar-item">
            <i class="fas fa-home"></i>
        </span>
        <span class="navbar-item">
            <span class="fa fa-language">加賀管理ログイン画面</span>
        </span>
        </div>
    </header>
    <main>
        <div>
            <ul>
                @if ($error)
                    <li>{{$error}}</li>
                @endif
            </ul>
        </div>

        <form action="/admin/login" method="POST">
            @csrf
            <table class="table">
                <tr>
                    <th>ユーザーID</th>
                    <td><input class="" type="text" name="user"></td>
                </tr>
                <tr>
                    <th>パスワード</th>
                    <td><input class="" type="password" name="password"></td>
                </tr>
            </table>
            <button>ログイン</button>
        </form>
    </main>
  </body>
</html>

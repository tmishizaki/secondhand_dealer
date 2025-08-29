<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Item;
use App\Models\ItemImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegisterMail;

class HomeController extends Controller
{
    //

    private $admin_mail = 'info@art-kaga.com';
    private $admin_user = '美術・骨董 加賀 Webシステム';

    function index() {
        return view('home.index');
    }

    function item() {
        return view('home.item');
    }

    function purchase() {
        return view('home.purchase');
    }

    function customerSend(Request $request) {
        $customers = new Customer;
        $customers->name = $request->name;
        $customers->email = $request->email;
        $customers->prefecture = $request->prefecture;
        $customers->addres = $request->addres;
        $customers->save();

        $items = new Item;
        $items->item_type = $request->item_type;
        $items->item_name = $request->item_name;
        $items->item_price = $request->item_price;
        $items->item_detail = $request->item_detail;
        $items->item_comment = $request->item_comment;
        $items->customer_id = $customers->id;
        $items->status = 1;
        $items->save();

        $data = $request->all();

        Mail::send(new RegisterMail($request->email,$request->name,'【美術・骨董　加賀】買取・査定内容のご確認', $data, 'emails.purchase'));
        Mail::send(new RegisterMail($this->admin_mail, $this->admin_user, "【買取・査定】買取・査定依頼がありました", $data, 'emails.purchase-admin'));

        return ['item_id' => $items->id];
    }

    function itemImageSend(Request $request) {
        $itemImages = new ItemImage;
        $itemImages->item_id = $request->item_id;
        $itemImages->image_data = $request->image_data;
        $itemImages->filename = $request->filename;
        $itemImages->save();
        return "ok";
    }


    function purchaseComplete() {
        return view('home.purchaseComplete');
    }

    function company() {
        return view('home.company');
    }

    function owner() {
        return view('home.owner');
    }

    function contact() {
        return view('home.contact');
    }

    function contactSend(Request $request) {
        $data = $request->all();

        Mail::send(new RegisterMail($data['email'],$data['name'],'【美術・骨董　加賀】お問い合わせ内容のご確認', $data, 'emails.contact'));
        Mail::send(new RegisterMail($this->admin_mail, $this->admin_user, "【お問い合わせ】お問い合わせがありました", $data, 'emails.contact-admin'));
        //response()->ok();

        return "OK";
        //return response()->json($data);
    }
}
